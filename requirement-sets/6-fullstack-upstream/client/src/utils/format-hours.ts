export interface IOpeningHours {
  [key: string]: IHoursObj[];
}

export interface IHoursObj {
  start: string;
  end: string;
  type: string;
}

interface IReturnType {
  day: string;
  time: string;
}

interface IGroupedDays {
  days: string[];
  times: string[];
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

export default function formatHours(days: IOpeningHours): IReturnType[] {
  const groupedDays = Object.entries(days).reduce((acc, curr) => {
    console.log(acc, curr);

    return [...acc];
  }, []);

  const formattedHours: IReturnType[] = [];

  return formattedHours;
}

function addClosedDays(openingTimes: any) {
  return;
}
