import React, { useState } from 'react';
import RestaurantDetails from './components/RestaurantDetails';
import Search from './components/Search';
import { IOpeningHours } from './utils/format-hours';

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

  return (
    <div className="container">
      <Search {...{ setRestaurantData }} />
      <RestaurantDetails {...{ restaurantData }} />
    </div>
  );
}

export default App;
