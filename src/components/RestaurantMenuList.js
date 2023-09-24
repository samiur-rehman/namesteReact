import React, { useEffect, useState } from "react";
import { IMG_URL, Menu_API } from "./utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenuList = () => {
  const [menulist, setMenulist] = useState(null);
  const [resDetails, setResDetails] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchResMenuCard();
  }, []);

  const fetchResMenuCard = async () => {
    const data = await fetch(Menu_API + resId);
    const json = await data.json();
    setMenulist(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card
    );
    setResDetails(json?.data?.cards[0]?.card?.card?.info);
  };

  return (
    <div>
      <h1>{resDetails?.name}</h1>
      <h3>{resDetails?.totalRatingsString}</h3>
      <div className="food-menu-container">
        {menulist?.itemCards?.map((item) => {
          return (
            <div key={item.card.info.id} className="food-menu-item">
              <div className="food-img">
                <img src={IMG_URL + item.card.info.imageId} alt="error" />
              </div>
              <div className="food-description">
                <h2 className="food-titile">{item.card.info.name}</h2>
                <p>{item.card.info.description}</p>
                <p className="food-price">
                  Price: &#8377; {Math.trunc(item.card.info.price / 100)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenuList;
