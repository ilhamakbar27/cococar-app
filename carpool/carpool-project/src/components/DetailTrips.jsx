// import React from 'react'
import { Icon } from "@iconify/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { formatDate } from "../helper/date";
import { rupiah } from "../helper/formatRupiah";

const DetailTrips = () => {
  const notify = () => toast.success("Success book trip!.");
  const notifyerror = () => toast.error("Sorry you cant book a trip!.");
  const notifypending = () => toast.loading("wating your payment...");
  const notifyClose = () => toast.error("You closed the popup without finishing the payment!");
  // const navigate = useNavigate()
  const { id } = useParams();
  const [data, setData] = useState([]);
  const url = "http://localhost:3000";
  const token = localStorage.access_token;
  async function fetchData() {
    try {
      const { data } = await axios.get(`${url}/trip/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handlePay = async () => {

    let {data} = await axios.get(`${url}/payment/midtrans/initiate/${id}`,{
      headers: { Authorization: `Bearer ${token}` },
    })
    console.log(data.transactionToken);
    // notify();

    window?.snap?.pay(data.transactionToken, {
      onSuccess: function (result) {
        /* You may add your own implementation here */
        // alert("payment success!");
        notify();
        console.log(result);
      },
      onPending: function (result) {
        /* You may add your own implementation here */
        // alert("wating your payment!");
        console.log(result);
        notifypending()
      },
      onError: function (result) {
        /* You may add your own implementation here */
        // alert("payment failed!");
        console.log(result);
        notifyerror()
      },
      onClose: function () {
        /* You may add your own implementation here */

        notifyClose()
        // alert("you closed the popup without finishing the payment");
      },
      // notify()
    });
  };

  return (
    <>
      <div className="pt-32 px-24 max-lg:px-10 max-md:px-5 max-md:flex-col max-md:gap-10 h-screen flex justify-between ">
        <div className="w-[55%] max-md:w-full flex flex-col gap-5">
          <div className="flex gap-10">
            <img
              className="size-24 rounded-full"
              src={data?.User?.UserProfile?.profileimg}
              alt=""
            />
            <div className="flex gap-3 items-center">
              <Icon className="text-2xl" icon="material-symbols:verified" />
              <h1 className="font-bold first-letter:uppercase text-2xl">
                {data?.User?.username}
              </h1>
              {/* <h1>verified</h1> */}
            </div>
          </div>
          <p className="text-3xl font-bold">
            {data?.from} to {data?.to}
          </p>
          <p className="text-gray-700 font-semibold text-lg">
            Leaving {formatDate(data?.date)}
          </p>
          <div className="flex flex-col gap-1">
            <p>Pickup: {data?.from}, Indonesia</p>
            <p>Dropoff: {data?.to}, Indonesia</p>
          </div>
          <div className="flex gap-3">
            {/* <p className="text-xl font-semibold text-gray-700 ">3 seat left</p> */}
            <p className="text-xl font-extrabold text-[#0099FE]">
              {rupiah(data?.price)} per seat
            </p>
          </div>
          <p className="text-gray-600 pt-10">{data?.status}</p>
          <div className="pt-10">
            <button
              onClick={handlePay}
              className="bg-[#0099FE] py-3 w-[40%] max-lg:w-[70%] hover:border hover:border-black flex items-center justify-center text-xl hover:bg-white hover:text-black px-5 rounded-xl hover:duration-150 text-white font-bold">
              Book now
            </button>
            <Toaster />
          </div>
          {/* <h1>verfied</h1> */}
        </div>
        <div className="w-[40%] max-md:hidden">
          <div className="pt-24 flex justify-center flex-col gap-3">
            <div className="py-9 rounded-xl w-[80%] px-6 max-lg:px-10 bg-transparent border border-gray-300 ">
              <div className="flex gap-4">
                <img
                  className="object-cover rounded-lg size-36"
                  src={data?.carImg}
                  alt=""
                />
                <p className="font-base">
                  {" "}
                  <span className="font-bold text-2xl">
                    {data?.carName}
                  </span>{" "}
                  <br /> Legend <br /> Tahun 2019 <br />
                </p>
              </div>
              <p className="pt-6">mobil kesayangan akuch</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailTrips;
