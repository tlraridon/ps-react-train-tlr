import React from 'react';
import TextInput from 'ps-react-train-tlr/TextInput';

/** Optional Textbox */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInput
                htmlId="excample-optional"
                label="First Name"
                name="firstname"
                placeholder="First Name"
                onChange={() => {}}
            />
        )
    }
}