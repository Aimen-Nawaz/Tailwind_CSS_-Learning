import React from "react";

const HomePage = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center px-6 md:px-16 text-white bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/bg.jpg')"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Glow Beauty
        </h1>

        <p className="text-pink-400 text-lg mb-3 tracking-wide">
          Feel the beauty. Own your glow.
        </p>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
          Discover premium makeup products designed to enhance your natural beauty.
        </p>

        <div className="border-l-4 border-pink-500 pl-4 italic text-gray-400 mb-6">
          “Makeup is not a mask — it’s a way to express your true self.”
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg font-semibold">
            Shop Now
          </button>

          <button className="px-6 py-3 border border-gray-400 hover:bg-white hover:text-black rounded-lg font-semibold">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;