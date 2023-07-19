import React from "react";

export default class Ares extends React.Component {
  render = () => (
    <div>
      <img
        src="/images/bg1.jpg"
        alt="Abstract Background"
        className="bg-clip bg-cover w-screen max-h-screen min-h-[45rem] absolute overflow-hidden -z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
        }}
      />
      <nav className="flex justify-center items-center h-24 pl-9">
        <h2 className="mx-10 tracking-widest text-md duration-300 cursor-pointer ease-in-out text-white">
          FEATURES
        </h2>
        <div className="group flex flex-col justify-center items-center">
          <h2 className="mx-10 tracking-widest text-xl font-black duration-300 cursor-pointer ease-in-out text-white">
            HOME
          </h2>
          <span className="absolute w-20 h-0.5 bg-white mt-14 rounded-full "></span>
        </div>
        <h2 className="mx-10 tracking-widest text-md duration-300 cursor-pointer ease-in-out text-white">
          CONTACT US
        </h2>
      </nav>
      <div className="group flex flex-col justify-center items-center mt-24">
        <h2 className="text-[10rem] font-black text-white group-hover:tracking-widest duration-500 ease-in-out">
          ARES
        </h2>
        <p className="text-white text-md -mt-10 -mb-4">
          A simple, fast, and secure web browser.
        </p>
        <button className="bg-white text-slate-900 px-10 py-4 rounded-full mt-10 hover:bg-gray-50 tracking-wide hover:px-12 ease-inout duration-500">
          Download
        </button>
      </div>
    </div>
  );
}
