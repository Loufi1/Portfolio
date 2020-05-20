import React from 'react';
import Card from "react-bootstrap/Card";

const CustomCard = (props) => {
    return (
        <Card style={{cursor: 'pointer'}} onClick={props.onClick}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    )
};


export default CustomCard;