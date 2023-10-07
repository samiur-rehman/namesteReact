import { IMG_URL } from "./utils/constant";

const ItemList = ({ menu }) => {
  return (
    <>
      {menu?.map((item, index) => (
        <div
          key={index}
          className="flex px-4 leading-relaxed bg-gray-50 text-gray-700 pb-4 border-b border-gray-300"
        >
          <div className="w-10/12 mr-10 pt-4">
            <p>{item?.card?.info?.name}</p>
            <p className="text-xs">
              {item?.card?.info?.price
                ? `₹${item?.card?.info?.price / 100}`
                : `₹${item?.card?.info?.defaultPrice / 100}`}
            </p>
            <p className="text-gray-400 text-xs py-2">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-2/12">
            <img
              className="rounded-xl w-[100px] h-[100px] m-2 border-2 border-gray-100"
              src={IMG_URL + item?.card?.info?.imageId}
              onError={(e) => {
                if (e.target.src) {
                  e.target.onerror = null;
                  e.target.src = "https://demofree.sirv.com/nope-not-here.jpg";
                }
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
};
export default ItemList;
