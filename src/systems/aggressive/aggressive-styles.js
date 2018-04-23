import styled from 'styled-components';

import { theme, media } from '../../styles/utils';

export const WorldWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 800px;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    position: absolute;
    top: 0 !important;
    left: 0 !important;
  }
`;
