// import React from 'react'

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PostRide = () => {
  const [form, setForm] = useState({
    from: "",
    to: "",
    price: "",
    distance: "",
    hour: "",
    status: "",
    carName: "",
    carImg: "",
    date: "",
    UserId: "",
  });
    const navigate = useNavigate()
  const url = "http://localhost:3000";
  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const submitadd = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${url}/add-trip`,form, {
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });
    //   setForm(data);
      Swal.fire({
        icon: "success",
        titleText: "Success post new trip ",
      });
      navigate("/ride");
      console.log(data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  };
  return (
    <>
      <div className="pt-36 pb-20  min-h-screen  max-md:px-10  px-24">
        <form
          onSubmit={submitadd}
          className="flex flex-col  gap-6">
          <div className="flex  justify-between">
            <h1 className="text-5xl max-md:text-3xl font-extrabold">
              Post a trip
            </h1>
            <button className="bg-blue-500 text-white font-bold px-8 hover:bg-blue-700 rounded-xl py-3 text-xl ">
              My trips
            </button>
          </div>
          <p className="text-gray-700 max-md:text-base text-2xl">
            Cover your driving costs by filling your seats when you’re driving
            from A to B
          </p>
          <div className="pt-20 max-md:pt-10 flex max-md:flex-col max-md:gap-5 justify-between ">
            <div className="flex flex-col w-[45%] max-md:w-full gap-2">
              <h3 className="font-bold text-2xl">Itinerary</h3>
              <p className="text-gray-600">
                Your origin, destination you are willing to make along the way.
              </p>
              <div className="pt-10 flex flex-col gap-4">
                <div className="flex max-md:flex-col gap-2 justify-between items-center ">
                  <label
                    className="text-gray  max-md:text-start text-md font-bold"
                    htmlFor="">
                    <p className="max-md:text-left">Origin</p>
                  </label>
                  <input
                    placeholder="Enter your origin"
                    value={form.from}
                    onChange={handleChange("from")}
                    className="bg-gray-200 py-4 px-20 rounded-2xl"
                    type="text"
                  />
                </div>
                <div className="flex  max-md:flex-col gap-2 justify-between items-center ">
                  <label className="text-gray text-md font-bold" htmlFor="">
                    Destination
                  </label>
                  <input
                    placeholder="Enter your destination"
                    value={form.to}
                    onChange={handleChange("to")}
                    className="bg-gray-200 py-4 px-20 rounded-2xl"
                    type="text"
                  />
                </div>
                <div className="flex  max-md:flex-col gap-2 justify-between items-center ">
                  <label className="text-gray text-md font-bold" htmlFor="">
                    Distance
                  </label>
                  <input
                    placeholder="Enter your distance"
                    value={form.distance}
                    onChange={handleChange("distance")}
                    className="bg-gray-200 py-4 px-20 rounded-2xl"
                    type="number"
                  />
                </div>
                <div className="flex  max-md:flex-col gap-2 justify-between items-center ">
                  <label className="text-gray text-md font-bold" htmlFor="">
                    Hour
                  </label>
                  <input
                    placeholder="hour..."
                    className="bg-gray-200 py-4 px-20 rounded-2xl"
                    type="number"
                    value={form.hour}
                    onChange={handleChange("hour")}
                  />
                </div>
                {/* <div className="flex  max-md:flex-col gap-2 justify-between items-center ">
                  <label className="text-gray text-md font-bold" htmlFor="">
                    Leaving
                  </label>
                  <input
                    placeholder="Enter your origin"
                    className="bg-gray-200 py-4 px-20 rounded-2xl"
                    type="text"
                  />
                </div> */}
              </div>
            </div>
            <div className="flex max-md:w-full flex-col w-[45%] gap-2">
              <h3 className="font-bold text-2xl">Other inputs</h3>
              <p className="text-gray-600">
                price, and additional informations from your trips.
              </p>
              <div className="pt-10 flex   max-md:gap-2 flex-col gap-4">
                <div className="flex  max-md:flex-col gap-2 justify-between items-center ">
                  <label className="text-gray text-md font-bold" htmlFor="">
                    Price
                  </label>
                  <input
                    placeholder="price..."
                    className="bg-gray-200 py-4 px-20 rounded-2xl"
                    type="number"
                    value={form.price}
                    onChange={handleChange("price")}
                  />
                </div>
                <div className="flex  max-md:flex-col gap-2 justify-between items-center ">
                  <label className="text-gray text-md font-bold" htmlFor="">
                    Description
                  </label>
                  <input
                    placeholder="Enter your origin"
                    className="bg-gray-200 py-4 px-20 rounded-2xl"
                    type="text"
                    value={form.status}
                    onChange={handleChange("status")}
                  />
                </div>
                <div className="flex  max-md:flex-col gap-2 justify-between items-center ">
                  <label className="text-gray text-md font-bold" htmlFor="">
                    Date
                  </label>
                  <input
                    placeholder="Enter your origin"
                    className="bg-gray-200 py-4 px-20 rounded-2xl"
                    type="date"
                    value={form.date}
                    onChange={handleChange("date")}
                  />
                </div>
                <div className="flex  max-md:flex-col gap-2 justify-between items-center ">
                  <label className="text-gray text-md font-bold" htmlFor="">
                    Car image
                  </label>
                  <input
                    placeholder="Enter your origin"
                    className="bg-gray-200 py-4 px-20 rounded-2xl"
                    type="text"
                    value={form.carImg}
                    onChange={handleChange("carImg")}
                  />
                </div>
                <div className="flex  max-md:flex-col gap-2 justify-between items-center ">
                  <label className="text-gray text-md font-bold" htmlFor="">
                    Car name
                  </label>
                  <input
                    placeholder="Enter your origin"
                    className="bg-gray-200 py-4 px-20 rounded-2xl"
                    type="text"
                    value={form.carName}
                    onChange={handleChange("carName")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-10 items-center ">
            <button
              type="submit"
              className="text-white py-4 px-10 rounded-xl hover:bg-blue-700 font-bold bg-blue-500">
              Post trips
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostRide;

// from,
// to,
// price,
// distance,
// hour,
// status,
// carName,
// carImg,
// date,
// UserId,
