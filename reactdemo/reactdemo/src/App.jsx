import { useState } from "react";
import BlogPost from "./BlogPost";
import "./App.css";

export default function App() {
  const [posts, setPosts] = useState([]);

  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.author && newPost.content) {
      setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
      setNewPost({ title: "", author: "", content: "" });
    }
  };

  return (
    <>
      <h1 className="heading">User Blog Posts</h1>
      <div className="container">
        <form className="blog-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            placeholder="Blog Title"
            required
          />
          <input
            type="text"
            name="author"
            value={newPost.author}
            onChange={handleChange}
            placeholder="Author Name"
            required
          />
          <textarea
            name="content"
            value={newPost.content}
            onChange={handleChange}
            placeholder="Write your blog here..."
            required
          ></textarea>
          <button type="submit">Add Post</button>
        </form>

        <div className="blog-list">
          {posts.map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              author={post.author}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}
