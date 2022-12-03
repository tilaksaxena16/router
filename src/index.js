import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import "./index.css";
import { Heading } from './Heading/Heading';
import { Email } from './Email/Email';
import { Input } from './Input/Input';
import { Forgetpassword } from './Forgetpassword/Forgetpassword';
import { Signinbutton } from './Signinbutton/Signinbutton';
import { Footer } from './Footer/Footer';
import { Pagename } from './Pagename/Pagename';
import { Fullname } from './Fullname/Fullname';
import { Pagebutton } from './Pagebutton/Pagebutton';
import { Header } from "./Header/Header";
import { Error } from "./Error"


const routerConfig = createBrowserRouter([
  {
    path: "/login",
    element: <div className='page-container'>
      <Heading></Heading>
      <Email name="Email address"></Email>
      <Input></Input>
      <Email name="Password"></Email>
      <Input></Input>
      <div className='flex'>
        <Forgetpassword></Forgetpassword>
        <Signinbutton></Signinbutton>
      </div>
      <Footer></Footer>
    </div>,
  }, {
    path: "/registration",
    element:
      <div><Header></Header>
        <div className='page-layout'>
          <Pagename></Pagename>
          <Fullname name="Full name"></Fullname>
          <Input></Input>
          <Fullname name="Email address"></Fullname>
          <Input></Input>
          <Fullname name="Password"></Fullname>
          <Input></Input>
          <div className='flex'>
            <Pagebutton></Pagebutton>
          </div>
        </div>
      </div>,
  }, {
    path:"/",
    element: <Error />
  }, {
    path: "/home",
    element: <Home />
  }, {
    path: "/about",
    element: <About />
  }


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={routerConfig} />
  </>
);