// import React from "react";
// import { graphql } from "gatsby";
// import SEO from "../components/page/seo";
// import get from "lodash/get";
// import Img from "gatsby-image";
// import Template from "../components/layout/template";
// import style from "./blog-post.module.scss";

// class BlogPostTemplate extends React.Component {
//   render() {
//     const post = get(this.props, "data.contentfulBlogPost");
//     console.log(post);

//     return (
//       <Template location={this.props.location}>
//         <div>
//           <SEO
//             title={post.seoTitle}
//             description={post.seoDescription.internal.content}
//           />
//           <div className={style.blogBanner}>
//             <Img alt={post.title} fluid={post.bannerImage.fluid} />
//           </div>
//           <div className="container">
//             <div className="content">
//               <h1>{post.title}</h1>
//               <p>
//                 <strong>{post.publishDate}</strong>
//               </p>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: post.body.childMarkdownRemark.html
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </Template>
//     );
//   }
// }

// export default BlogPostTemplate;

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       publishDate(formatString: "MMMM Do, YYYY")
//       bannerImage {
//         fluid(maxWidth: 1180) {
//           ...GatsbyContentfulFluid
//         }
//       }
//       body {
//         childMarkdownRemark {
//           html
//         }
//       }
//       seoTitle
//       seoDescription {
//         internal {
//           content
//         }
//       }
//     }
//   }
// `;
