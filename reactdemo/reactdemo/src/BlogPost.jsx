import { useEffect } from "react";

export default function BlogPost({ title, author, content }) {
  useEffect(() => {
    console.log(`Blog Post Loaded: ${title}`);

    return () => {
      console.log(`Blog Post Unmounted: ${title}`);
    };
  }, [title]);

  return (
    <div className="blog-card">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-author">By {author}</p>
      <p className="blog-content">{content}</p>
    </div>
  );
}
