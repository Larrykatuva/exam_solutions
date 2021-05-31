import React from "react";

const Result = ({ id, image, pages, title }) => {
  return (
    <a href={"/preview/" + id} id="item">
      <img src={image} alt="" />
      <p id="pages">{pages} pages</p>
      <p id="page-footer">{title}</p>
    </a>
  );
};

export default Result;
