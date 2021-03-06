import React from 'react';
import ProjectDetailText from '../ProjectDetailText/ProjectDetailText';

const ProjectDetail = ({ detailTitle, detailText, detailUrl }) => {
  if (detailUrl !== null) {
    return (
      <ProjectDetailText width={1}>
        <dt>{detailTitle}</dt>
        <dd>
          <a href={detailUrl} target="_blank" rel="noreferrer noopener">
            {detailText}
          </a>
        </dd>
      </ProjectDetailText>
    );
  }
  return (
    <ProjectDetailText width={1}>
      <dt>{detailTitle}</dt>
      <dd>{detailText}</dd>
    </ProjectDetailText>
  );
};

export default ProjectDetail;
