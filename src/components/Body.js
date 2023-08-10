import { useState} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, filteredRes] = useRestaurant();
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);

    const searchData = (searchText, allRestaurants) => {
        if (searchText !== "") {
            const data = filterData(searchText, allRestaurants);
            //   console.log(data)
            setFilteredRestaurants(data);
        } else {
            setFilteredRestaurants(allRestaurants);
        }
    };

    return (
        <div className="m-10">
            <div className="flex justify-center m-10">
                <input
                    type="text"
                    className="border-2 border-gray-300 rounded-tl-md rounded-bl-md w-1/4 p-2 outline-none active:border-gray-400 border-r-0"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                        const key = e.key;
                        if (key == "Enter") {
                            searchData(searchText, allRestaurants);
                        }
                    }}
                />
                <button
                    className="bg-red-500 hover:bg-red-600 border-gray-300 hover:border-gray-400 border-2 text-white rounded-tr-md rounded-br-md font-bold p-3"
                    onClick={() => {
                        searchData(searchText, allRestaurants);
                    }}
                >
                    Search
                </button>
            </div>
            {allRestaurants?.length === 0 ? (
                <Shimmer />
            ) : (
                <div className="flex flex-wrap justify-center my-0">
                    {(filteredRestaurants === null
                        ? filteredRes
                        : filteredRestaurants
                    ).map((restaurant) => {
                        return (
                            <Link to={"/restaurant/" + restaurant.id}>
                                <RestaurantCard {...restaurant} />
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Body;
