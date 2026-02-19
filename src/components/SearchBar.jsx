function SearchBar({ search, setSearch }) {
  return (
    <input
      placeholder="Search posts..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
