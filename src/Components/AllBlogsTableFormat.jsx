import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const AllBlogsTableFormat = ({ blogs }) => {
  const { theme, user } = use(AuthContext);
  const handleWishlist = (blogId) => {
    const wishlist = {
      blogId: blogId,
      userEmail: user.email,
    };

    axios
      .post(
        `https://assignment-11-server-delta-nine.vercel.app/wishlist/${blogId}`,
        wishlist
      )
      .then(() => {
        Swal.fire({
          title: "Successfully added the blog to wishlist",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Error adding to wishlist",
          icon: "error",
        });
      });
  };

  return (
    <div
      className={`overflow-x-auto  border rounded-lg shadow-md ${
        theme === "dark" ? "bg-gray-800" : ""
      }`}
    >
      <table className="table w-full">
        <thead>
          <tr className="bg-primary text-white dark:bg-yellow-500">
            <th className="text-left px-4 py-3">Title</th>
            <th className="text-left px-4 py-3">Category</th>
            <th className="text-left px-4 py-3">Author</th>
            <th className="text-left px-4 py-3">Email</th>
            <th className="text-left px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr
              key={blog._id}
              className={`border-b ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              <td className="px-4 py-3">{blog.title}</td>
              <td className="px-4 py-3">{blog.category}</td>
              <td className="px-4 py-3">{blog.name}</td>
              <td className="px-4 py-3">{blog.email}</td>
              <td className="px-4 py-3 flex gap-2">
                <Link
                  to={`/blogDetails/${blog._id}`}
                  className="btn btn-xs btn-primary"
                >
                  details
                </Link>
                <button
                  onClick={() => handleWishlist(blog._id)}
                  className="btn btn-xs btn-accent text-secondary"
                >
                  Wishlist
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBlogsTableFormat;
