import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews = ({ reviews }) => {
  return (
    <div className="mt-6 p-5 bg-[#1a1a1a] rounded-lg flex flex-col w-full max-w-5xl">
      <h3 className="text-lg font-semibold text-white">Reviews</h3>

      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div
            key={index}
            className={`py-4 w-full ${
              reviews.length > index + 1
                ? "border-b border-b-gray-700"
                : ""
            } flex items-center justify-between`}
          >
            <div>
              <h4 className="font-bold text-white">
                {review?.reviewerName || "Anonymous"}
              </h4>

              <p className="text-gray-300">{review?.comment}</p>

              <p className="text-gray-500 text-sm">
                {new Date(review?.date).toLocaleDateString()}
              </p>
            </div>

            <div className="flex items-center gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400 mt-2">No reviews yet</p>
      )}
    </div>
  );
};

export default Reviews;