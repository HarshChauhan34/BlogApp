import { useParams, Link } from "react-router-dom";
import posts from "../data/dummyPosts";
import CommentSection from "../components/CommentSection";

function PostDetails() {
  const { id } = useParams();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="container">
        <h2>Post not found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Blog Header */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0px 3px 10px rgba(0,0,0,0.08)",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>{post.title}</h1>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            fontSize: "14px",
            color: "#555",
          }}
        >
          <span>✍️ {post.author}</span>
          <span>📂 {post.category}</span>
        </div>

        {/* Action Buttons */}
        <div style={{ marginTop: "15px" }}>
          <Link to={`/edit/${post.id}`}>
            <button>Edit</button>
          </Link>

          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>

      {/* Blog Content */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0px 3px 10px rgba(0,0,0,0.08)",
          lineHeight: "1.7",
          fontSize: "16px",
        }}
      >
        {post.content}
      </div>

      {/* Comments */}
      <div style={{ marginTop: "20px" }}>
        <CommentSection comments={post.comments || []} />
      </div>
    </div>
  );
}

export default PostDetails;
