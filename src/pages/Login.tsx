import React from "react";
import Saly from "../assets/Saly-3.svg";
import Saly2 from "../assets/Saly-2.svg";

const Login = () => {
  return (
    <div className="h-[100vh] login-parent-container relative flex items-center justify-center">
      <span className="absolute text-lg text-[#C6553B] top-[5px] left-[10px] font-poppins">
        Your Logo Here
      </span>
      <div className="flex items-center justify-center w-[100%]">
        <div className="w-[33.33%] grid">
          <img
            src={Saly}
            alt="soly"
            className="justify-self-end soly-img soly-small border-b border-black"
          />
        </div>
        <div className="w-[33.33%] login-container rounded px-3 py-4 border border-solid border-black">
          <span className="font-poppins">Container</span>
        </div>
        <img src={Saly2} alt="soly" className="w-[33.33%] soly-img" />
      </div>
    </div>
  );
};

export default Login;
