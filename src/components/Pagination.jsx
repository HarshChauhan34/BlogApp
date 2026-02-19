function Pagination({ total, perPage, page, setPage }) {
  const totalPages = Math.ceil(total / perPage);

  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (page > 3) {
        pages.push("...");
      }

      let start = Math.max(2, page - 1);
      let end = Math.min(totalPages - 1, page + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (page < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className="pagination">
      {/* Previous */}
      <button
        className="nav-btn"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        ⬅
      </button>

      {pages.map((p, index) =>
        p === "..." ? (
          <span key={index} className="dots">
            ...
          </span>
        ) : (
          <button
            key={p}
            className={`page ${page === p ? "active" : ""}`}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ),
      )}

      {/* Next */}
      <button
        className="nav-btn"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        ➡
      </button>
    </div>
  );
}

export default Pagination;
