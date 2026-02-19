import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.title || !form.content || !form.author || !form.category) {
      alert("Please fill all fields");
      return;
    }

    console.log("New Post:", form);

    alert("Post Added Successfully");

    // Navigate to home page
    navigate("/");
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: "15px" }}>✍️ Add New Blog Post</h2>

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
          placeholder="Write your blog content..."
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

        {/* Submit Button */}
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default AddPost;
