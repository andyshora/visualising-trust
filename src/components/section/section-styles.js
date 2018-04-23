import styled from 'styled-components';

import {
  theme,
  media,
  MAX_CONTENT_WIDTH
} from '../../styles/utils';

const BG_COLORS = [
  { bg: theme.colors.light, text: theme.colors.dark },
  { bg: theme.colors.dark, text: theme.colors.light },
  { bg: theme.colors.bright, text: theme.colors.dark }
];

export const SectionWrap = styled.section`
  width: 100%;
  min-height: 100px;
  padding: 5rem 2rem;
  ${media.fromSmall`
    padding: 5rem 1rem;
  `}
  background: ${props => BG_COLORS[props.themeNumber].bg};
  color: ${props => BG_COLORS[props.themeNumber].text};

  > div {
    max-width: ${props => props.fullWidth ? '100%' : MAX_CONTENT_WIDTH};
    margin: 0 auto;
  }
`;
