// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './Home/Home';
import { Route, Routes } from "react-router-dom";
import Collections from './collections/Collections';
import ScrollToTop from './components/ScrollToTop';
import Signup from './components/Signup';
import Login from "./components/Login";
import Abouts from './collections/Abouts';
import Contacts from './collections/Contacts';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from './context/AuthProvider';
import { Navigate } from "react-router-dom";


function App() {
  const [authUser]=useAuth();
  console.log(authUser)
  return (
    <>
      <div className='dark:bg-gray-900 dark:text-white'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={authUser ? <Collections /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/contact" element={<Contacts />} />
        
      </Routes>
      <ToastContainer />
      <Toaster />
      <ScrollToTop />
      <Login /></div>
    </>
  );
}

export default App;
