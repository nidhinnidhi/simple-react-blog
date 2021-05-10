import { useState } from 'react'
import './App.css';
import Title from './components/Title';
import AddBlog from './components/AddBlog';
import Blogs from './components/Blogs';

function App() {
  const [blogs, setBlogs] = useState([{
    id: "1",
    title: "The first blog",
    author: "Nidhin",
    description: "The first messages..."
  },
  {
    id: "2",
    title: "Some random title",
    author: "Shraddha",
    description: "Some random text"
  },
  {
    id: "3",
    title: "Title ",
    author: "Varen",
    description: "Here are more... "
  }]);

  const addBlog = (blog) => {
    setBlogs([blog, ...blogs]);
  }
  const deleteBlog = (id) => {
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
          {blogs.length > 0 ?
            <Blogs blogs={blogs} onDelete={deleteBlog} />
            :
            <div
              className="bg-white rounded-xl text-left p-5 shadow-xl mb-5">
              No blog added yet...
            </div>
          }

        </section>
      </div>
    </div>

  );
}

export default App;
