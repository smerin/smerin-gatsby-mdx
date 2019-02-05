import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/page/seo";
import Img from "gatsby-image";
import Template from "../components/layout/template";
import style from "./blog-post.module.scss";

export default function BlogTemplate({ data, location }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  console.log(frontmatter.banner.childImageSharp);

  return (
    <Template location={location.pathname}>
      <SEO
        title={frontmatter.seoTitle}
        description={frontmatter.seoDescription}
        pathname={location.pathname}
      />
      <div className={style.blogBanner}>
        <Img
          alt={frontmatter.title}
          fluid={frontmatter.banner.childImageSharp.fluid}
        />
      </div>
      <div className="container">
        <div className="content">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Template>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        banner {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seoTitle
        seoDescription
      }
    }
  }
`;
