import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resid) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL + resid + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestaurant(json?.data);
    }

    return restaurant;
};

export default useRestaurant;