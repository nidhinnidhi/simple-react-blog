import React, { useState } from 'react'

const AddBlog = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title || !author || !description) {
            alert("Please enter all fields");
            return
        }
        onAdd({ title, author, description });

        setTitle('')
        setAuthor('')
        setDescription('')
    }
    return (
        <form className="text-center w-full" onSubmit={onSubmit}>
            <div className="bg-white rounded-xl text-left p-6 ">
                <div className="flex flex-wrap">
                    <div className="w-3/5 px-2">
                        <input
                            type="text"
                            className="w-full bg-gray-100 border-gray-200 appearance-none rounded-lg  px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="w-2/5 px-2">
                        <input
                            type="text"
                            className="w-full bg-gray-100 border-gray-200 appearance-none rounded-lg  px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
                            placeholder="Author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="w-full mt-4 px-2">
                        <textarea
                            cols="30"
                            rows="3"
                            placeholder="Description"
                            className="w-full bg-gray-100 border-gray-200 appearance-none rounded-lg  px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="w-full mt-2 px-2">
                        <input type="submit" value="Post it" className="bg-pink-500 text-white px-3 py-3 rounded-lg w-full cursor-pointer" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddBlog
