import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { useAuth } from "../../Store/auth";

const AdminLayout = () => {
  const { userget, isloading } = useAuth();

  console.log(userget);

  if (isloading) {
    return <h1>Loading...</h1>;
  }

  if (!userget.isadmin) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <header>
        <div className="mt-10 flex justify-center items-center">
          <ul className="flex ">
            <FaUser size={18} className="mt-1" />
            <li className="ml-2 mr-2">
              <NavLink to="/admin/users" className="mt-1">
                Users
              </NavLink>
            </li>
            <IoMdContact size={25} />
            <li className=" ml-2">
              <NavLink to="/admin/contacts">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
