import Lottie from "lottie-react";
import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import UseAxiosSecure from "../AxiosHooks/UseAxiosSecure";

const AddBlog = () => {
  const { user, theme } = use(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newBlog = Object.fromEntries(formData.entries());
    // console.log(newBlog);

    // axios
    axiosSecure
      .post("/blogs", newBlog)
      .then((result) => {
        console.log(result.data);
        Swal.fire({
          title: "Your Blog Has Been Added",
          icon: "success",
          draggable: true,
        });
        form.reset();
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
            Your Blog
          </h1>
          <p
            className={`text-lg ${
              theme === "dark" ? "text-base-200" : "text-gray-600"
            }`}
          >
            Fill in the form below to publish your blog!
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block mb-3 text-lg font-semibold text-primary"
            >
              Blog Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter your blog title"
              className={`w-full rounded-lg px-5 py-3 border transition focus:outline-none focus:ring-3 focus:ring-primary placeholder-gray-400 text-base sm:text-lg ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-600 text-white focus:ring-yellow-500"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="imageURL"
              className="block mb-3 text-lg font-semibold text-primary"
            >
              Blog Image URL
            </label>
            <input
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Paste image URL here"
              className={`w-full rounded-lg px-5 py-3 border transition focus:outline-none focus:ring-3 focus:ring-primary placeholder-gray-400 text-base sm:text-lg ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-600 text-white focus:ring-yellow-500"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>

          {/* Author Address and Photo side by side */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <label
                htmlFor="address"
                className="block mb-3 text-lg font-semibold text-primary"
              >
                Author's Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Enter address"
                className={`w-full rounded-lg px-5 py-3 border transition focus:outline-none focus:ring-3 focus:ring-primary placeholder-gray-400 text-base sm:text-lg ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white focus:ring-yellow-500"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="photoURL"
                className="block mb-3 text-lg font-semibold text-primary"
              >
                User Photo URL
              </label>
              <input
                id="photoURL"
                name="photoURL"
                type="text"
                defaultValue={user.photoURL}
                className={`w-full rounded-lg px-5 py-3 border transition focus:outline-none focus:ring-3 focus:ring-primary placeholder-gray-400 text-base sm:text-lg ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white focus:ring-yellow-500"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>
          </div>

          {/* Category & Author Name side by side */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <label
                htmlFor="category"
                className="block mb-3 text-lg font-semibold text-primary"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue="Pick a category"
                className={`w-full rounded-lg px-5 py-3 border transition focus:outline-none focus:ring-3 focus:ring-primary text-base sm:text-lg ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white focus:ring-yellow-500"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              >
                <option disabled>Pick a category</option>
                <option>Technology</option>
                <option>Health & Fitness</option>
                <option>Sports</option>
                <option>Education</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block mb-3 text-lg font-semibold text-primary"
              >
                Author Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className={`w-full rounded-lg px-5 py-3 border transition focus:outline-none focus:ring-3 focus:ring-primary placeholder-gray-400 text-base sm:text-lg ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white focus:ring-yellow-500"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label
              htmlFor="short"
              className="block mb-3 text-lg font-semibold text-primary"
            >
              Short Description
            </label>
            <textarea
              id="short"
              name="short"
              placeholder="Briefly write about your blog"
              rows={3}
              className={`w-full rounded-lg px-5 py-3 border resize-none transition focus:outline-none focus:ring-3 focus:ring-primary placeholder-gray-400 text-base sm:text-lg ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-600 text-white focus:ring-yellow-500"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            ></textarea>
          </div>

          {/* Long Description */}
          <div>
            <label
              htmlFor="long"
              className="block mb-3 text-lg font-semibold text-primary"
            >
              Long Description
            </label>
            <textarea
              id="long"
              name="long"
              placeholder="Write your blog briefly"
              rows={6}
              className={`w-full rounded-lg px-5 py-3 border resize-y transition focus:outline-none focus:ring-3 focus:ring-primary placeholder-gray-400 text-base sm:text-lg ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-600 text-white focus:ring-yellow-500"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-lg font-extrabold btn btn-accent text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
