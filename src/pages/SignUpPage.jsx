import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
    const navigate = useNavigate()
  return (
    <>
    <div>
      <h1 className="text-xl font-semibold text-gray-900">
        Create your PopX account
      </h1>

      {[
        "Full Name*",
        "Phone number*",
        "Email address*",
        "Password *",
        "Company name",
      ].map((label, idx) => (
        <div key={idx} className="mt-4">
          <label className="block text-xs font-semibold text-[#6A3FFC]">
            {label}
          </label>
          <input
            className="mt-1 w-full border rounded-md py-2 px-3 text-sm"
            placeholder="Marry Doe"
          />
        </div>
      ))}
      <div className="mt-4">
        <p className="text-xs font-semibold text-[#6A3FFC] mb-1">
          Are you an Agency?*
        </p>
        <div className="flex items-center gap-6 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="agency" defaultChecked /> Yes
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="agency" /> No
          </label>
        </div>
      </div>

      <button
        onClick={() => setPage("profile")}
        className="mt-6 w-full bg-[#6A3FFC] text-white py-3 rounded-md font-medium text-sm"
      >
        Create Account
      </button>
    </div>

    <div className="mt-27 left-0 w-full flex justify-center gap-6">
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
        <button onClick={() => navigate("/")}>
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
        <button onClick={() => navigate("/login")}>
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

export default SignUpPage;
