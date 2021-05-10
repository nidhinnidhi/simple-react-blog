import React from 'react'
import Blog from './Blog'

const Blogs = ({ blogs, onDelete }) => {
    return (
        blogs.map((blog) =>
            <Blog blog={blog} key={blog.id} onDelete={onDelete} />
        )
    )
}

export default Blogs
