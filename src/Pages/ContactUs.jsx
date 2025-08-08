import React, { use } from "react";
import myAnimation from "../assets/Contact Us.json";
import Lottie from "lottie-react";
import { AuthContext } from "../Context/AuthContext";

const ContactUs = () => {
  const { theme } = use(AuthContext);

  const isDark = theme === "dark";
  return (
    <div
      className={`py-36 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDark ? "text-yellow-400" : "text-gray-800"
            }`}
          >
            Let's talk!
          </h2>
          <p
            className={`${isDark ? "text-gray-300" : "text-gray-600"} text-lg`}
          >
            We’d love to hear from you! Whether you have a question, feedback,
            or just want to say hello—feel free to reach out.
          </p>

          {/* Lottie Animation */}
          <div className="flex justify-center md:justify-start">
            <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
              <Lottie animationData={myAnimation} loop />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          noValidate
          className={`space-y-6 p-8 rounded-lg shadow-md transition ${
            isDark ? "bg-gray-800 text-white" : "bg-white"
          }`}
        >
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-medium mb-1 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition ${
                isDark
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-yellow-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-1 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition ${
                isDark
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-yellow-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={`block text-sm font-medium mb-1 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition ${
                isDark
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-yellow-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-4 font-semibold rounded-lg transition ${
              isDark
                ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                : "bg-accent text-white hover:bg-opacity-90"
            }`}
          >
            Send Messag
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
