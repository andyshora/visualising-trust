import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

// Styles
import { SectionWrap } from './section-styles';

const Section = ({ themeNumber, children, fullWidth }) => (
  <SectionWrap themeNumber={themeNumber} fullWidth={fullWidth}>
    <div>
      {children}
    </div>
  </SectionWrap>
);

Section.propTypes = {
  children: PropTypes.any,
  fullWidth: PropTypes.bool,
  themeNumber: PropTypes.number
};

Section.defaultProps = {
  children: null,
  fullWidth: true,
  themeNumber: 0
};

export default Section;
