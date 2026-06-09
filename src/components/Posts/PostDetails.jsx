import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../pageLoader/pageLoader';
import NotFound from '../pageLoader/notFound';
import Comments from './comments';

const PostDetails = () => {
  const { id } = useParams();

  const [post, setPost] = useState()
  const [loading, setLoading] = useState(true)

  const getPostbyId = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/post/${id}`)
      setPost(response.data)

    }
    catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPostbyId()
  }, [])
  if (loading) return <Loader />
  if (!post) return <NotFound />
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

      <h3 className="text-2xl font-bold px-4 py-3 text-gray-900 mb-2 leading-snug">
        {post.title}
      </h3>

      <p className="text-gray-700 text-[15px] leading-7 bg-gray-50 px-4 py-3 rounded-2xl border border-gray-200 shadow-sm">
        {post.body}
      </p>
      <div>

        <Comments postId={post.id} />
      </div>
    </div>
  )
}

export default PostDetails
