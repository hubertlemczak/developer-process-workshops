import React, { useState } from 'react';
import { IRestaurantDetails } from '../App';

interface IProps {
  setRestaurantData: React.Dispatch<
    React.SetStateAction<IRestaurantDetails | undefined>
  >;
}

function Search({ setRestaurantData }: IProps) {
  const [searchValue, setSearchValue] = useState('');

  async function searchRestaurant(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:3030/api/restaurants/${searchValue}`
      );

      if (res.ok) {
        const { data } = await res.json();
        setRestaurantData(data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="search">
      <form onSubmit={searchRestaurant}>
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button>Search Restaurant</button>
      </form>
    </div>
  );
}

export default Search;
