import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Template from "../components/Template";
import PageBanner from "../components/PageBanner";
import KoraFeature from "../components/KoraFeature";
import PostGrid from "../components/PostGrid";

class HomePage extends Component {
  render() {
    const {
      banner,
      previewImage,
      allMarkdownRemark: { edges: posts }
    } = this.props.data;

    return (
      <Template location={this.props.location}>
        <SEO
          title="George Smerin | Musician and web developer from Bristol, UK"
          titleTemplate="%s"
          image={previewImage.childImageSharp.fixed.src}
          description="Welcome to the website of George Smerin, musician and web developer from Bristol (UK). Read all about my recent adventures in music and technology."
        />
        <PageBanner
          title="George Smerin"
          subtitle="Musician and web developer from Bristol, UK"
          banner={banner}
        />
        {/* <KoraFeature /> */}
        <PostGrid posts={posts} title="Latest from the blog" />
      </Template>
    );
  }
}

export default HomePage;

export const homePageQuery = graphql`
  query {
    banner: file(relativePath: { eq: "home-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    previewImage: file(relativePath: { eq: "preview/home-preview.jpg" }) {
      childImageSharp {
        fixed(width: 1200, height: 630) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
            previewImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
