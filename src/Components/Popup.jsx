import React from "react";
import { IoCloseOutline } from "react-icons/io5";
function Popup({ orderPopup, setOrderPopup }) {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm z-50">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-sm p-4 bg-white dark:bg-gray-900 duration-200 rounded-md w-[300px]">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1>Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* Form Section */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <div className="flex justify-center"> <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 px-4 py-2 text-white rounded-full">
                      Order Now
                    </button></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
