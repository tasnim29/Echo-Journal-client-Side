import React from "react";

const AboutUs = () => {
  return (
    <div className="py-36">
      <div className=" ">
        {/* first section */}
        <div className=" sm:text-center ">
          {/* heading part */}
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">The</span>
              </span>{" "}
              Hello! This is Echo Journal
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              A company turning ideas into beautiful things
            </p>
          </div>
          <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <img
              className="object-cover w-full h-[500px] rounded shadow-lg "
              src="https://i.ibb.co.com/pr01skHn/CPFy0-Yo-Wc-AAC1-Yw.jpg"
              alt=""
            />
          </div>
        </div>
        {/* second section */}
        <div className="px-4 py-16 max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 items-center">
            {/* Left Text Content */}
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start w-16 h-16 mb-4 mx-auto lg:mx-0 rounded-full bg-teal-100">
                <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="8,5 8,1 16,1 16,5"
                    strokeLinejoin="round"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="9,15 1,15 1,5 23,5 23,15 15,15"
                    strokeLinejoin="round"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="22,18 22,23 2,23 2,18"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="9"
                    y="13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    width="6"
                    height="4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="max-w-xl mb-6 mx-auto lg:mx-0">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Who Are We?
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  We are a passionate team of content creators, developers, and
                  enthusiasts who believe in sharing knowledge, ideas, and
                  stories through blogs. Whether it’s the latest trends in tech
                  or thrilling sports updates, our platform brings voices
                  together from across the globe
                </p>
              </div>
              <div>
                <a
                  href="/"
                  className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  Learn more
                  <svg
                    className="w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Image Content */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:w-[430px] lg:h-[430px] h-[430px]">
              <img
                className="absolute bottom-0 left-0 h-[300px] w-[300px] sm:h-[335px] sm:w-[335px] object-cover rounded shadow-lg"
                src="https://i.ibb.co.com/b50LBn0X/office3.jpg"
                alt="Main"
              />
              <img
                className="absolute top-[100px] right-[40px] sm:top-[150px] sm:right-[300px] h-[300px] w-[300px] sm:h-[300px] sm:w-[300px] object-cover rounded shadow-lg transform translate-x-4 translate-y-4 z-10"
                src="https://i.ibb.co.com/ZRJd55PN/office1.jpg"
                alt="Overlap"
              />
            </div>
          </div>
        </div>
        {/* third section */}
        <div className="  bg-[#EDF2FC]">
          <div className="grid gap-10 row-gap-8 lg:grid-cols-3 max-w-7xl mx-auto px-4 py-16">
            <div>
              <div className="flex">
                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                  86K
                </h6>
                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                  <svg
                    className="text-teal-900 w-7 h-7"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <p className="mb-2 font-bold md:text-lg">Downloads</p>
              <p className="text-gray-700">
                Three movie stars, Chloe, Lexa, and Jon, are filming a movie in
                the Amazon. They’re very famous and very high-maintenance
                effort.
              </p>
            </div>
            <div>
              <div className="flex">
                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                  1.3K
                </h6>
                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                  <svg
                    className="text-teal-900 w-7 h-7"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <p className="mb-2 font-bold md:text-lg">Subscribers</p>
              <p className="text-gray-700">
                One day, after filming a scene deep in the rainforest, the three
                actors and their agents decide to head back to home base by
                foot.
              </p>
            </div>
            <div>
              <div className="flex">
                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                  52M
                </h6>
                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                  <svg
                    className="text-teal-900 w-7 h-7"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <p className="mb-2 font-bold md:text-lg">Cookies</p>
              <p className="text-gray-700">
                Suddenly, they come to a large river. On the riverbank, they
                find a small rowboat, but it’s only big enough to hold two of
                them at one time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
