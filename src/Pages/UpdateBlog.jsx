// import axios from "axios";
import React, { use } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import UseAxiosSecure from "../AxiosHooks/UseAxiosSecure";
import { AuthContext } from "../Context/AuthContext";

const UpdateBlog = () => {
  const { theme } = use(AuthContext);
  const blog = useLoaderData();
  const axiosSecure = UseAxiosSecure();
  //   console.log(blog);
  const { _id, title, imageURL, name, short, long, address, category, email } =
    blog;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedBlog = Object.fromEntries(formData.entries());
    // console.log(updatedBlog);

    // axios
    axiosSecure
      .put(
        `https://assignment-11-server-delta-nine.vercel.app/blogs/${_id}`,
        updatedBlog
      )
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your blog has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="py-36">
      <div
        className={`max-w-4xl mx-auto p-10 rounded-xl shadow-lg transition-colors duration-700 ${
          theme === "dark"
            ? "bg-gray-900 border border-yellow-500"
            : "bg-secondary border border-gray-200"
        }`}
      >
        <header className="mb-12 text-center">
          <h1
            className={`text-4xl font-extrabold mb-2 ${
              theme === "dark" ? "text-primary" : "text-primary"
            }`}
          >
            Update Blog
          </h1>
          <p
            className={`text-lg ${
              theme === "dark" ? "text-base-200" : "text-gray-600"
            }`}
          >
            Fill in the form below to update your blog!
          </p>
        </header>

        <form
          onSubmit={handleUpdate}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-6 gap-6 p-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="title" className="text-sm text-[#374151]">
                Title
              </label>
              <input
                id="title"
                name="title"
                defaultValue={title}
                type="text"
                placeholder="Please enter your blog title"
                className={`w-full mt-2 px-4 py-3 border rounded-lg placeholder-[#9ca3af] text-base sm:text-lg transition ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100 border-gray-600 focus:ring-yellow-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-[#d72050]"
                }`}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="imageURL" className="text-sm text-[#374151]">
                Image of your blog
              </label>
              <input
                id="imageURL"
                name="imageURL"
                defaultValue={imageURL}
                type="text"
                placeholder="Enter image URL"
                className={`w-full mt-2 px-4 py-3 border rounded-lg placeholder-[#9ca3af] text-base sm:text-lg transition ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100 border-gray-600 focus:ring-yellow-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-[#d72050]"
                }`}
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="address" className="text-sm text-[#374151]">
                Author's Address
              </label>
              <input
                id="address"
                name="address"
                defaultValue={address}
                type="text"
                placeholder="Enter address"
                className={`w-full mt-2 px-4 py-3 border rounded-lg placeholder-[#9ca3af] text-base sm:text-lg transition ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100 border-gray-600 focus:ring-yellow-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-[#d72050]"
                }`}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <label htmlFor="category" className="text-sm text-[#374151]">
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue={category}
                className={`w-full mt-2 px-4 py-3 border rounded-lg text-base sm:text-lg transition ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100 border-gray-600 focus:ring-yellow-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-[#d72050]"
                }`}
              >
                <option disabled>Pick a category</option>
                <option>Technology</option>
                <option>Health & Fitness</option>
                <option>Sports</option>
                <option>Education</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-2">
              <label htmlFor="name" className="text-sm text-[#374151]">
                Author Name
              </label>
              <input
                id="name"
                name="name"
                defaultValue={name}
                type="text"
                placeholder="Your name"
                className={`w-full mt-2 px-4 py-3 border rounded-lg placeholder-[#9ca3af] text-base sm:text-lg transition ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100 border-gray-600 focus:ring-yellow-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-[#d72050]"
                }`}
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <label htmlFor="email" className="text-sm text-[#374151]">
                Author Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={email}
                className={`w-full mt-2 px-4 py-3 border rounded-lg placeholder-[#9ca3af] text-base sm:text-lg transition ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100 border-gray-600 focus:ring-yellow-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-[#d72050]"
                }`}
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="short" className="text-sm text-[#374151]">
                Short Description
              </label>
              <textarea
                id="short"
                name="short"
                defaultValue={short}
                placeholder="Shortly write about your blog"
                className={`w-full mt-2 px-4 py-3 border rounded-lg text-base sm:text-lg transition ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100 border-gray-600 focus:ring-yellow-500"
                    : "bg-white text-[#374151] border-gray-300 focus:ring-[#d72050]"
                }`}
              ></textarea>
            </div>

            <div className="col-span-6">
              <label htmlFor="long" className="text-sm text-[#374151]">
                Long Description
              </label>
              <textarea
                id="long"
                name="long"
                defaultValue={long}
                rows="6"
                placeholder="Write your blog briefly"
                className={`w-full mt-2 px-4 py-3 border rounded-lg text-base sm:text-lg transition ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100 border-gray-600 focus:ring-yellow-500"
                    : "bg-white text-[#374151] border-gray-300 focus:ring-[#d72050]"
                }`}
              ></textarea>
            </div>

            <div className="col-span-6">
              <button
                className="btn btn-accent w-full text-secondary"
                type="submit"
              >
                Update
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
