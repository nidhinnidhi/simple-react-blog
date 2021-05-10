import { useState, useEffect } from 'react'
import './App.css';
import Title from './components/Title';
import AddBlog from './components/AddBlog';
import Blogs from './components/Blogs';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogsList = await fetchBlogs();
      setBlogs(blogsList)
    }
    getBlogs();
  }, [])

  const fetchBlogs = async () => {
    const res = await fetch('http://localhost:5000/blogs');
    const data = await res.json();

    return data;
  }

  const addBlog = async (blog) => {
    const res = await fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(blog)
    })
    const data = await res.json()
    setBlogs([...blogs, data]);
  }
  const deleteBlog = async (id) => {
    await fetch(`http://localhost:5000/blogs/${id}`, {
      method: 'DELETE'
    })
    setBlogs(blogs.filter((blog) => blog.id !== id))
  }
  const sortBlogs = () => {
    const reversedBlog = blogs.reverse();
    setBlogs([...reversedBlog])
  }

  return (
    <div className="min-h-screen bg-pink-100 py-6 px-4 sm:py-12">
      <div className="container mx-auto font-poppins" style={{ maxWidth: '600px' }}>
        <section>
          <Title text="Create New Blog" />
          <AddBlog onAdd={addBlog} />
        </section>
        <section>
          <Title text="Blogs" withFilter onToggle={sortBlogs} />
          <div className="flex flex-col-reverse">
            {blogs.length > 0 ?
              <Blogs blogs={blogs} onDelete={deleteBlog} />
              :
              <div
                className="bg-white rounded-xl text-left p-5 shadow-xl mb-5">
                No blog added yet...
            </div>
            }
          </div>
        </section>
      </div>
    </div>

  );
}

export default App;
