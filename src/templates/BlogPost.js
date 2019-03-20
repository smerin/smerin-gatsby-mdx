import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Img from "gatsby-image";
import Template from "../components/Template";
import style from "./BlogPost.module.scss";

export default function BlogTemplate({ data, location }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const { title, banner, previewImage, seoTitle, seoDescription } = frontmatter;

  return (
    <Template location={location.pathname}>
      <SEO
        title={seoTitle}
        description={seoDescription}
        pathname={location.pathname}
        image={previewImage.childImageSharp.fixed.src}
        article
      />
      <div className={style.banner}>
        {banner && (
          <div className={style.bannerImage}>
            <Img alt={title} fluid={banner.childImageSharp.fluid} />
          </div>
        )}
      </div>
      <div className="container">
        <div className={style.content}>
          <h1>{title}</h1>
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
        previewImage {
          childImageSharp {
            fixed(width: 1200, height: 630) {
              ...GatsbyImageSharpFixed
            }
          }
        }
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
