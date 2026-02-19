function CategoryFilter({ category, setCategory }) {
  return (
    <div className="category-wrapper">
      <label className="category-label">📂 Filter by Category</label>

      <div className="select-container">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="">All Categories</option>
          <option value="React">React</option>
          <option value="Node">Node</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
        </select>
      </div>
    </div>
  );
}

export default CategoryFilter;
