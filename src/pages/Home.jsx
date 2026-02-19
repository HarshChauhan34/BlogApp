import { useState } from "react";
import postsData from "../data/dummyPosts";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";

function Home() {
  // Blog posts state
  const [posts, setPosts] = useState(postsData);

  // Search state
  const [search, setSearch] = useState("");

  // Category filter state
  const [category, setCategory] = useState("");

  // Pagination state
  const [page, setPage] = useState(1);

  const perPage = 3;

  // Delete post
  const deletePost = (id) => {
    const confirmDelete = window.confirm("Delete this post?");
    if (confirmDelete) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  // Filter + Search Logic
  const filteredPosts = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? post.category === category : true)
    );
  });

  // Pagination Logic
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * perPage,
    page * perPage,
  );

  return (
    <div className="container">
      {/* Title */}
      <h2 style={{ marginBottom: "15px" }}>📚 Latest Blog Posts</h2>

      {/* Search */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Category Filter */}
      <CategoryFilter category={category} setCategory={setCategory} />

      {/* Blog List */}
      {paginatedPosts.length > 0 ? (
        paginatedPosts.map((post) => (
          <PostCard key={post.id} post={post} onDelete={deletePost} />
        ))
      ) : (
        <p>No posts found.</p>
      )}

      {/* Pagination */}
      <div className="pagination">
        <Pagination
          total={filteredPosts.length}
          perPage={perPage}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default Home;
