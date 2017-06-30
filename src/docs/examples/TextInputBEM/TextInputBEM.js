import React from 'react';
import TextInputBEM from 'ps-react-train-tlr/TextInputBEM';

/** Required Textbox with Error */
export default class ErrorOptional_BEM extends React.Component {
    render() {
        return (
            <TextInputBEM
                htmlId="example-error"
                label="First Name"
                name="firstname"
                placeholder="First Name"
                onChange={() => {}}
                required
                error="Required"
            />
        )
    }
}