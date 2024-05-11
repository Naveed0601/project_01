import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";
import ErrorPage from "./Pages/ErrorPage";
import Logout from "./Pages/Logout";
import AdminLayout from "./Components/layouts/AdminLayout";
import AdminUser from "./Pages/AdminUser";
import AdminContacts from "./Pages/AdminContacts";
import AdminUpdate from "./Pages/AdminUpdate";

const App = () => {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUser />}></Route>
            <Route path="contacts" element={<AdminContacts />}></Route>
            <Route path="users/:id/edit" element={<AdminUpdate />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
