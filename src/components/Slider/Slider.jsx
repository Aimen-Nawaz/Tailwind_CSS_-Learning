import React, { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const ProductImageSlider = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <div className="w-min-screen flex flex-col">


            <div className="relative w-full flex justify-center items-center">
                <img
                    src={images[currentIndex]}
                    alt="product"
                    className="h-96 object-contain rounded-lg transition-all duration-300"
                />

                <button
                    onClick={prevImage}
                    className="absolute left-3 bg-black/60 text-white px-3 py-1 rounded-full"
                >
                    <GrPrevious />
                </button>


                <button
                    onClick={nextImage}
                    className="absolute right-3 bg-black/60 text-white px-3 py-1 rounded-full"
                >
                    <GrFormNext />
                </button>
            </div>


            <div className="flex gap-2 mt-4 overflow-x-auto">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${index === currentIndex
                                ? "border-white"
                                : "border-transparent opacity-60"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductImageSlider;