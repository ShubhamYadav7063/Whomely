import { IMG_CDN_URL } from "../config";

// const FoodItem = ({ name, imageId, description, price }) => {
//     return (
//         <div className="w-80 border-2 border-gray-100 rounded-xl m-3 p-3 shadow-lg hover:shadow-xl hover:border-gray-300 h-80 flex flex-col justify-evenly gap-1 bg-white">
//             <img
//                 className="w-full h-auto rounded-xl overflow-hidden"
//                 src={IMG_CDN_URL + imageId}
//                 alt="img"
//             />
//             <section>
//             <p className="font-semibold w-60 text-lg hover:cursor-pointer whitespace-nowrap text-ellipsis overflow-hidden">
//                 {name}
//             </p>

//             <p className="whitespace-nowrap overflow-hidden w-60 m-1 font-normal text-gray-500 text-sm overflow-ellipsis">
//                 {description}
//             </p>

//             <h5 className="font-medium m-1 text-sm underline">
//                 ₹{price / 100}
//             </h5>
//             </section>
//         </div>
//     );

const FoodItem = ({ name, imageId, description, price }) => {
    return (
        <div className="w-96 h-24 items-center border-2 border-gray-100 rounded-xl m-3 p-3 shadow-lg hover:shadow-xl hover:border-gray-300  flex flex-row justify-evenly gap-1 bg-white">
            <img
                className="w-40 h-20 rounded-xl overflow-hidden"
                src={IMG_CDN_URL + imageId}
                alt="img"
            />
            <section>
            <p className="font-semibold w-60 text-lg hover:cursor-pointer whitespace-nowrap text-ellipsis overflow-hidden">
                {name}
            </p>

            <p className="whitespace-nowrap overflow-hidden w-60 m-1 font-normal text-gray-500 text-sm overflow-ellipsis">
                {description}
            </p>

            <h5 className="font-medium m-1 text-sm underline">
                ₹{price / 100}
            </h5>
            </section>
        </div>
    );
};

export default FoodItem;
