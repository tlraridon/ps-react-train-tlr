import React from 'react';
import TextInputCSSModules from 'ps-react-train-tlr/TextInputCSSModules';

/** Required Textbox with Error */
export default class ErrorOptional extends React.Component {
    render() {
        return (
            <TextInputCSSModules
                htmlId="example-error"
                label="First Name"
                name="firstname"
                placeholder="First Name"
                onChange={() => {}}
                required
                error="THIS IS REQUIRED!"
            />
        )
    }
}