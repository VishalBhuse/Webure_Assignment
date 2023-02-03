import React from "react";
import { banner2, boxData } from "../Data";

export const Challenge = () => {
  return (
    <>
      {/* choose us box */}
      <section className="max-w-full mx-2 lg:h-[35rem] px-4 sm:px-6 my-2 bg-[#282C4B] mt-20">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="h-[34.6rem]">
            <img
              src="./img/banner2.png"
              alt="banner3"
              className="object-fill h-[34.6rem] w-[42rem]"
            />
          </div>
          <div className="flex flex-col justify-start h-full lg:h-[31.6rem] my-5 gap-5">
            <p className="project">WHY CHOOSE US</p>
            <h2 className="text-white text-4xl font-bold	lg:w-[30rem] w-full">
              Take on any Challenge of the Digital World
            </h2>
            {banner2.map((item) => (
              <div className="flex gap-3 mt-5" key={item.id}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="lg:h-full h-8"
                />
                <p className="text-xl	text-banner3 font-normal">{item.title}</p>
              </div>
            ))}
            <form className="w-full max-w-lg mt-5">
              <div className="flex border-b border-white-500">
                <input
                  className="font-bold text-xl text-red-400 bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Enter your eamil ID"
                  aria-label="Full name"
                />
                <button href="/" className="getstart mt-4 ">
                  get started
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* our solution box */}
      <section className="max-w-7xl mx-auto lg:h-[35rem] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center items-start lg:pl-10 lg:h-[31.6rem] my-5 gap-5 w-11/12 lg:order-1 order-2">
            <p className="text-sol1 font-semibold uppercase">our solution</p>
            <h2 className="text-4xl text-sol3 tracking-wide text-justify font-bold lg:w-[27rem]">
              Launch and scale your marketing campaigns
            </h2>
            <p className="text-sol2 font-medium	text-justify lg:w-[27rem] w-full">
              We start with a kick-off call with the respective project owners,
              onboard the teams on the project management platforms and, take
              off!
            </p>
            <button href="/" className="learnmore mt-4 ">
              learn more
            </button>
          </div>
          <div className="h-full lg:h-[34.6rem] lg:order-2 order-1">
            <img
              src="./img/banner4.png"
              alt="banner3"
              className="object-fill h-[34.6rem] w-[42rem]"
            />
          </div>
        </div>
      </section>

      {/* four box layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 my-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 leading-8	">
          {boxData.map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: item.bg }}
              className="w-71 h-64 flex flex-col justify-center	mx-auto text-white text-center border-none rounded-xl px-5 py-7 leading-10"
            >
              <p className="text-5xl font-bold">{item.no}</p>
              <p className="font-2xl mt-4">{item.text1}</p>
              <p className="text-gray-300 text-xl w-11/12 mx-auto">
                {item.text2}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
