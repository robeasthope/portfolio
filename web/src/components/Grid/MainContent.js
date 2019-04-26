import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';

const MainContent = styled.main`
  flex: 1;

  min-width: 100vw;
  margin-left: 0;
  @media (min-width: ${breakpoints.md}) {
    min-width: calc(100vw - 186px);
    margin-left: 186px;
  }
`;

export default MainContent;