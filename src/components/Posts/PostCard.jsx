import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { LiaEyeSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ post }) => {
    const navigate = useNavigate()
    return (
        <div
            onClick={() => navigate(`/post/${post.id}`)}
            className="bg-mist-800  rounded-2xl p-5 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
            <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {post.title}
            </h2>

            <p className="text-white text-sm mb-4 line-clamp-4 ">
                {post.body}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
                {post.tags?.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full mb-3"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="border-t border-gray-700 pt-3 flex items-center justify-between">
                <div className="flex gap-4 text-sm text-gray-300">
                    <span><LiaEyeSolid />{post.views}</span>
                    <span><SlLike />{post.reactions?.likes}</span>
                    <span><SlDislike /> {post.reactions?.dislikes}</span>
                </div>

                <button className="px-3 py-1 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default ProductCard;