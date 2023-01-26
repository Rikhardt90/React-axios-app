import React, { useState } from "react";
import "./Pagination.scss"

const Pagination = ({pageData}) => {
  const [actualPage, setActualPage] = useState(1);

  const changePage = (newPage) => {
    pageData(newPage);
    setActualPage(newPage);
  }

  return (
    <div className="pagination">
      <button onClick={() => changePage(actualPage - 1)}>{"<"}</button>
      <p>{actualPage}</p>
      <button onClick={() => changePage(actualPage + 1)}>{">"}</button>
    </div>
  );
};

export default Pagination;
