import React, { useState } from "react";

const Pagination = ({pageData}) => {
  const [actualPage, setActualPage] = useState(1);

  const changePage = (newPage) => {
    pageData(newPage);
    setActualPage(newPage);
  }

  return (
    <div>
      <button onClick={() => changePage(actualPage - 1)}>{"<"}</button>
      {actualPage}
      <button onClick={() => changePage(actualPage + 1)}>{">"}</button>
    </div>
  );
};

export default Pagination;
