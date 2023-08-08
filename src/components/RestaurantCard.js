import { IMG_CDN_URL } from "../config";
import star from "../assets/img/star.png";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  avgRating,
  costForTwo,
}) => {
  // console.log(props)
  return (
    <div className="w-80 border-2 border-gray-100 rounded-xl m-3 p-3 shadow-lg hover:shadow-xl hover:border-gray-300 h-80 flex flex-col justify-evenly gap-1 bg-white">
      <img
        className="w-full h-auto rounded-xl overflow-hidden"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="img"
      />
      <section className="flex justify-between items-center">
        <p className="font-semibold w-60 text-lg hover:underline hover:cursor-pointer whitespace-nowrap text-ellipsis overflow-hidden">
          {name}
        </p>
        <h6
          className={`${
            avgRating < "3"
              ? "bg-red-500"
              : avgRating >= "4"
              ? "bg-green-500"
              : "bg-orange-500"
          } p-0.5 w-12 flex items-center justify-evenly rounded text-white text-sm font-semibold m-2`}
        >
          {avgRating}
          <img src={star} className="w-3" alt="stars" />
        </h6>
      </section>

      <p className="whitespace-nowrap overflow-hidden w-60 m-1 font-normal text-gray-500 text-sm overflow-ellipsis">
        {cuisines.join(", ")}
      </p>

      <div className="flex justify-between">
        <h5 className="font-normal text-sm m-1">
          {sla.deliveryTime} minutes
        </h5>
        <h5 className="font-medium m-1 text-sm underline">{costForTwo}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
