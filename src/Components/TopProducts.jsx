import React from "react";
import img1 from "../images/TopProducts/shirt1-cwf9SKdB.png";
import img2 from "../images/TopProducts/shirt2-XQzG6elp.png";
import img3 from "../images/TopProducts/shirt3-HwQ10bVo.png";
import { FaStar } from "react-icons/fa6";
const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
  },
  {
    id: 2,
    img: img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
  },
  {
    id: 3,
    img: img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
  },
];
function TopProducts({ handleOrderPopup }) {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            deleniti aperiam ad?
          </p>
        </div>
        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w[300px]"
            >
              {/* Img Section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* Detail Section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="flex justify-center items-center w-full gap-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="group-hover:text-white duration-300 text--gray-500 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  onClick={() => handleOrderPopup()}
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
