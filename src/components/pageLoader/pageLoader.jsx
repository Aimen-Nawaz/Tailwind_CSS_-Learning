import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-[#0f0f0f]">
      <BiLoaderCircle className="text-white w-20 h-20 animate-spin duration-500" />
    </div>
  );
};

export default Loader;