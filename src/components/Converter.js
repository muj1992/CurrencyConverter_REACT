import React, {useState, useEffect } from 'react';
import { Card, FloatingLabel, Form, Row, Col, Button } from 'react-bootstrap';
import ExchangeDetails from './ExchangedDetails';


const Converter = () => {

     const [items, setCountryList] = useState([]); 
     const [fromCode , setFromCode] = useState(""); 
     const [toCode , setToCode] = useState(""); 
     const [inputAmount, setAmount] = useState(0);

     const [apiData, setAPIData] = useState({
       fromCode: "", 
       toCode : "", 
       inputAmount: 0, 
       outputAmount: 0, 
       rateOfExchange: 0
     }); 

     //populates dropdowns
      useEffect(() => {
            fetch("https://localhost:44328/api/Currency/Countries")
            .then(response => 
               response.json()
            )
            .then(
              data => {
                setCountryList(data); 
              })
              .catch(error => {
                console.log(error);
              });
        
      }, []);

   
  const HandleClick = () => {

          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({fromCode: fromCode, 
                                  toCode: toCode, 
                                  inputAmount: inputAmount, 
                                  outputAmount: 0, 
                                  rateOfExchange: 0})
        };

     fetch("https://localhost:44328/api/Currency", requestOptions)
     .then(response => 
            response.json())
     .then
        (data => 
          setAPIData(data))
      .catch(error => {
          console.log(error);
        })
    }

    return (
    
      <Card className="text-center shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title>Currency Converter</Card.Title>
            <Card.Text>
              Please use the input fields below to convert currencies.
            </Card.Text>
          <Row className="g-4">
             <Col sm>
                <FloatingLabel controlId="floatingInputGrid" label="Amount">
                   <Form.Control type="number" onChange={(e) => setAmount(e.target.value)}   />
                </FloatingLabel>
              </Col>
            <Col sm>
          <FloatingLabel controlId="floatingSelectGrid" label="From">
              <Form.Select aria-label="Floating label select" onChange={(e) => setFromCode(e.target.value)}>
                  <option>Please Select</option>
                  {items.map((item) =>
                      <option key={item} value={item}>
                        {item}
                      </option>
                    )}
              </Form.Select>
            </FloatingLabel>
        </Col>
        <Col sm>
        <FloatingLabel controlId="floatingSelectGrid" label="To">
              <Form.Select aria-label="Floating label select" onChange={(e) => setToCode(e.target.value)}>
              <option>Please Select</option>
                  {items.map((item) =>
                      <option key={item} value={item}>
                        {item}
                      </option>
                    )}
              </Form.Select>
            </FloatingLabel>
        </Col>
        <Col sm="auto">
        <Button variant="warning" size="lg" onClick={HandleClick}>Convert</Button>
        </Col>
        </Row>
        </Card.Body>
        <br/>
        {
          apiData.outputAmount > 0 ? <ExchangeDetails data={apiData}/> : null
        }
      </Card>
     
   
    )
}

export default Converter;