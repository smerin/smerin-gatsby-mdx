// import React, { Component } from "react";
// import { Link, graphql } from "gatsby";
// import get from "lodash/get";
// import SEO from "../components/page/seo";
// import Template from "../components/layout/template";
// import PageBanner from "../components/banner/page-banner";
// import PostGrid from "../components/posts/post-grid";

// class BlogPage extends Component {
//   render() {
//     const posts = get(this, "props.data.allContentfulBlogPost.edges");

//     return (
//       <Template location={this.props.location}>
//         <SEO title="Blog" />
//         <PageBanner title="Blog" />
//         <PostGrid posts={posts} />
//       </Template>
//     );
//   }
// }

// export default BlogPage;

// export const blogQuery = graphql`
//   query BlogIndexQuery {
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           previewImage {
//             fluid(maxWidth: 700, maxHeight: 400, resizingBehavior: SCALE) {
//               ...GatsbyContentfulFluid
//             }
//           }
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//   }
// `;
