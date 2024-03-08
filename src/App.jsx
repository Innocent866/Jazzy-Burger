import { useState,Suspense,lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import NavBar from "./layouts/NavBar";
import { Spinner } from 'react-bootstrap';
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import { Toaster } from 'react-hot-toast';
import CheckOut from "./pages/CheckOut";
import ResetPassword from "./pages/ResetPassword";
import Order from "./pages/Order";
import ClientOrder from "./pages/ClientOrder";
import ClientOrderId from "./pages/ClientOrderId";
// import Footer from "./layouts/Footer";

// const NavBar = lazy(() => import('./layouts/NavBar'))
const NavBar= lazy(()=>{
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve  (import('./layouts/NavBar'))

    },1000)
  })

})

const Footer= lazy(()=>{
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve  (import('./layouts/Footer'))

    },1000)
  })

})

function Load() {
  return (
    <div className='d-flex flex-column gap-3 justify-content-center align-items-center vh-100'>
      <Spinner animation='grow' role='status'>
        {/* <span className='visually-hidden'>Loading...</span> */}
      </Spinner>
      {/* <p className='fw-medium'>Welcome to SHOP N BUY</p> */}
    </div>
  )
}


function App() {
  return (
    <>
      <Suspense fallback={<Load />}>
        <BrowserRouter>
          <Routes>
            <Route element={<><NavBar/><Footer/></>}>
              <Route path="/" element={<Home />} />
              <Route path="/CheckOut" element={<CheckOut/>}/>
              <Route path="/Order" element={<Order/>}/>
              <Route path="/ClientOrder" element={<ClientOrder/>} />
            <Route path="/ClientOrderId/:userId" element={<ClientOrderId/>}/>
            </Route>
            <Route path="/LogIn" element={<LogIn/>} />
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/password/:resetToken" element={<ResetPassword/>} />
          </Routes>
        </BrowserRouter>
        <Toaster/>
      </Suspense>
    </>
  );
}

export default App;
