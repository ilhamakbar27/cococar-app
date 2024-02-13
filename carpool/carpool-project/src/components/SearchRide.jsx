import { Icon } from "@iconify/react";

// import React from 'react'

const SearchRide = () => {
  return (
    <>
      <section className="px-20  max-md:px-5 pt-24 pb-10   py-10">
        <div className="w-full max-md:hidden h-48  bg-[#44A5C8]  relative flex flex-col rounded-xl pb-40 ">
          <p className="text-center text-white py-14 max-md:text-2xl font-bold text-4xl">
            Your pick of rides at low prices
          </p>
          <div className="w-[85%] max-md:hidden absolute h-[80px] flex justify-center translate-y-8 shadow-lg rounded-3xl centered-bottom  bg-white items-center">
            <div className="grid grid-cols-4 max-md:grid-cols-1 max-md:gap-1 w-full h-full  divide-x-2">
              <div className="relative  ">
                <Icon
                  className="absolute translate-x-5 text-gray-600 text-3xl centered-left"
                  icon="icons8:up-round"
                />
                <p className="text-lg text-gray-500 translate-x-16 absolute centered-left ">
                  Leaving from...
                </p>
              </div>
              <div className="relative">
                <Icon
                  className="absolute translate-x-5 text-3xl centered-left"
                  icon="icons8:up-round"
                />
                <p className="text-lg text-gray-500 translate-x-16 absolute centered-left ">
                  Going to...
                </p>
              </div>
              <div className=" flex divide-x-2 ">
                <div className="w-full  relative">
                  <section className="absolute centered-left flex gap-2 items-center translate-x-3">
                    <Icon className="text-3xl" icon="icons8:up-round" />
                    <p className="text-xl text-gray-500">Date</p>
                  </section>
                </div>
                {/* <div className="w-[50%] relative">
                  <Icon
                    className="absolute translate-x-5 text-3xl centered-left"
                    icon="icons8:up-round"
                  />
                  <p className="text-xl text-gray-500 translate-x-16 absolute centered-left ">
                    to
                  </p>
                </div> */}
              </div>
              <button className="text-center w-full h-full text-xl text-white  rounded-r-3xl tracking-wide  font-bold bg-[#00AFF5] hover:bg-green-600">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchRide;
