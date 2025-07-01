import React, { use, useEffect, useState } from "react";

import AllBlogsCard from "../Components/AllBlogsCard";
import { FcSearch } from "react-icons/fc";
import Loader from "../Components/Loader";
import { AuthContext } from "../Context/AuthContext";
import AllBlogsTableFormat from "../Components/AllBlogsTableFormat";

const AllBlog = () => {
  const { theme } = use(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [showTable, setShowTable] = useState(false);

  // console.log(search);

  useEffect(() => {
    setLoading(true);
    const encodedCategory = encodeURIComponent(selectedCategory);
    fetch(
      `https://assignment-11-server-delta-nine.vercel.app/allBlogs?searchParams=${search}&category=${encodedCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, [search, selectedCategory]);

  const sortedBlogs = [...blogs].sort((a, b) => {
    if (sortOrder === "asc") return a.title.localeCompare(b.title);
    if (sortOrder === "desc") return b.title.localeCompare(a.title);
    return 0;
  });

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="py-36">
      <div className=" max-w-7xl mx-auto px-4">
        <h1
          className={`text-2xl md:text-5xl font-bold text-center mb-10 ${
            theme === "dark" ? "text-yellow-500" : "text-primary"
          }`}
        >
          All The Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Sidebar: spans 1 of 4 columns on medium+ screens */}
          <div className="space-y-4 md:col-span-1">
            {/* Search Bar */}
            <div
              className={`flex items-center gap-2 rounded-lg shadow-sm px-3 py-2 border transition ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-600"
                  : "bg-white border-primary"
              }`}
            >
              <FcSearch size={20} />
              <input
                className={`w-full bg-transparent focus:outline-none text-sm transition ${
                  theme === "dark"
                    ? "text-white placeholder-gray-400"
                    : "text-[#374151]"
                }`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                name="search"
                placeholder="Search by title"
              />
            </div>

            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              name="category"
              className={`select select-bordered w-full ${
                theme === "dark"
                  ? "bg-gray-800 text-white border-gray-600"
                  : "bg-white text-[#374151] border-primary"
              }`}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="">All</option>
              <option value="Technology">Technology</option>
              <option value="Health & Fitness">Health & Fitness</option>
              <option value="Sports">Sports</option>
              <option value="Education">Education</option>
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className={`select select-bordered w-full ${
                theme === "dark"
                  ? "bg-gray-800 text-white border-gray-600"
                  : "bg-white text-[#374151] border-primary"
              }`}
            >
              <option value="">Sort by Title</option>
              <option value="asc">Title: A to Z</option>
              <option value="desc">Title: Z to A</option>
            </select>

            {/* View Toggle Switch */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setShowTable((prev) => !prev)}
                className={`btn btn-sm ${
                  theme === "dark" ? "btn-accent text-secondary" : "btn-primary"
                }`}
              >
                {showTable ? "Switch to Card View" : "Switch to Table View"}
              </button>
            </div>
          </div>

          {/* Blog List */}
          <div className="md:col-span-3">
            {showTable ? (
              <AllBlogsTableFormat blogs={sortedBlogs} />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedBlogs.map((blog) => (
                  <div key={blog._id} className="w-full flex justify-center">
                    <AllBlogsCard blog={blog} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
