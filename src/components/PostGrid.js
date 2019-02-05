import React from "react";
import style from "./post-grid.module.scss";
import PostPreview from "./post-preview";

const PostGrid = ({ title, posts }) => {
  return (
    <div className="container">
      <div className={style.postGrid}>
        {title && <h2>{title}</h2>}
        <ul>
          {posts.map(({ node: post }) => {
            console.log(post);

            return (
              <li key={post.slug}>
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
