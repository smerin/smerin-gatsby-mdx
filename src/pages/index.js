import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "../components/page/seo";
import Template from "../components/layout/template";
import PageBanner from "../components/banner/page-banner";
import WebsitesContent from "../components/content/websites";
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
        <PageBanner
          title="Hello!"
          subtitle="I'm George Smerin, web developer and musician from Bristol."
          banner={banner}
        />
        <PostList posts={posts} />
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`;
