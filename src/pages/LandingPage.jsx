import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  let navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col h-full justify-between pb-10">
        {/* circles */}
        <div className="relative h-64">
          {/* {[6, 1, 2, 3, 4, 5].map((n, idx) => (
            <div
              key={idx}
              className={`absolute flex items-center justify-center w-10 h-10 rounded-full bg-[#F4B400] text-white text-sm font-semibold`}
              style={{ top: 20 + idx * 30, left: 60 + idx * 25 }}
            >
              {n}
            </div>
          ))} */}
        </div>

        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Welcome to PopX
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <button
            onClick={() => navigate("/signup")} // naviagate
            className="mt-6 w-full bg-[#6A3FFC] text-white py-3 rounded-md font-medium text-sm"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")} //navigate
            className="mt-3 w-full bg-[#E5D9FF] text-[#3A2A8F] py-3 rounded-md font-medium text-sm"
          >
            Already Registered? Login
          </button>
        </div>
      </div>

      <div className="mt-6 left-0 w-full flex justify-center gap-6">
        <button onClick={() => navigate("/")} className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
        </button>
        <button onClick={() => navigate("/profile")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M11 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={() => navigate("/signup")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </>
  );
}
export default LandingPage;
