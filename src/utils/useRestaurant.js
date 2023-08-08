import { useState, useEffect } from "react";
import { FETCH_RES_URL } from "../config";

const useRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(FETCH_RES_URL);

    const json = await data.json();
    console.log( json?.data?.cards
      ?.flatMap(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      )
      .map((restaurant) => restaurant?.info))
    setAllRestaurants(
      json?.data?.cards
        ?.flatMap(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        )
        .map((restaurant) => restaurant?.info)
    );

    // setAllRestaurants(json?.data?.cards[2]?.gridElements?.infoWithStyle?.restaurants?.data?.data?.cards);
    // console.log(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(
      json?.data?.cards
        ?.flatMap(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        )
        .map((restaurant) => restaurant?.info)
    );
  }
  // if (!allRestaurants) return null;
  // console.log([allRestaurants,filteredRestaurants])
  return [allRestaurants, filteredRestaurants];
};

export default useRestaurant;
