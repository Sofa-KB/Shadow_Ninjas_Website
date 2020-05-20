import React from "react";
import Navbar from "../components/Navbar";
import { Col, Card, Row, Button, Glyphicon, Panel, ListGroupItem, ListGroup, FormControl } from 'react-bootstrap'

function Home() {

    const newURL = window.location.pathname
    const userToken = newURL.replace('/Home/', '')
    console.log(userToken)
    
    return (
        <div>
            <Navbar />
            <div className='text-center'>
                <h1 className="homeNewsHeader">News</h1>
            </div>
            <Row>
                <Col lg={3} md={3} sm={3}/>
                <Col lg={6} md={5} sm={3}>
                    <Card className='homeContent'>
                        <p>Some Text</p>
                    </Card>
                </Col>
                <Col lg={3} md={3} sm={3} />
            </Row>
        </div>
    )
}

export default Home;