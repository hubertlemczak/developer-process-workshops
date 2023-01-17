import React from 'react';
import { IFormattedHours, IHoursObj } from '../utils/format-hours';
import '../index.css';

interface IProps {
  name: string;
  location: string;
  formattedOpeningTimes: IFormattedHours[];
}

function RestaurantDetails({ name, location, formattedOpeningTimes }: IProps) {
  return (
    <div className="restaurant-details">
      <div className="left">
        <h1>{name}</h1>
        <p>{location}</p>
      </div>
      <div className="right">
        <h2>Opening Hours</h2>
        <ul className="hours">
          {formattedOpeningTimes?.map((days, i) => (
            <li key={i}>
              <span>{days.days}</span>
              <div>
                {days.openingHours.split('\n').map((time) => (
                  <>
                    <span>{time}</span>
                    <br />
                  </>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Times({ times }: { times: IHoursObj[] }) {
  return (
    <ul className="hour-range">
      {times.map((time, i) => (
        <li key={i}>
          {time.start} - {time.end}
        </li>
      ))}
    </ul>
  );
}

export default RestaurantDetails;
