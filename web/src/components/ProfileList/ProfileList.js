import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass';
import ProjectText from '../ProjectText/ProjectText';

const PortfolioIndexWrapper = styled(Box)`
  list-style-type: none;
  padding-left: 0;
`;

const ProfileList = props => {
  const { title, list } = props;

  return (
    <>
      <ProjectText>{title}</ProjectText>
      <PortfolioIndexWrapper as="ul" width={1}>
        {list.map(item => (
          <ProjectText key={item.id} as="li">
            {item.name}
          </ProjectText>
        ))}
      </PortfolioIndexWrapper>
    </>
  );
};

ProfileList.defaultProps = {
  list: [],
};

ProfileList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default ProfileList;
