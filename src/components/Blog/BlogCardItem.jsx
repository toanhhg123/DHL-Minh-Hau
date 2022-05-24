import React from "react";

const BlogCardItem = ({img, title, desc, dateUpdate, bannel}) => {
  return (
    <div className="blog__card-item">
      <div className="b__item-img">
        <img src={img} alt="" />
      </div>
      <div className="b__item-content">
        <span>{bannel || 'not found bannel'}</span>
        <h3>{title || 'not found title'}</h3>
        <p>{desc || 'not found description'}</p>
        <small>{dateUpdate || 'not found date'}</small>
      </div>
    </div>
  );
};

export default BlogCardItem;
