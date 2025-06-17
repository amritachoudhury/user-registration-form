import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AboutUs from "./navigation/About";
import ContactUs from "./navigation/ContactUs";
import Home from "./navigation/Home";
import Header from "./header/Header";
import { ABOUT_US, CONTACT_US, HOME_PATH, REGISTER_NEW_USER_PATH } from "./utils/constants";
import UserRegistrationForm from "./user-registration/UserRegistrationForm";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element={<Navigate to={REGISTER_NEW_USER_PATH} replace={true} />} />
          <Route index path={HOME_PATH} element={<Home />} />
          <Route path={REGISTER_NEW_USER_PATH} element={<UserRegistrationForm />} />
          <Route path={ABOUT_US} element={<AboutUs />} />
          <Route path={CONTACT_US} element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
