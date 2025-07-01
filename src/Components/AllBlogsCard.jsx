import axios from "axios";
import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
// react-photo-view
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const AllBlogsCard = ({ blog }) => {
  const { user, theme } = use(AuthContext);
  const { _id, title, imageURL, short, category, name } = blog;
  const handleWishlist = () => {
    const wishlist = {
      blogId: _id,
      userEmail: user.email,
    };

    axios
      .post(
        `https://assignment-11-server-delta-nine.vercel.app/wishlist/${_id}`,
        wishlist
      )
      .then((result) => {
        console.log(result.data);
        Swal.fire({
          title: "Successfully added the blog in the wishlist",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className={`card w-full max-w-sm mx-auto flex flex-col justify-between shadow-lg rounded-lg ${
        theme === "dark"
          ? "bg-[#1e293b] text-white border-2 border-yellow-500"
          : "bg-secondary text-gray-800"
      }`}
    >
      <PhotoProvider>
        <figure className="px-6 pt-6 h-48 overflow-hidden">
          <PhotoView src={imageURL}>
            <img
              src={imageURL}
              alt={title}
              className="rounded-xl w-full h-full object-cover cursor-zoom-in"
            />
          </PhotoView>
        </figure>
      </PhotoProvider>

      <div className="card-body flex flex-col gap-2 px-6 pb-6">
        <h2
          className={`card-title text-xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-700"
          }`}
        >
          {title}
        </h2>
        <p className="font-semibold text-primary">by {name}</p>
        <div className="badge badge-accent w-fit text-secondary">
          {category}
        </div>
        <p
          className={`text-sm line-clamp-3 ${
            theme === "dark" ? "text-white/90" : "text-gray-700"
          }`}
        >
          {short}
        </p>

        <div className="card-actions justify-end mt-auto gap-2">
          <Link
            to={`/blogDetails/${_id}`}
            className="btn btn-sm btn-accent text-secondary"
          >
            Details
          </Link>
          <button
            onClick={handleWishlist}
            className="btn btn-sm btn-primary text-secondary"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogsCard;
