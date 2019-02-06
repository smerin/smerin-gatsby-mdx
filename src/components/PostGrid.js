import React from "react";
import style from "./PostGrid.module.scss";
import PostPreview from "./PostPreview";

const PostGrid = ({ title, posts }) => {
  return (
    <div className={style.postGrid}>
      <div className="container">
        {title && <h2>{title}</h2>}
        <ul>
          {posts.map(({ node: post }, index) => {
            return (
              <li key={index}>
                <PostPreview post={post} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PostGrid;
