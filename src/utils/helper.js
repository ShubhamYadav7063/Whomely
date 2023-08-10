export function filterData(searchText, restaurants) {
    //     return restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));  //filter algorithm

    const filterByName = restaurants.filter((restaurant) =>
        restaurant?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );

    const filterByCuisine = restaurants.filter((restaurant) =>
        restaurant?.cuisines?.some((cuisine) =>
            cuisine?.toLowerCase()?.includes(searchText.toLowerCase())
        )
    );

    return [...filterByName, ...filterByCuisine];
}
