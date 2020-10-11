import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Preview(props) {
    return (
        <div className="card">
        <Card>
        <Card.Img variant="top" src={props.data.img} style={{width: '500px'}} />
        <Card.Body>
            <Card.Title>{props.data.title}</Card.Title>
            <Card.Text>
            {props.data.description}
            <br/>
            <span className="domain-link">{props.data.domain}</span>
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
    );

}