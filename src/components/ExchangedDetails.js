import React from 'react'
import {Row, Col, ListGroup, Card } from 'react-bootstrap';

const ExchangeDetails = ({data: {outputAmount, rateOfExchange}}) => {

return(
    <Row>
        <Col md={{span: 4, offset: 4}}>
            <Card.Title style={{color: '#FFCA2C'}}>Exchange Details</Card.Title>
                <ListGroup>
                    <ListGroup.Item>Exchanged Amount = {Math.round(outputAmount * 100) / 100}</ListGroup.Item>
                    <ListGroup.Item>Rate of Exchange = {Math.round(rateOfExchange * 1000) / 1000}</ListGroup.Item>
                </ListGroup>
        </Col>
    </Row>
)

}

export default ExchangeDetails; 