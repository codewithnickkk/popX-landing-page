import { useState } from 'react'

import './App.css'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import LogInPage from './pages/LogInPage'
import ProfilePage from './pages/ProfilePage'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-[#F4F4F4] p-4">
      <div className="w-full h-[90vh] max-w-sm bg-white border border-gray-200 rounded-md p-4">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}


export default App
