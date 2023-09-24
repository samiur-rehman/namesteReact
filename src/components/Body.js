import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listRestaurants, setListRestaurants] = useState([]);
  const [searchBox, setsearchBox] = useState("");
  const [filterResList, setfilterResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dataInJson = await data.json();
    console.log(
      dataInJson?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );

    setListRestaurants(
      dataInJson?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setfilterResList(
      dataInJson?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
  };
  return !listRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="bodyContainer">
      <div className="searchContainer">
        <div>
          <input
            type="text"
            value={searchBox}
            onChange={(e) => setsearchBox(e.target.value)}
          />
          <button
            onClick={() => {
              const searchResult = filterResList.filter((item) => {
                return item.info.name
                  .toLowerCase()
                  .includes(searchBox.toLowerCase());
              });
              setListRestaurants(searchResult);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              const filterList = filterResList.filter((item) => {
                return item.info.avgRating >= 4;
              });
              setListRestaurants(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setsearchBox("");
              setListRestaurants(filterResList);
            }}
          >
            Rest Filter
          </button>
        </div>
      </div>
      <div className="resContainer">
        {listRestaurants?.map((item) => {
          return (
            <Link key={item.info.id} to={"/restaurants/" + item.info.id}>
              <ResturantCard restaurant={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
