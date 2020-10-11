import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default function TextBox(props) {
    return (
        <div>
            <InputGroup size="lg" className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">Enter your text</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-lg" onChange={props.onChange} style={{ height: '25px',
    width: '500px'}}/>
            </InputGroup>
        </div>
    );
}