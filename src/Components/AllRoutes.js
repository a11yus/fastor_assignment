import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import RestaurantDetails from './RestaurantDetails';
import Restaurants from './Restaurants';

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element= {<Register />} />
    <Route path="/login" element= {<Login />} />
    <Route path="/restaurants" element= {<Restaurants />} />
    <Route path="/details" element= {<RestaurantDetails />} />
    <Route path="*" element= {<h3>Page Not Found</h3>} />
   </Routes>
  )
}

export default AllRoutes;