import React from 'react';
import { withPrefix } from 'gatsby-link';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'sanitize.css/sanitize.css';
import '../styles/index.css';

const Layout = ({ children, data }) => (
  <div id='site'>
    {children()}
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
  data: PropTypes.object
};

Layout.defaultProps = {
  children: null,
  data: null
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
