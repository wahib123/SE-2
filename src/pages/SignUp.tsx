import { Link } from "react-router-dom";
import Saly2 from "../assets/Saly-2.svg";
import Saly from "../assets/Saly-3.svg";

const Signup = () => {
  return (
    <div className="h-[100vh] login-parent-container relative flex items-center justify-center font-poppins font-normal">
      <span className="window-logo absolute text-lg text-[#C6553B] top-[5px] left-[10px] font-poppins">
        Your Logo Here
      </span>
      <p className="mobile-logo text-lg absolute  top-[5px] left-[10px] text-[#C6553B] font-poppins self-start font-semibold mt-[10px]	ms-[26px] mb-[15px]">
        Your Logo
      </p>

      <div className="flex items-center justify-center w-[100%]">
        <div className="w-[33.33%] grid img-1">
          <img
            src={Saly}
            alt="soly"
            className="justify-self-end soly-img soly-small border-b border-black"
          />
        </div>
        <div className="w-[33.33%] login-container px-10 py-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[20px] greeting">
                Welcome to <span>Lorem</span>
              </p>
              <p className="text-[45px] font-medium heading">Sign up</p>
            </div>
            <div className="self-start signup">
              <span className="text-[#8D8D8D] text-[16px]">
                Have an Account ?
              </span>
              <br />
              <Link to="/login" className="text-[#E48700] text-[15px]">
                Sign in
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="email"
              className="input-label block text-sm font-medium leading-6 text-black"
            >
              Enter your email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2"
              />
            </div>
            <div className="mt-[20px] grid grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="username"
                  className="input-label block text-sm font-medium leading-6 text-black"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="input-label block text-sm font-medium leading-6 text-black"
                >
                  Contact Number
                </label>
                <div className="mt-2">
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
              </div>
            </div>
            <label
              htmlFor="password"
              className="input-label block text-sm font-medium leading-6 text-black mt-[20px]"
            >
              Enter your password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button className="mt-[30px] sign-in-btn">Sign Up</button>
        </div>
        <img src={Saly2} alt="soly" className="w-[33.33%] soly-img img-1" />
      </div>
    </div>
  );
};

export default Signup;
