import React from "react";
import img from "../../Access/banner-right.jpg";
import Header from "../Header/Header";
import BlogCardItem from "./BlogCardItem";
import "./Blog.scss";

const datas = [
  {
    id: 1,
    img: img,
    title: "Upc là gì? Cách định dạng mã UPC",
    desc: "Cùng với mã EAN, UPC là mã vạch chủ yếu được sử dụng để quét…",
    dateUpdate: "Cập nhật vào: 25/03/2022",
    bannel: "Kiến thức",
  },
  {
    id: 2,
    img: img,
    title: "Upc là gì? Cách định dạng mã UPC",
    desc: "Cùng với mã EAN, UPC là mã vạch chủ yếu được sử dụng để quét…",
    dateUpdate: "Cập nhật vào: 25/03/2022",
    bannel: "Kiến thức",
  },
  {
    id: 3,
    img: img,
    title: "Upc là gì? Cách định dạng mã UPC",
    desc: "Cùng với mã EAN, UPC là mã vạch chủ yếu được sử dụng để quét…",
    dateUpdate: "Cập nhật vào: 25/03/2022",
    bannel: "Kiến thức",
  },
];

const Blog = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="blog">
        <div className="blog__container container">
          <div className="blog__cards">
            {datas.map((card) => (
              <BlogCardItem key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
