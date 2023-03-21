import React from "react";
import { getPagesCount, getPagesArray } from "../../../utils/pages.js";

function MyPagination({ totalPages, page, changePage }) {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="pages__wrapper">
      {pagesArray.map((p) => (
        <button
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "pages__button_active" : "pages__button"}
        >
          {p}
        </button>
      ))}
    </div>
  );
}

export default MyPagination;
