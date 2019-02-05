// import React, { Component } from "react";
// import { graphql } from "gatsby";
// import SEO from "../components/page/seo";
// import Template from "../components/layout/template";
// import PageBanner from "../components/banner/page-banner";

// class MusicPage extends Component {
//   render() {
//     const { banner } = this.props.data;

//     return (
//       <Template location={this.props.location}>
//         <SEO title="Music" />
//         <PageBanner
//           title="Music"
//           subtitle="I play guitar and kora, and I love music from all around the world."
//           banner={banner}
//         />
//         <div className="container">
//           <div className="content">
//             <h1>I like to play music (H1 heading)</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//               sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//           </div>
//         </div>
//       </Template>
//     );
//   }
// }

// export default MusicPage;

// export const musicBannerQuery = graphql`
//   query {
//     banner: file(relativePath: { eq: "music-banner.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 2400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;
