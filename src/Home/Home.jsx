import React from "react";
import { Banner } from "../Component/Banner";
import { Challenge } from "../Component/Challenge";
import { NavBar } from "../Component/Navbar";
import { Tech } from "../Component/Tech";
import { Whatwe } from "../Component/Whatwe";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Challenge />
      <Whatwe />
      <Tech />
    </>
  );
};
