import { Link, useNavigate } from "react-router-dom";
import Saly2 from "../assets/Saly-2.svg";
import Saly from "../assets/Saly-3.svg";
import { useFormik } from "formik";
import { SignupSchema } from "../validations/yupValidations";
import { useAppDispatch } from "../store/hooks";
import { authActions } from "../store/slices/authSlice";
import { toast } from "react-toastify";

const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formikSignup = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      username: "",
      contact: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(
        authActions.registerUser({
          values,
          successHandler: () => {
            toast.success("Your registration has been successful.");
            navigate("/login");
          },
        })
      );
    },
  });

  const { errors, touched } = formikSignup;

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
          <form onSubmit={formikSignup.handleSubmit}>
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
                  onChange={(e) => {
                    formikSignup.setFieldValue("email", e?.target?.value);
                    formikSignup.setFieldTouched("email", true, false);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2"
                />
                {errors.email && touched.email && (
                  <small className="formik-error">{errors.email}</small>
                )}
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
                      onChange={(e) => {
                        formikSignup.setFieldValue(
                          "username",
                          e?.target?.value
                        );
                        formikSignup.setFieldTouched("username", true, false);
                      }}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2"
                    />
                    {errors.username && touched.username && (
                      <small className="formik-error">{errors.username}</small>
                    )}
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
                      type="number"
                      onChange={(e) => {
                        formikSignup.setFieldValue("contact", e?.target?.value);
                        formikSignup.setFieldTouched("contact", true, false);
                      }}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2"
                    />
                    {errors.contact && touched.contact && (
                      <small className="formik-error">{errors.contact}</small>
                    )}
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
                  onChange={(e) => {
                    formikSignup.setFieldValue("password", e?.target?.value);
                    formikSignup.setFieldTouched("password", true, false);
                  }}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
                {errors.password && touched.password && (
                  <small className="formik-error">{errors.password}</small>
                )}
              </div>
            </div>
            <button className="mt-[30px] sign-in-btn" type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <img src={Saly2} alt="soly" className="w-[33.33%] soly-img img-1" />
      </div>
    </div>
  );
};

export default Signup;
