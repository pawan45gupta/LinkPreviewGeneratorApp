import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default function TextBox(props) {
    return (
        <div>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Enter your text</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={props.onChange}/>
            </InputGroup>
        </div>
    );
}