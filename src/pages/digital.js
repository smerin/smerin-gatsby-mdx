import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "../components/page/seo";
import Template from "../components/layout/template";
import PageBanner from "../components/banner/page-banner";
import WebsitesContent from "../components/content/websites";

class DigitalPage extends Component {
  render() {
    const { banner } = this.props.data;

    return (
      <Template location={this.props.location}>
        <SEO
          title="React JS / JavaScript front-end developer in Bristol"
          description="Front-end developer specialising in React JS, JavaScript, GraphQL and Node JS. Strong UX / UI skills. Available for contract roles in Bristol or remote. Call 07887 868522 or email mail@smerin.com"
        />
        <PageBanner
          title="Hello!"
          subtitle="I'm George Smerin, web developer and musician from Bristol."
          banner={banner}
        />
        <WebsitesContent />
      </Template>
    );
  }
}

export default DigitalPage;

export const websitesBannerQuery = graphql`
  query {
    banner: file(relativePath: { eq: "websites-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
