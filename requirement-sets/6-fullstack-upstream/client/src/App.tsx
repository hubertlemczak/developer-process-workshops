import React, { useState } from 'react';
import RestaurantDetails from './components/RestaurantDetails';
import Search from './components/Search';
import formatHours, { IOpeningHours } from './utils/format-hours';

export interface IRestaurantDetails {
  name: string;
  location: string;
  opening_hours: {
    closed_on_holidays: boolean;
    open_by_arrangement: boolean;
    days: IOpeningHours;
  };
}

function App() {
  const [restaurantData, setRestaurantData] = useState<IRestaurantDetails>();
  const formattedOpeningTimes = formatHours(restaurantData?.opening_hours.days);

  return (
    <div className="container">
      <Search {...{ setRestaurantData }} />
      {formattedOpeningTimes && restaurantData && (
        <RestaurantDetails
          {...{
            name: restaurantData.name,
            location: restaurantData.location,
            formattedOpeningTimes,
          }}
        />
      )}
    </div>
  );
}

export default App;
