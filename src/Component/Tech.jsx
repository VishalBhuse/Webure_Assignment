import React from "react";
import { imgData, toolData } from "../Data";

export const Tech = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 my-2 px-5 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="w-[15.7rem] h-[15.7rem] bg-[#3F0598] text-white flex flex-col justify-center gap-4 items-center	mx-auto rounded-xl px-3 py-3 drop-shadow-3xl border-2 border-600 transform transition duration-500 hover:scale-110  ">
            <img src="./img/d1.png" alt="d1" className="h-24 w-24" />
            <p className="capitalize text-2xl">design</p>
            <p className="dactive w-[14.rem] h-[4.2rem]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>

          {toolData.map((item) => (
            <div
              key={item.id}
              className="w-[15.7rem] h-[15.7rem] flex flex-col justify-center	items-center text-center 	leading-9 mx-auto rounded-xl gap-5 shadow-4xl transform transition duration-500 hover:scale-110  "
            >
              <img src={item.img} alt="d1" className="h-24 w-24 mx-auto" />
              <p className="capitalize text-tech leading-10	 w-[14.7rem] h-[4.2rem] font-semibold text-2xl">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* card img box */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <div className="h-65 w-94 flex flex-col bg-white shadow-3xl justify-center gap-3 items-center  rounded-xl p-2 ">
          <img
            src="./img/Rect1.png"
            alt="Cosmetic Forcest Marketing"
            className="h-52 w-82 object-cover duration-500 hover:scale-105 hover:shadow-xl"
          />
          <div className="py-2">
            <p className="text-xl text-center text-blues font-bold capitalize">
              Cosmetic Forcest Marketing
            </p>
          </div>
        </div>
        {imgData.map((item) => (
          <div
            key={item.id}
            className="h-65 w-94 flex flex-col justify-center gap-3 items-center  rounded-xl p-2 "
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-52 w-82 object-cover duration-500 hover:scale-105 hover:shadow-xl"
            />
            <div className="py-2">
              <p className="text-xl text-center text-blues font-bold w-65 capitalize">
                {item.title}
              </p>
            </div>
          </div>
        ))}

        <div className="h-65 w-94 flex flex-col gap-4 pt-5 rounded-xl">
          <p className="project mt-4 ml-4">projects</p>
          <h2 className="work mt-4 ml-4">Selected Works from Us</h2>
          <a href="/" className="seemore mt-4 ml-4">
            see more
          </a>
        </div>
      </section>
    </>
  );
};
