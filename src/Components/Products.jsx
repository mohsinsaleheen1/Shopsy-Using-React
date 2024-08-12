import React from "react";
import img1 from "../images/Products/Image1.png";
import img2 from "../images/Products/Image2.jpg";
import img3 from "../images/Products/Image3.jpg";
import img4 from "../images/Products/Image4.jpg";
import img5 from "../images/Products/Image5.jpg";
import { FaStar } from "react-icons/fa6";
const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Women Ethnic",
    rating: 5.0,
    author: "White",
    aosDisplay: "0",
  },
  {
    id: 2,
    img: img2,
    title: "Women western",
    rating: 4.5,
    author: "Red",
    aosDisplay: "200",
  },
  {
    id: 3,
    img: img3,
    title: "Goggles",
    rating: 4.7,
    author: "Brown",
    aosDisplay: "400",
  },
  {
    id: 4,
    img: img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    author: "Yellow",
    aosDisplay: "600",
  },
  {
    id: 5,
    img: img5,
    title: "Fashin T-Shirt",
    rating: 4.5,
    author: "Pink",
    aosDisplay: "800",
  },
];
function Products() {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Sellings Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            deleniti aperiam ad?
          </p>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card SEction */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDisplay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  className="w-[150px] h-[220px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.author}</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span>{data.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* button section */}
        <div className="text-center my-10 max-w-[600px] mx-auto">
          <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 px-4 py-2 text-white rounded-md">
            View All Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
