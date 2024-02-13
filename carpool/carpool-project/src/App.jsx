// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { RouterProvider } from "react-router-dom";
import router from "./router";


// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Nav from "./components/nav";
// import Ride from "./components/Ride";
// import SearchRide from "./components/SearchRide";
// import TripsList from "./components/TripsList";

// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <RouterProvider router={router} />
      {/* <Nav />
      <Ride />
      <Home />
      <SearchRide/>
      <TripsList/>
      <Footer /> */}
    </>
  );
}

export default App;
