import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Template from "../components/Template";
import PageBanner from "../components/PageBanner";

class MusicPage extends Component {
  render() {
    const { banner } = this.props.data;

    return (
      <Template location={this.props.location}>
        <SEO title="Guitarist, kora player and world music enthusiast" description="Tutorial videos and articles on guitar, kora and world music. Join me on a journey in discovering music from around the world!" />
        <PageBanner
          title="Music"
          subtitle="Join me on a journey in discovering music from around the world!"
          banner={banner}
        />
        <div className="container">
          <div className="content">
            <h1>I like to play music (H1 heading)</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </Template>
    );
  }
}

export default MusicPage;

export const musicBannerQuery = graphql`
  query {
    banner: file(relativePath: { eq: "music-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
