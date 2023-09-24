import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import { resList } from "./utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listRestaurants, setListRestaurants] = useState([]);
  const [searchBox, setsearchBox] = useState("");
  const [filterResList, setfilterResList] = useState([]);
  let reslists = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=CIhNEOskKIDwhKestqHSZzDGDjgD&page_type=null"
    );
    const dataInJson = await data.json();
    dataInJson?.data?.cards?.map((card) => {
      reslists.push(card?.card?.card?.info);
    });
    setListRestaurants(reslists.filter(Boolean));
    setfilterResList(reslists.filter(Boolean));
  };
  console.log(listRestaurants);
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
                return item.name
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
                return item.avgRating >= 4.2;
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
          return <ResturantCard key={item.id} restaurant={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
