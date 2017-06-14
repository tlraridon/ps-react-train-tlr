import React from 'react';
import TextInput from 'ps-react-train-tlr/TextInput';

/** Required Textbox with Error */
export default class ErrorOptional extends React.Component {
    render() {
        return (
            <TextInput
                htmlId="example-error"
                label="First Name"
                name="firstname"
                placeholder="First Name"
                onChange={() => {}}
                required
                error="First name is required."
            />
        )
    }
}