import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Template from "../components/Template";
import PageBanner from "../components/PageBanner";
import KoraFeature from "../components/KoraFeature";
import PostList from "../components/PostList";

class HomePage extends Component {
  render() {
    const {
      banner,
      allMarkdownRemark: { edges: posts }
    } = this.props.data;

    return (
      <Template location={this.props.location}>
        <SEO
          title="George Smerin | Musician and web developer"
          description="I'm George Smerin, web developer and musician from Bristol."
        />
        <div className="container">
          <div className="content">
            <PostList posts={posts} title="Latest from the blog" />
          </div>
        </div>
      </Template>
    );
  }
}

export default HomePage;

export const homePageQuery = graphql`
  query {
    banner: file(relativePath: { eq: "home-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
            banner {
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
