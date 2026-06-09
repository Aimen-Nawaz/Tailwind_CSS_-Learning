import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiLoaderCircle, BiSend, BiTrash } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");

  const handleChange = (e) => setNewComment(e.target.value);

  
  const getPostComments = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/posts/${postId}/comments`
      );
      setComments(response.data.comments);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const res = await axios.post("https://dummyjson.com/comments/add", {
        body: newComment,
        postId,
        userId: 5,
      });

    
      setComments((prev) => [res.data, ...prev]);

      setNewComment("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/comments/${id}`);

      
      setComments((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPostComments();
  }, [postId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <BiLoaderCircle className="text-indigo-500 w-14 h-14 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">


      <div className="px-6 py-5 bg-white from-indigo-500 to-purple-500 text-black flex items-center gap-2">
        <h3 className="text-xl  font-semibold"> Comments</h3>
        <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-sm">
          {comments.length}
        </span>
      </div>

      <div className="p-5 space-y-4 max-h-[420px] overflow-y-auto bg-gray-50">
        {comments.map((c) => (
          <div
            key={c.id}
            className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
              U
            </div>

            <div className="flex-1">
              <p className="text-gray-700 text-sm leading-relaxed">
                {c.body}
              </p>

              <div className="mt-2 flex items-center justify-between">
                
                <span className="flex items-center gap-1 text-indigo-500 text-sm font-medium">
                  <FaThumbsUp className="text-indigo-400" />
                  {c.likes || 0}
                </span>

                <button
                  onClick={() => handleDelete(c.id)}
                  className="text-red-500 text-sm hover:text-red-700 transition flex items-center gap-1"
                >
                  <BiTrash className="size-4" />
                  Delete
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 p-4 bg-white border-t border-gray-100"
      >
        <input
          value={newComment}
          onChange={handleChange}
          placeholder="Write a comment..."
          className="flex-1 bg-gray-100 px-4 py-3 rounded-full text-sm outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 transition text-white p-3 rounded-full shadow-md"
        >
          <BiSend className="text-lg" />
        </button>
      </form>
    </div>
  );
};

export default Comments;