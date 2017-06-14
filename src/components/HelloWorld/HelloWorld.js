import React from 'react';
import PropTypes from 'prop-types';

/** A Hello World component that uses a custom message. */
function HelloWorld({message}) {
    return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
  /** Message to display. */
  message: PropTypes.string
};

HelloWorld.defaultProps = {
  message: 'world'
}

export default HelloWorld;