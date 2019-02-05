// import React, { Component } from "react";
// import { graphql } from "gatsby";
// import SEO from "../components/page/seo";
// import Template from "../components/layout/template";
// import PageBanner from "../components/banner/page-banner";
// import MailchimpForm from "../components/shared/mailchimp";

// class ContactPage extends Component {
//   render() {
//     const { banner } = this.props.data;

//     return (
//       <Template location={this.props.location}>
//         <SEO title="Contact" />
//         <PageBanner title="Contact" banner={banner} />
//         <div className="container">
//           <div className="content">
//             <h1>Contact me!</h1>
//             <MailchimpForm />
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

// export default ContactPage;

// export const contactBannerQuery = graphql`
//   query {
//     banner: file(relativePath: { eq: "contact-banner.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 3600) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;
