import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import GraphQLErrorList from '../components/GraphQLErrorList/GraphQLErrorList';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';

import LandingSection from '../sections/LandingSection/LandingSection';
import PortfolioSection from '../sections/PortfolioSection/PortfolioSection';
import AboutSection from '../sections/AboutSection/AboutSection';

export const query = graphql`
  {
    landing: sanityLanding {
      tagline
      image {
        imageAsset {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        altText
      }
      video {
        asset {
          status
          playbackId
          assetId
          _type
          _key
        }
        _type
        _key
      }
    }
    portfolio: sanityPortfolio {
      title
      portfolioIndex {
        id
        shortTitle
        description
        slug {
          current
        }
        thumbnailImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    sandbox: sanitySandbox {
      title
      sandboxIndex {
        id
        shortTitle
        description
        slug {
          current
        }
        thumbnailImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    about: sanityAbout {
      title
      _rawBody
      portrait {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  if (!data) {
    throw new Error('Missing landing page data.');
  }

  const { landing, portfolio, sandbox, about } = data;

  return (
    <React.Fragment>
      <SEO title="Rob Easthope" />

      <Layout>
        <LandingSection
          sectionId="landing"
          tagline={landing.tagline}
          image={landing.image}
          video={landing.video}
        />

        <PortfolioSection
          sectionId="portfolio"
          title={portfolio.title}
          portfolioIndex={portfolio.portfolioIndex}
        />

        <PortfolioSection
          sectionId="side-projects"
          title={sandbox.title}
          portfolioIndex={sandbox.sandboxIndex}
        />

        <AboutSection
          sectionId="about"
          title={about.title}
          blurb={about._rawBody}
          portrait={about.portrait}
        />
      </Layout>
    </React.Fragment>
  );
};

IndexPage.defaultProps = {
  data: null,
  errors: null,
};

IndexPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(PropTypes.string),
};

export default IndexPage;
