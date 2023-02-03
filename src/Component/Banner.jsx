import React from "react";
import { capData } from "../Data";

export const Banner = () => {
  return (
    <>
      {/* banner box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 banner1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-36">
          <div className="h-full w-full lg:w-[45vw] flex flex-col justify-center items-start gap-5 order-2 md:order-2">
            <div className="flex justify-center items-center gap-5">
              <img src="./img/verify.png" alt="verify" />
              <p className="capitalize project ">
                Best Business Platform - World Record 2021
              </p>
            </div>
            <h2 className="text-4xl tracking-wide text-justify font-bold text-banner lg:w-[27rem] w-full leading-snug	">
              Reach Your Business Goals in Record Time
            </h2>
            <p className="text-navbar text-xl	font-normal	leading-9	">
              Support small business and join the nationwide movement to
              encourage commercial support for the millions of minority owned
              businesses helping world economy.
            </p>
            <div className="flex justify-items-center items-end gap-5 w-full">
              <button href="/" className="getstart mt-4 ">
                get started
              </button>
              <img src="./img/vd.png" alt="vidoe" className="h-7 w-7" />
              <p className="font-medium	text-lg	text-banner">
                Book a 30 Min Quick Meeting
              </p>
            </div>
          </div>
          <div className="h-full w-full lg:w-[40vw] bg-cover rounded text-center md:order-2 order-1">
            <img
              src="./img/banner1.png"
              alt="banner3"
              // className="rounded h-[34rem]"
            />
          </div>
        </div>
      </div>

      {/* product img */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-16">
          <div className="h-20 flex justify-center p-7">
            <img
              src="./img/slack.png"
              alt="slack"
              className="transition duration-500 hover:scale-125"
            />
          </div>
          <div className="h-20 flex justify-center p-7 ">
            <img
              src="./img/group.png"
              alt="group"
              className="transition duration-500 hover:scale-125"
            />
          </div>
          <div className="h-20 flex justify-center p-7 ">
            <img
              src="./img/micro.png"
              alt="micro"
              className="object-fill h-8 transition duration-500 hover:scale-125"
            />
          </div>
          <div className="h-20 flex justify-center p-7 ">
            <img
              src="./img/zoover.png"
              alt="zoover"
              className="transition duration-500 hover:scale-125"
            />
          </div>
        </div>
      </div>

      {/* service box */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 leading-8">
          <div className="lg:w-80 w-full h-full lg:h-64 flex flex-col gap-5	mx-auto border-none rounded-xl px-5 py-7 leading-10 ">
            <p className="project">service</p>
            <h1 className="text-4xl	font-bold">Our Capabilities</h1>
            <p className="font-2xl mt-4 text-navbar text-sm	font-normal leading-7">
              We will bring the breathe of our experience and industry knowledge
              to help you succeed
            </p>
            <div className="w-full flex justify-end">
              <img src="./img/serv.png" alt="serv" className="h-20 w-20" />
            </div>
          </div>
          {capData.map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: item.bg, boxShadow: item.shadow }}
              className="w-64 h-64 flex flex-col justify-center	mx-auto border-none rounded-xl px-5 py-7 leading-10 "
            >
              <img
                src={item.img}
                alt={item.title}
                className="object-cover h-10 w-10"
              />
              <p className="font-2xl capitalize mt-4 text-blues font-medium text-xl">
                {item.title1}
              </p>
              <p className="font-2xl mt-4 text-navbar text-sm	font-normal leading-7">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
