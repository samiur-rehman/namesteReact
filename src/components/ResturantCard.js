import { IMG_URL } from "./utils/constant";

const ResturantCard = ({ restaurant }) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    cuisines,
    sla: deliveryTime,
  } = restaurant?.info;

  return (
    <div className="cardContainer">
      <img
        className="resCardLogo"
        alt="resturant-image"
        src={IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} Stars</h3>
      <h3>{costForTwo}</h3>
      <h3>{deliveryTime.deliveryTime} Minutes</h3>
    </div>
  );
};

export default ResturantCard;
