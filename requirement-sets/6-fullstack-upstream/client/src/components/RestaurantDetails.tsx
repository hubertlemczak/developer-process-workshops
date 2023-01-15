import React from 'react';
import { IRestaurantDetails } from '../App';
import formatHours, { IHoursObj } from '../utils/format-hours';

function RestaurantDetails({
  restaurantData,
}: {
  restaurantData: IRestaurantDetails | undefined;
}) {
  return (
    <div className="restaurant-details">
      <div className="left">
        <h1>{restaurantData?.name}</h1>
        <p>{restaurantData?.location}</p>
      </div>
      <div className="right">
        <h2>Opening Hours</h2>
        <ul className="hours">
          {restaurantData &&
            Object.entries(restaurantData.opening_hours.days).map((day, i) => (
              <React.Fragment key={i}>
                <li>{day[0]}</li>
                <Times times={day[1]} />
              </React.Fragment>
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
