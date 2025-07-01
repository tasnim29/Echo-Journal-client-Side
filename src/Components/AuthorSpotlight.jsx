import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";

const AuthorSpotlight = () => {
  const [authors, setAuthors] = useState([]);
  const { theme } = use(AuthContext);

  useEffect(() => {
    fetch("https://assignment-11-server-delta-nine.vercel.app/allBlogs")
      .then((res) => res.json())
      .then((data) => {
        const uniqueAuthors = [];
        const emails = new Set();

        for (const blog of data) {
          if (!emails.has(blog.email)) {
            emails.add(blog.email);
            uniqueAuthors.push({
              name: blog.name,
              email: blog.email,
              photoURL: blog.photoURL,
            });
          }

          if (uniqueAuthors.length === 3) break;
        }

        setAuthors(uniqueAuthors);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="mb-8 w-8/12 mx-auto">
        <h2 className="text-2xl font-bold text-primary md:text-4xl text-center">
          Author Spotlight
        </h2>
        <p
          className={`text-base md:text-lg text-center ${
            theme === "dark" ? "text-secondary" : "text-gray-500"
          }`}
        >
          Get to know the minds behind the blogs! Meet our featured authors,
          explore their journeys, and dive into their latest writings.
        </p>
      </div>

      <div className="grid gap-8 row-gap-10 lg:grid-cols-3">
        {authors?.map((author, index) => (
          <div
            key={index}
            className={`text-center rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 cursor-pointer ${
              theme === "dark"
                ? "bg-[#1e293b] text-secondary border-2 border-yellow-500"
                : "bg-secondary text-gray-800"
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
          >
            <div className="w-28 h-28 rounded-full ring-4 ring-accent ring-offset-2 ring-offset-white mx-auto mb-4 flex items-center justify-center">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={author.photoURL}
                alt={author.name}
              />
            </div>

            <h6 className="mb-2 text-xl font-semibold text-primary">
              {author.name}
            </h6>
            <p className="text-sm">{author.email}</p>
            <Link
              to="/featuredBlog"
              className="btn btn-sm btn-accent mt-5 text-secondary"
            >
              Find Them
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorSpotlight;
