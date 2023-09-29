import React from "react";
import { IMG_URL } from "./utils/constant";
import { useParams } from "react-router-dom";
import useFetchRestaurantsMenu from "./utils/useFetchRestaurantsMenu";

const RestaurantMenuList = () => {
  const { resId } = useParams();
  const menuDetails = useFetchRestaurantsMenu(resId);
  return (
    <div>
      <h1>{menuDetails?.cards[0]?.card?.card?.info?.name}</h1>
      <h3>{menuDetails?.cards[0]?.card?.card?.info?.totalRatingsString}</h3>
      <h3>
        {menuDetails?.cards[0]
          ? `Cuisines :
        ${menuDetails?.cards[0]?.card?.card?.info?.cuisines.join(", ")}`
          : null}
      </h3>
      <div className="food-menu-container">
        {menuDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards?.map(
          (item) => {
            console.log(item);
            return (
              <div key={item.card.info.id} className="food-menu-item">
                <div className="food-img">
                  <img src={IMG_URL + item.card.info.imageId} alt="error" />
                </div>
                <div className="food-description">
                  <h2 className="food-titile">{item.card.info.name}</h2>
                  <p>
                    {item.card.info.itemAttribute.vegClassifier === "VEG"
                      ? "Vegetarian: ✅"
                      : "No Vegetarian : ❌"}
                  </p>
                  <p className="food-price">
                    Price: &#8377; {Math.trunc(item.card.info.price / 100)}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuList;
