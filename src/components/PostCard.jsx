import { Link } from "react-router-dom";

function PostCard({ post, onDelete }) {
  // Create content preview
  const previewText =
    post.content.length > 100
      ? post.content.substring(0, 100) + "..."
      : post.content;

  return (
    <div className="card">
      {/* Title */}
      <h3 style={{ marginBottom: "8px" }}>{post.title}</h3>

      {/* Author + Category */}
      <p style={{ fontSize: "14px", color: "#555" }}>
        ✍️ {post.author} | 📂 {post.category}
      </p>

      {/* Content Preview */}
      <p style={{ marginTop: "10px" }}>{previewText}</p>

      {/* Action Buttons */}
      <div style={{ marginTop: "12px" }}>
        <Link to={`/post/${post.id}`}>
          <button>View</button>
        </Link>

        <Link to={`/edit/${post.id}`}>
          <button>Edit</button>
        </Link>

        <button
          onClick={() => {
            const confirmDelete = window.confirm(
              "Are you sure you want to delete this post?",
            );
            if (confirmDelete) {
              onDelete(post.id);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostCard;
