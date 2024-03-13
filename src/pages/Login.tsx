import React from "react";
import Saly from "../assets/Saly-3.svg";
import Saly2 from "../assets/Saly-2.svg";
import Eye from "../assets/eye.svg";
import Google from "../assets/google.svg";
import Apple from "../assets/apple.svg";
import Facebook from "../assets/Facebook.svg";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../validations/yupValidations";
import { useAppDispatch } from "../store/hooks";
import { authActions } from "../store/slices/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const formikLogin = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(authActions.login({ values }));
    },
  });

  const { errors, touched } = formikLogin;

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
              <p className="text-[45px] font-medium heading">Sign in</p>
            </div>
            <div className="self-start signup signin">
              <span className="text-[#8D8D8D] text-[16px]">No Account ?</span>
              <br />
              <Link to="/signup" className="text-[#E48700] text-[15px]">
                Sign up
              </Link>
            </div>
          </div>
          <form onSubmit={formikLogin.handleSubmit}>
            <div className="mt-5">
              <label
                htmlFor="email"
                className="input-label block text-sm font-medium leading-6 text-black"
              >
                Enter your username or email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  onChange={(e) => {
                    formikLogin.setFieldValue("email", e?.target?.value);
                    formikLogin.setFieldTouched("email", true, false);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2"
                />
                {errors.email && touched.email && (
                  <small className="formik-error">{errors.email}</small>
                )}
              </div>
              <label
                htmlFor="password"
                className="input-label block text-sm font-medium leading-6 text-black mt-[20px]"
              >
                Enter your password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => {
                    formikLogin.setFieldValue("password", e?.target?.value);
                    formikLogin.setFieldTouched("password", true, false);
                  }}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
                <img
                  src={Eye}
                  alt="Eye"
                  className="absolute top-2 right-3 cursor-pointer"
                />
                {errors.password && touched.password && (
                  <small className="formik-error">{errors.password}</small>
                )}
              </div>
              <button className="text-[#AD3113] text-[13px] float-right mt-[15px]">
                Forgot Password
              </button>
            </div>
            <button className="sign-in-btn" type="submit">
              Sign In
            </button>
          </form>
          <p className="text-[#ABABAB] text-[16px] text-center my-[15px] seperator">
            OR
          </p>
          <div className="grid grid-cols-4 gap-4 social-logins">
            <div className="col-span-2 bg-[#FFF4E3] p-[15px] text-center flex rounded items-center">
              <img src={Google} className="w-[20px] h-[20px]" alt="Google" />
              <p className="ms-3 text-[12px] text-[#B87514]">
                Sign in with Google
              </p>
            </div>
            <div className="p-[15px] bg-[#F6F6F6] rounded-[9px] flex justify-center items-center">
              <img src={Facebook} alt="apple" />
            </div>
            <div className="p-[15px] bg-[#F6F6F6] rounded-[9px] flex justify-center items-center">
              <img src={Apple} alt="apple" />
            </div>
          </div>
        </div>
        <img src={Saly2} alt="soly" className="w-[33.33%] soly-img img-1" />
      </div>
    </div>
  );
};

export default Login;
