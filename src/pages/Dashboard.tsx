import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { authActions } from "../store/slices/authSlice";

const Dashboard = () => {
  const user = useAppSelector((store) => store?.user);
  const dispatch = useAppDispatch();
  return (
    <div className="my-10 lg:mx-20 xs:mx-3 lg:text-[1rem] md:text-[1rem] sm:text-[0.7rem] xs:text-[10px]">
      <h1 className="lg:text-[2.5rem] md:text-[2.5rem] sm:text-[2rem] xs:text-[1.5rem] mt-10">
        Dashboard
      </h1>
      <p className="font-semibold dashboard-greeting">
        Welcome <span className="text-[#C6553B]">{user?.username}</span>
      </p>
      <button
        onClick={() => {
          dispatch(authActions.logout());
        }}
        className="mt-4 bg-red-500 hover:bg-red-700 text-[#ffffff] py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
