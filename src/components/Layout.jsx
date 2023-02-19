import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './NavBar';

function Layout (setSearch, rating, setRating) {
  return (
    <div>
      <NavBar setSearch={setSearch} rating={rating} setRating={setRating}/>
      <Outlet />
    </div>
  );
}

export default Layout;