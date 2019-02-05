// import React, { Component } from "react";
// import { Link, graphql } from "gatsby";
// import get from "lodash/get";
// import SEO from "../components/page/seo";
// import PageBanner from "../components/banner/page-banner";
// import Template from "../components/layout/template";
// import PostGrid from "../components/posts/post-grid";
// import MyStory from "../components/content/my-story";

// class HomePage extends Component {
//   render() {
//     const { banner } = this.props.data;
//     const posts = get(this, "props.data.allContentfulBlogPost.edges");

//     return (
//       <Template location={this.props.location}>
//         <SEO title="George Smerin | Musician and web developer from Bristol, UK" titleTemplate="%s" />
//         <PageBanner
//           title="Hello!"
//           subtitle="I'm George Smerin, musician and web developer from Bristol."
//           banner={banner}
//         />

//         <PostGrid title="Latest blog articles" posts={posts} />

//         <MyStory />
//       </Template>
//     );
//   }
// }

// export default HomePage;

// export const homeQuery = graphql`
//   query HomeQuery {
//     allContentfulBlogPost(
//       sort: { fields: [publishDate], order: DESC }
//       limit: 3
//     ) {
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
//     banner: file(relativePath: { eq: "home-banner.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 2400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;
