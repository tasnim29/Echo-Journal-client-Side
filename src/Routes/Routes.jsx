import { createBrowserRouter } from "react-router";
import React from "react";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AddBlog from "../Pages/AddBlog";
import AllBlog from "../Pages/AllBlog";
import FeaturedBlog from "../Pages/FeaturedBlog";
import Wishlist from "../Pages/Wishlist";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import BlogDetails from "../Pages/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog";
import Loader from "../Components/Loader";
import ErrorPage from "../Pages/ErrorPage";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import DashBoardHome from "../Pages/DashBoardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loader></Loader>,
        loader: () =>
          fetch("https://assignment-11-server-delta-nine.vercel.app/blogs"),
        Component: Home,
      },

      {
        path: "/updateBlog/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-delta-nine.vercel.app/blogs/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateBlog></UpdateBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBlog",

        Component: AllBlog,
      },
      {
        path: "/aboutUs",

        Component: AboutUs,
      },
      {
        path: "/contactUs",

        Component: ContactUs,
      },
      {
        path: "/blogDetails/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-delta-nine.vercel.app/blogs/${params.id}`
          ),
        Component: BlogDetails,
      },
      {
        path: "/featuredBlog",

        Component: FeaturedBlog,
      },

      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashBoardHome,
      },
      {
        path: "wishlist",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>
          </PrivateRoute>
        ),
      },
      {
        path: "addBlog",
        element: (
          <PrivateRoute>
            <AddBlog></AddBlog>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
