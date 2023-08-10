import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const response = await fetch(FETCH_MENU_URL + resId);

        const json = await response.json();

        const restaurantData =
            json?.data?.cards
                ?.map((e) => e.card)
                ?.find(
                    (x) =>
                        x &&
                        x.card["@type"] ===
                            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
                )?.card?.info || null;
        setRestaurant(restaurantData);

        const menuData =
            json?.data?.cards
                .find((x) => x.groupedCard)
                ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                    (x) => x.card?.card
                )
                ?.filter(
                    (x) =>
                        x["@type"] ===
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                )
                ?.map((x) => x.itemCards)
                .flat()
                .map((x) => x.card?.info) || [];

        const menuItems = [];

        menuData.forEach((item) => {
            if (!menuItems.find((x) => x.id === item.id)) {
                menuItems.push(item);
            }
        });

        // console.log(menuItems)

        setRestaurantMenu(menuItems);
    }

    return [restaurant, restaurantMenu];
};

export default useRestaurantMenu;
