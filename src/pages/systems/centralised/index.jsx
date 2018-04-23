import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Systems
import Aggressive from '../../../systems/aggressive';

const CentralisedSystemPage = ({ propName }) => {
  return (
    <div>
      <h1>CentralisedSystemPage</h1>
      <Aggressive />
    </div>
  );
};

CentralisedSystemPage.propTypes = {};

CentralisedSystemPage.defaultProps = {};

export default CentralisedSystemPage;
