// import React from "react";

import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import Swal from "sweetalert2";

const Nav = () => {
  const navigate = useNavigate();
  // const [ip, setIP] = useState("");
  // const [ipInfo, setipInfo] = useState("");

  // const getData = async () => {
  //   const res = await axios.get("https://api.ipify.org/?format=json", {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.access_token}`,
  //     },
  //   });
  //   console.log(res.data);
  //   setIP(res.data.ip);
  // };
  // const ipAddress = ip
  // const getIpinfo = async () => {
  //   try {
      
  //     const {data} = await axios.get(
  //       `https://ipgeolocation.abstractapi.com/v1/?api_key=0e13bdd101454fbf94f472875e04779b&ip_address=${ipAddress}`, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.access_token}`,
  //         },
  //       }
  //     );
  //     setipInfo(data);
  //     // console.log(data);
  //   } catch (error) {
  //    console.log(error);
  //   }
  // };

  useEffect(() => {
    //passing getData method to the lifecycle method
    // getData();
    // getIpinfo();
  }, []);
  return (
    <>
      <div className="flex w-full fixed max-md:mx-auto z-10 top-0 items-center max-lg:px-12  bg-white py-4 justify-between max-md:px-8 px-24">
        <Link to="/" className="text-4xl font-semibold">
          cococar
        </Link>
        {/* <p className="pl-[400px] max-md:hidden text-xl font-semibold"> {ipInfo?.city} , {ipInfo?.region}  {ipInfo?.flag?.emoji} </p> */}
        <ul className="flex gap-5 text-xl justify-evenly">
          <details className="dropdown max-md:hidden   ">
            <summary className="m-1 text-lg btn">How it works </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
              <li>
                <a>For driver</a>
              </li>
              <li>
                <a>For passenger</a>
              </li>
            </ul>
          </details>
          <details className="dropdown md:hidden pr-3  ">
            <summary className="m-1 text-lg btn">
              <Icon
                className="text-3xl"
                icon="iconamoon:menu-burger-horizontal-bold"
              />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
              <li>
                <a>For driver</a>
              </li>
              <li>
                <a>For passenger</a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.clear();
                    navigate("/login");
                    console.log("ini ><<<<<<<<<<<<<1");
                  }}>
                  Logout
                </a>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
          </details>
          <li className="flex text-lg max-md:hidden items-center">
            <a
              onClick={(e) => {
                e.preventDefault();
                localStorage.clear();
                navigate("/login");
                console.log("ini ><<<<<<<<<<<<<1");
              }}>
              Logout
            </a>
          </li>
          {/* <li  className="flex text-lg max-md:hidden items-center">Sign up</li> */}
        </ul>
      </div>
    </>
  );
};

export default Nav;
