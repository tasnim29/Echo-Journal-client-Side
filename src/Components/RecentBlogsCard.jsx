import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";
// react-photo-view
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const RecentBlogsCard = ({ blog, index }) => {
  //   console.log(blog);
  const { user, theme } = use(AuthContext);

  const { _id, title, imageURL, name, short } = blog;

  // handle wishlist
  const handleWishlist = () => {
    if (!user?.email) {
      return Swal.fire({
        title: "You haven't logged in?",
        text: "Please log in first...",
        icon: "question",
      });
    }
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
      className={`card flex flex-col justify-between w-full max-w-sm mx-auto transform transition duration-300 hover:scale-105 shadow-lg rounded-lg ${
        theme === "dark"
          ? "bg-[#1e293b] text-white border-2 border-yellow-500"
          : "bg-secondary text-gray-800"
      }`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="800"
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

      <div className="card-body flex flex-col items-center text-center gap-2 px-4 pb-4">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <h3 className="font-semibold text-primary">Author Name: {name}</h3>
        <p className="line-clamp-3">{short}</p>

        <div className="card-actions mt-auto space-x-3">
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

export default RecentBlogsCard;
