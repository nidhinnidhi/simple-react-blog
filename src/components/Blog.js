import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai"

const Blog = ({ blog, onDelete }) => {
    return (
        <div className="bg-white rounded-xl text-left p-5 shadow-xl mb-5 relative">
            <h2 className="text-2xl text-gray-900 font-light border-b border-gray-200 pb-3 mb-3 flex space-between ">
                {blog.title}
            </h2>
            <p className="text-md text-gray-600 mt-2 font-light leading-7">{blog.description}</p>
            <p className="text-sm text-gray-400 italic mt-2">:- {blog.author}</p>
            <AiOutlineCloseCircle className="absolute top-5 right-5 text-2xl text-red-400 cursor-pointer" onClick={() => onDelete(blog.id)} />

        </div>
    )
}

export default Blog
