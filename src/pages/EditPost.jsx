import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import postsData from "../data/dummyPosts";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
  });

  // Load post data on page load
  useEffect(() => {
    const post = postsData.find((p) => p.id === Number(id));

    if (post) {
      setForm({
        title: post.title,
        content: post.content,
        author: post.author,
        category: post.category,
      });
    }
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit updated post
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.title || !form.content || !form.author || !form.category) {
      alert("Please fill all fields");
      return;
    }

    // Update logic (frontend only)
    const updatedPosts = postsData.map((p) =>
      p.id === Number(id) ? { ...p, ...form } : p,
    );

    console.log("Updated Posts:", updatedPosts);

    alert("Post Updated Successfully");

    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: "15px" }}>✏️ Edit Blog Post</h2>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={form.title}
          onChange={handleChange}
        />

        {/* Content */}
        <textarea
          name="content"
          placeholder="Update blog content..."
          rows="6"
          value={form.content}
          onChange={handleChange}
        />

        {/* Author */}
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={form.author}
          onChange={handleChange}
        />

        {/* Category */}
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="React">React</option>
          <option value="Node">Node</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
        </select>

        {/* Update Button */}
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}

export default EditPost;
