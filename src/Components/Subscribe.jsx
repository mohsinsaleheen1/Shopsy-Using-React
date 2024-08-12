import React from "react";
import imge from "../images/Subscribe/orangePattern.jpg";
const BannerImage = {
  backgroundImage: `url(${imge})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
function Subscribe() {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImage}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="mx-auto max-w-xl space-y-6">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
