import React from "react";

import "./Pagination.css";

const Pagination = ({ totalPost, postPerPage, onClick, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <>
        {pages.length > 1 && <ul className="page-number">
        {pages.map((page) => (
            <li key={page}>
            <button 
              className={parseInt(currentPage) === page ? "page-btn active" : "page-btn"} 
              onClick={() => onClick(page)}
            >
              {page}
            </button>
            </li>
        ))}
        </ul>}
    </>
  );
};

export default Pagination;
