import { Link } from "react-router-dom";

// import React from 'react'

const Ride = () => {
  return (
    <>
      <div className="flex md:pt-[140px] pt-20 flex-row-reverse max-md:flex-col-reverse m  justify-between px-24 max-md:px-7 max-lg:px-12  ">
        <div className="flex flex-col w-[50%] max-md:w-full shadow-xl py-14 max-md:py-8 bg-[#B9E6FF] rounded-3xl px-10 max-md:gap-3.5 gap-5">
          <h3 className="text-[45px]  font-extrabold">Need a ride</h3>
          <h3 className="text-[20px] font-semibold">
            Find a ride and carpool anywhere in Indonesia.
          </h3>
          <h3 className="max-md:hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            magnam
          </h3>
          <h3></h3>
          <div className="grid grid-cols-1 max-md:gap-2 gap-4">
            <input
              className="w-full px-10 font-semibold text-xl bg-gray-100 py-3 rounded-xl"
              type="text"
              placeholder="from"
            />

            <input
              className="w-full text-xl  font-semibold px-10 bg-gray-100 py-3 rounded-xl"
              placeholder="to"
              type="text"
            />
            <input
              className="w-full text-xl  font-semibold px-10 bg-gray-100 py-3 rounded-xl"
              placeholder="date"
              type="date"
            />
          </div>
          <Link to="/ride" className="md:pt-10 pt-4">
            <button className="bg-black py-4 w-[40%] max-lg:w-full  text-xl flex items-center justify-center hover:bg-white hover:text-black px-5 rounded-3xl hover:duration-150 text-white font-bold">
              Find ride
            </button>
          </Link>
        </div>
        <div className="w-[45%] max-md:w-full py-12  flex flex-col gap-8">
          <p className="text-[52px] max-md:text-4xl font-extrabold">
            Carpool for Indonesia{" "}
          </p>
          <p className="font-semibold text-2xl tracking-wide  w-[90%]">
            Join 1,000,000+ people who carpool between cities in Indonesia.{" "}
            <span className="font-bold tracking-wider text-2xl italic">
              Free sign up{" "}
            </span>{" "}
          </p>
          <div className="flex justify-start items-end">
            <Link to={'/ride'} className="bg-black py-4 w-[40%] max-lg:w-[70%] hover:border hover:border-black flex items-center justify-center text-xl hover:bg-white hover:text-black px-5 rounded-xl hover:duration-150 text-white font-bold">
              find out more
            </Link>
          </div>
          <div className="carousel rounded-2xl w-full">
            <div id="item1" className="carousel-item w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                className="w-full"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>

          {/* <div className="h-40 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
              <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Ride;
