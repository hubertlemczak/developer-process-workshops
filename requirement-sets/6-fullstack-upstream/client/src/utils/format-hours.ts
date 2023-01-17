export interface IOpeningHours {
  [key: string]: IHoursObj[];
}

export interface IHoursObj {
  start: string;
  end: string;
  type: string;
}

export interface IFormattedHours {
  days: string;
  openingHours: string;
}

const DAYS_OF_THE_WEEK = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

export default function formatHours(
  days: IOpeningHours | undefined
): IFormattedHours[] | undefined {
  if (!days) return;

  const groupedDays = new Map();
  let openingTime;
  for (let day of DAYS_OF_THE_WEEK) {
    const dayHours = days[day];

    if (dayHours) {
      openingTime = dayHours
        .map((time) => `${time.start} - ${time.end}`)
        .join('\n');
    } else {
      openingTime = 'closed';
    }

    const currentTime = groupedDays.get(openingTime);
    if (currentTime) {
      groupedDays.set(openingTime, [...currentTime, day]);
    } else {
      groupedDays.set(openingTime, [day]);
    }
  }

  const formattedHours: IFormattedHours[] = [];
  groupedDays.forEach((days, openingHours) => {
    formattedHours.push({
      days:
        days.length === 1
          ? `${days[0]}`
          : `${days[0]} - ${days[days.length - 1]}`,
      openingHours,
    });
  });

  return formattedHours;
}
