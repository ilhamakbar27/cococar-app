// import React from 'react'

import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { formatDate } from "../helper/date";
import { rupiah } from "../helper/formatRupiah";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../features/trip";

const TripsList = () => {
  // const [showTrips, setShowTrips] = useState([]);
  // const navigate = useNavigate();
  const { trips } = useSelector((state) => state.trip);
  const dispatch = useDispatch();

  console.log(trips);
  // const url = "http://localhost:3000";
  // const token = localStorage.access_token;

  // async function fetchData() {
  //   try {
  //     const { data } = await axios.get(`${url}/trip`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     console.log(data.data);
  //     setShowTrips(data.data);
  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       icon: "error",
  //       title: error.response.data.error,
  //     });
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect((error) => {
    dispatch(fetchAsync());
    if (error) {
      Swal.fire({
        icon: "error",
        title: error.message,
      });
    }
  }, []);

  return (
    <div className="py-14  max-md:py-2 max-md:px-3 flex flex-col gap-8 px-20 ">
      <h1 className="px-10 text-3xl md:hidden font-bold">Available trips</h1>
      {trips?.map((trip) => {
        return (
          <Link
            to={`/details/${trip.id}`}
            key={trip.id}
            className="py-6 px-10 w-full hover:ease-in-out hover:scale-105 hover:duration-200 transition-all rounded-xl bg-gray-50 divide-x-2 grid grid-cols-8">
            <div className="col-span-2 flex flex-col  gap-2">
              <img
                className="size-20 max-md:size-16 object-cover rounded-full"
                src={trip.User.UserProfile.profileimg}
                alt="vrg"
              />
              <p className="text-xl font-bold"></p>
              <p className="text-md"> No ratings yet</p>
            </div>
            <div className="col-span-4 max-md:col-span-6  pl-7 flex flex-col justify-between gap-8">
              <section className="flex flex-col gap-1">
                <p className="text-xl font-bold">
                  {trip.from} to {trip.to}
                </p>
                <div className="flex text-lg  font-semibold gap-5">
                  <p className="max-md:hidden">Leaving</p>
                  <p>{formatDate(trip.date)}</p>
                </div>
              </section>
              <div className="flex flex-col gap-1">
                <div className="flex gap-4">
                  <p>Pickup: {trip.from} </p>
                  <p></p>
                </div>
                <div className="flex gap-4">
                  <p>Dropoff: {trip.to}</p>
                  {/* <p>Bandung, Bandung station</p> */}
                </div>
              </div>
            </div>
            <div className="col-span-2 max-md:hidden flex pl-7 justify-between g">
              <div className="flex flex-col gap-4">
                <img
                  className="w-full h-20 object-cover "
                  src={trip.carImg}
                  alt=""
                />
                <p>{trip.carName}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-extrabold text-xl   text-[#0099FE]">
                  {rupiah(trip.price)}
                </p>
                {/* <p className="font-semibold text-lg">3 seat Lefts</p> */}
              </div>
            </div>
          </Link>
        );
      })}
      {/* <div className="py-6 px-10 w-full rounded-xl bg-gray-50 divide-x-2 grid grid-cols-8">
        <div className="col-span-2 flex flex-col  gap-2">
          <img
            className="size-16 rounded-full"
            src="https://i.pinimg.com/474x/ef/3d/c4/ef3dc403cf2cec67df4dcd959c35439f.jpg"
            alt=""
          />
          <p className="text-xl font-bold">Jalal</p>
          <p className="text-md"> No ratings yet</p>
        </div>
        <div className="col-span-4 pl-7 flex flex-col justify-between gap-8">
          <section className="flex flex-col gap-1">
            <p className="text-xl font-bold">Jakarta to Bandung</p>
            <div className="flex text-lg  font-semibold gap-5">
              <p>Leaving</p>
              <p>Tuesday, January 16 at 7:00am</p>
            </div>
          </section>
          <div className="flex flex-col gap-1">
            <div className="flex gap-4">
              <p>Pickup:</p>
              <p>Jakarta, Pasar senen station</p>
            </div>
            <div className="flex gap-4">
              <p>Dropoff:</p>
              <p>Bandung, Bandung station</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 max-md:hidden flex pl-7 justify-between g">
          <div className="flex flex-col gap-4">
            <img
              className="w-full h-20 object-cover "
              src="https://i.pinimg.com/564x/d9/5c/d0/d95cd04d85043401df2b957eeba934cd.jpg"
              alt=""
            />
            <p>Hyundai mobil baru</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-extrabold text-xl   text-[#0099FE]">Rp.150k</p>
            <p className="font-semibold text-lg">3 seat Lefts</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TripsList;
