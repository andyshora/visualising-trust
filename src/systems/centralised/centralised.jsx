import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';

// System
import CentralisedSystem from './system';

// Styles
import {
  WorldWrapper,
  World
} from './centralised-styles';

class Centralised extends Component {
  _container = null;
  _handleStartClicked = () => {
    this.system.init();
    this.system.start();
  }
  componentDidMount() {
    this.system = new CentralisedSystem({
      container: this._container,
      width: 500,
      height: 500
    });
  }
  render() {
    const { propName } = this.props;

    return (
      <div>
        <WorldWrapper>
          <div ref={el => { this._container = el; }} />
        </WorldWrapper>
        <button onClick={this._handleStartClicked}>Start</button>
      </div>
    );
  }
}

export default Centralised;
