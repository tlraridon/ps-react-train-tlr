import React from 'react';
import TextInputStyledComponent from 'ps-react-train-tlr/TextInputStyledComponents';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputStyledComponent
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="Give me a name, man!"
       />
    )
  }
}
