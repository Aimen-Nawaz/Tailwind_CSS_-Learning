import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div
            onClick={() => navigate(`/product/${product.id}`)}
            className="group relative h-82.5 rounded-2xl overflow-hidden cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
        >

            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-contain group-hover:scale-105 transition duration-400 bg-[#1a1a1a]"
            />

            <div className="absolute bottom-3 left-3 px-2 py-1 rounded-lg">

                <span className="text-green-400 text-sm font-semibold">
                    ${product.price}
                </span>

                <h2 className="text-sm font-medium text-white line-clamp-1">
                    {product.title}
                </h2>

            </div>

            <button className="absolute top-3 right-3 px-4 py-1.5 text-sm rounded-lg bg-white/20 backdrop-blur-md hover:bg-white/30 transition text-white">
                View
            </button>

        </div>
    );
};

export default ProductCard;