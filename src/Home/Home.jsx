import React from "react";
import { Banner } from "../Component/Banner";
import { Challenge } from "../Component/Challenge";
import { NavBar } from "../Component/Navbar";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Challenge />
    </>
  );
};
