import { createBrowserRouter, redirect } from "react-router-dom";
import DetailTrips from "./components/DetailTrips";
import PostRide from "./components/PostRide";
import Findride from "./views/Findride";
import Hero from "./views/Hero";
import Rootlayout from "./views/layout/Rootlayout";
import Login from "./views/Login";
import Register from "./views/Register";
import Swal from "sweetalert2";
// import React from 'react'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    element: <Rootlayout />,
    loader: () => {
      if (!localStorage.access_token) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/ride",
        element: <Findride />,
      },
      {
        path: "/details/:id",
        element: <DetailTrips />,
      },
      {
        path: "/post-trip",
        element: <PostRide />,
        loader: () => {
          if (localStorage.role !== "Driver") {
            Swal.fire({
              icon: "error",
              title: "You have no access!",
              text:'Sorry only driver can post a trip!'
            });
            throw redirect("/");
          }
          return null;
        },
      },
    ],
  },
]);

export default router;
