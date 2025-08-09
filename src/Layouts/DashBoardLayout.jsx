import React, { use, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

import logo from "../assets/Logo.png";
import { AuthContext } from "../Context/AuthContext";
import { MdHome, MdLogout } from "react-icons/md";

const DashBoardLayout = () => {
  const { signOutUser, user } = use(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    signOutUser();
  };

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <div
        className={`fixed z-40 top-0 left-0 w-64 h-screen bg-gray-100 shadow-md transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative`}
      >
        {/* Close button for mobile */}
        <div className="flex items-center justify-between px-4 py-3 border-b lg:hidden">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-primary"
          >
            ✕
          </button>
        </div>

        {/* Logo */}
        <Link className="py-4" to="/">
          <div>
            <img className="w-24 mx-auto" src={logo} alt="" />
          </div>
        </Link>

        <ul className="p-4 space-y-2 text-primary font-medium">
          <li>
            <NavLink
              to="/dashboard"
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-200"
              onClick={() => setIsSidebarOpen(false)} // Close on click (mobile)
            >
              <MdHome /> Dashboard Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/wishlist"
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-200"
              onClick={() => setIsSidebarOpen(false)} // Close on click (mobile)
            >
              <MdHome /> Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addBlog"
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-200"
              onClick={() => setIsSidebarOpen(false)} // Close on click (mobile)
            >
              <MdHome /> AddBlog
            </NavLink>
          </li>
        </ul>
        {/* Logout button at bottom */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-gray-100">
          <div className="flex items-center gap-3 mb-2 px-2">
            <img
              src={user?.photoURL}
              alt="User"
              className="w-8 h-8 rounded-full object-cover border"
            />
            <span className="text-sm font-medium text-gray-700 truncate">
              {user?.displayName || "User"}
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-4 py-2 text-white bg-accent transition duration-300 hover:scale-105 rounded cursor-pointer"
          >
            <MdLogout size={20} /> Logout
          </button>
        </div>
      </div>

      {/* Content area */}
      <div
        className="flex-1 flex flex-col w-full overflow-auto"
        style={{ maxHeight: "100vh" }}
      >
        {/* Top navbar on small screen */}
        <div className="bg-gray-200 p-4 flex items-center justify-between lg:hidden shadow">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-primary"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* <span className="font-semibold text-lg">Dashboard</span> */}
        </div>

        {/* ✅ Top Navbar */}
        <div className="hidden px-6 py-3 lg:flex items-center justify-between border-b shadow-sm bg-white sticky top-0 z-30">
          <div>
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <small>Here you can see all your important data</small>
          </div>
          <div className="flex items-center gap-4">
            <span>{user.displayName}</span>
            <img src={user.photoURL} className="w-8 h-8 rounded-full" />
          </div>
        </div>

        {/* Main content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
