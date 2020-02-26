import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';
import BlockContent from '@sanity/block-content-to-react';
import Image from 'gatsby-image';

import ProjectText from '../../components/ProjectText/ProjectText';
import TextWrapper from '../../components/TextWrapper/TextWrapper';
import ProfileList from '../../components/ProfileList/ProfileList';
import EducationList from '../../components/EducationList/EducationList';

const AboutSection = ({ blurb, portrait, clients, education }) => (
  <Flex
    as="section"
    flexDirection="row"
    flexWrap="wrap"
    px={{ b: 3, md: 4 }}
    pt={{ b: 3, md: '3em' }}
    justifyContent="flex-end"
    alignItems="stretch"
  >
    {portrait && (
      <Box width={1} maxWidth="300px" mr={4}>
        <Image fluid={portrait.asset.fluid} />
      </Box>
    )}
    <TextWrapper
      flexWrap="wrap"
      flexDirection="row"
      justifyContent={{ b: 'flex-start', md: 'flex-end' }}
    >
      {blurb && (
        <Box width={1} pb={3}>
          <ProjectText>
            <BlockContent blocks={blurb} />
          </ProjectText>
        </Box>
      )}
    </TextWrapper>

    <Flex mx={-4}>
      <Box width={1 / 3} px={4} pb={3}>
        <ProjectText>History</ProjectText>
        <ProjectText>
          Freelanced for five years at various agencies since 2015 with three
          years experience prior to that.
        </ProjectText>
      </Box>

      {education && (
        <Box width={1 / 3} px={4} pb={3}>
          <EducationList title="Education" list={education} />
        </Box>
      )}

      {clients && (
        <Box width={1 / 3} px={4} pb={3}>
          <ProfileList title="Clients" list={clients} />
        </Box>
      )}
    </Flex>
  </Flex>
);

AboutSection.defaultProps = {
  blurb: [],
  clients: [],
  education: [],
  portrait: {},
};

AboutSection.propTypes = {
  blurb: PropTypes.arrayOf(PropTypes.object),
  clients: PropTypes.arrayOf(PropTypes.object),
  education: PropTypes.arrayOf(PropTypes.object),
  portrait: PropTypes.object,
};

export default AboutSection;
