import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/Logo.png";

import { AuthContext } from "../Context/AuthContext";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const { user, signOutUser, setUser, theme } = use(AuthContext);

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully.");
        setUser(null);
      })
      .catch((err) => {
        console.error("Sign-out error:", err);
      });
  };

  const links = (
    <>
      <li className="font-semibold text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary"
              : `${
                  theme === "dark" ? "text-gray-300" : "text-[#374151]"
                } hover:text-primary`
          }
        >
          Home
        </NavLink>
      </li>
      {/* {user && (
        <li className="font-semibold text-sm">
          <NavLink
            to="/addBlog"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : `${
                    theme === "dark" ? "text-gray-300" : "text-[#374151]"
                  } hover:text-primary`
            }
          >
            Add Blog
          </NavLink>
        </li>
      )} */}
      {user && (
        <li className="font-semibold text-sm">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : `${
                    theme === "dark" ? "text-gray-300" : "text-[#374151]"
                  } hover:text-primary`
            }
          >
            DashBoard
          </NavLink>
        </li>
      )}
      <li className="font-semibold text-sm">
        <NavLink
          to="/allBlog"
          className={({ isActive }) =>
            isActive
              ? "text-primary"
              : `${
                  theme === "dark" ? "text-gray-300" : "text-[#374151]"
                } hover:text-primary`
          }
        >
          All blogs
        </NavLink>
      </li>
      <li className="font-semibold text-sm">
        <NavLink
          to="/featuredBlog"
          className={({ isActive }) =>
            isActive
              ? "text-primary"
              : `${
                  theme === "dark" ? "text-gray-300" : "text-[#374151]"
                } hover:text-primary`
          }
        >
          Featured Blogs
        </NavLink>
      </li>
      <li className="font-semibold text-sm">
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive
              ? "text-primary"
              : `${
                  theme === "dark" ? "text-gray-300" : "text-[#374151]"
                } hover:text-primary`
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="font-semibold text-sm">
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            isActive
              ? "text-primary"
              : `${
                  theme === "dark" ? "text-gray-300" : "text-[#374151]"
                } hover:text-primary`
          }
        >
          Contact Us
        </NavLink>
      </li>
      {/* {user && (
        <li className="font-semibold text-sm">
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : `${
                    theme === "dark" ? "text-gray-300" : "text-[#374151]"
                  } hover:text-primary`
            }
          >
            Wishlist
          </NavLink>
        </li>
      )} */}
    </>
  );

  return (
    <div className="w-full fixed top-0 z-50">
      <div
        className={`navbar transition-colors duration-1000 ease-in-out ${
          theme === "dark" ? "bg-black/30 backdrop-blur-xl" : "bg-secondary"
        }`}
      >
        <div className="container mx-auto w-full flex justify-between items-center max-w-7xl py-2">
          {/* Navbar Start */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu */}
            <div className="dropdown lg:hidden">
              <label
                tabIndex={0}
                className="btn btn-ghost pl-1"
                style={{ color: "#374151" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-200"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {links}
              </ul>
            </div>

            {/* Logo and Name */}
            <div className="flex items-center gap-2">
              <img className="w-10 h-10" src={logo} alt="Logo" />
              <span
                className={`font-bold text-xl tracking-wide ${
                  theme === "dark" ? "text-gray-100" : "text-gray-700"
                }`}
              >
                EchoJournal
              </span>
            </div>
          </div>

          {/* Navbar Center */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
          </div>

          {/* Navbar End */}
          <div className="flex items-center gap-3 mt-2 lg:mt-0">
            {user ? (
              <div className="flex items-center gap-4">
                <div
                  className="avatar tooltip tooltip-left cursor-pointer"
                  data-tip={user.displayName}
                >
                  <div
                    className="ring-accent ring-offset-base-100 w-9 rounded-full ring-2 ring-offset-2 "
                    style={{ borderColor: "#d72050" }}
                  >
                    <img src={user.photoURL} alt="User" />
                  </div>
                </div>
                <button
                  className="btn btn-sm btn-outline bg-accent text-secondary"
                  // style={{ backgroundColor: "#d72050", color: "#ffffff" }}
                  onClick={handleSignout}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="space-x-2">
                <Link
                  to="/signin"
                  className="btn btn-sm btn-outline bg-accent text-secondary"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-sm btn-outline bg-accent text-secondary"
                >
                  Sign Up
                </Link>
              </div>
            )}
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
