import React from "react";
import "../components/css/pagination.css";

function Pagination({ count, skip, setSkip }) {
  const clickNext = () => {
    setSkip(skip + 3);
  };

  const clickPrevious = () => {
    setSkip(skip - 3);
  };

  let totalPages = 0;
  if (count % 3 === 0) {
    totalPages = count / 3;
  } else {
    totalPages = count / 3 + 1;
  }
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const clickPage = page => {
    setSkip(page * 3 - 3);
  };

  return (
    <ul className="pagination">
      {skip !== 0 && (
        <li
          onClick={() => {
            clickPrevious();
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </li>
      )}
      {pages.map((page, index) => {
        return (
          <li
            className={page === skip / 3 + 1 ? "selected" : null}
            key={index}
            onClick={() => {
              clickPage(page);
            }}
          >
            {page}
          </li>
        );
      })}
      {skip + 3 < count && (
        <li
          onClick={() => {
            clickNext();
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </li>
      )}
    </ul>
  );
}

export default Pagination;
