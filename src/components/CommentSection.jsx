import { useState } from "react";

function CommentSection({ comments = [] }) {
  // Comment list state
  const [list, setList] = useState(comments);

  // New comment input
  const [text, setText] = useState("");

  // Add comment
  const addComment = () => {
    if (!text.trim()) {
      alert("Write a comment first");
      return;
    }

    setList([...list, text]);
    setText("");
  };

  // Delete comment
  const deleteComment = (index) => {
    const confirmDelete = window.confirm("Delete this comment?");
    if (confirmDelete) {
      const updated = list.filter((_, i) => i !== index);
      setList(updated);
    }
  };

  return (
    <div className="card">
      <h3 style={{ marginBottom: "10px" }}>💬 Comments ({list.length})</h3>

      {/* Comment List */}
      {list.length > 0 ? (
        list.map((c, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <p>👉 {c}</p>

            <button onClick={() => deleteComment(i)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}

      {/* Add Comment */}
      <input
        type="text"
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addComment}>Add Comment</button>
    </div>
  );
}

export default CommentSection;
