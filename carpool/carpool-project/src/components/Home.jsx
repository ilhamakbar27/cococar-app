// import React from 'react'

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const handleQuestion = () => {
    Swal.fire({
      icon: "question",
      title: "still on process",
    });
  };
  return (
    <>
      <div className="pt-10 flex max-lg:grid max-lg:gap-10 pb-32 max-lg:grid-cols-1 justify-between max-md:px-6 px-20">
        <div className="w-[47%] max-lg:w-full">
          <div className="px-5 bg-[#9CD7FF]  hover:transition-all pb-10 hover:ease-in-out hover:scale-105 hover:duration-200 transition-all rounded-2xl gap-8 flex flex-col py-7">
            <h1 className="text-4xl font-[700]">cococar</h1>
            <h4 className="text-5xl font-[800]">Driving somewhere?</h4>
            {/* <h1 className="text-2xl font-semibold">
              City A ____________ City B
            </h1> */}
            <p className="text-xl">
              Post empty seats and collect money to cover your driving costs.
            </p>
            <Link
              to={"/post-trip"}
              className="bg-black py-3 w-[40%] max-md:w-[70%] flex text-center  hover:bg-white hover:text-black px-5 rounded-xl hover:duration-150 text-white font-bold">
              <p className="text-center pl-8">Post your trips</p>
            </Link>
          </div>
        </div>
        <div className="w-[50%] max-lg:w-full hover:transition-all pb-10 hover:ease-in-out hover:scale-105 hover:duration-200  rounded-2xl text-center justify-center items-center flex flex-col gap-6 bg-[#FFEEC4]  px-5">
          <p className="text-center text-2xl font-bold">&%</p>
          <p className="text-5xl font-extrabold">Trust and Safety</p>
          <p className="">Lorem ipsum dolor sit amet consectetur</p>
          <p>Poparide is designed with your safety in mind.</p>
          <button
            onClick={handleQuestion}
            className="bg-black py-3 w-[40%] max-md:w-[80%] flex items-center justify-center hover:bg-white hover:text-black px-5 rounded-xl hover:duration-150 text-white font-bold">
            find out more
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
