import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import { ShimmerCard } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  const [listRestaurants, setListRestaurants] = useState([]);
  const [searchBox, setsearchBox] = useState("");
  const [filterResList, setfilterResList] = useState([]);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dataInJson = await data.json();
    console.log(
      dataInJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
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

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  }
  return !listRestaurants?.length ? (
    <ShimmerCard />
  ) : (
    <div className="bodyContainer">
      <div className="flex items-cente mt-[2rem] p-2">
        <div className=" w-96 relative px-2 mr-4 ml-20">
          <label htmlFor="Search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-md border-solid border-gray-800 pl-2 py-2.5 pe-10 shadow-sm sm:text-sm"
            value={searchBox}
            onChange={(e) => setsearchBox(e.target.value)}
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-700"
              onClick={() => {
                const searchResult = filterResList.filter((item) => {
                  return item.info.name
                    .toLowerCase()
                    .includes(searchBox.toLowerCase());
                });
                setListRestaurants(searchResult);
              }}
            >
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className="px-2 mr-4">
          <button
            className="min-w-auto w-48 h-10 bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold"
            onClick={() => {
              const filterList = filterResList.filter((item) => {
                return item.info.avgRating >= 4.4;
              });
              setListRestaurants(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="px-2 mr-4">
          <button
            className="min-w-auto w-24 h-10 bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold"
            onClick={() => {
              setsearchBox("");
              setListRestaurants(filterResList);
            }}
          >
            Rest Filter
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-[2rem]">
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
