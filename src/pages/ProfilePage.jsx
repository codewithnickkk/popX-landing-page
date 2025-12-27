import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const navigate = useNavigate()

  return (
    <>
    <div>
      <h1 className="text-lg font-semibold text-gray-800 mb-4">
        Account Settings
      </h1>

      <div className="flex items-center gap-4 border-b pb-4">
        <img
          src="https://i.pravatar.cc/100"
          className="w-16 h-16 rounded-full"
        />

        <div>
          <p className="font-semibold">Marry Doe</p>
          <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm mt-4 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione adipisci cupiditate sunt eligendi enim debitis. Assumenda eveniet neque sed vero porro voluptas quidem repellat quibusdam.
      </p>
    </div>
    
    <div className="mt-99 left-0 w-full flex justify-center gap-6">
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
        <button onClick={() => navigate("/login")}>
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
        <button onClick={() => navigate("/")}>
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

export default ProfilePage;
