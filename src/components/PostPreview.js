import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import style from "./post-preview.module.scss";

const PostPreview = ({ post }) => {
  return (
    <div className={style.preview}>
      <Link to={`/blog/${post.slug}`}>
        <Img alt={post.title} fluid={post.previewImage.fluid} />
      </Link>
      <h3 className={style.previewTitle}>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.publishDate}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: post.description.childMarkdownRemark.html
        }}
      />
    </div>
  );
};

export default PostPreview;
