import React from "react";
import style from "./PostList.module.scss";

const PostList = ({ posts }) => {
  return (
    <div className="container">
      <div className="content">
        {posts.map((post, index) => {
          const { title, date, excerpt } = post.node.frontmatter;
          return (
            <div key={index} className={style.post}>
              <h2>{title}</h2>
              <p>{date}</p>
              <p>{excerpt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
