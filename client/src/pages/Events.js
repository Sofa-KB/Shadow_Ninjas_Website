import React from 'react';
import Navbar from '../components/Navbar'
import axios from 'axios';
// import { Form, Card } from 'react-bootstrap'


function Events() {
    axios.get('/api/Events').then(function(res){
        console.log(res)
    })
    return (
        <div>
            <Navbar />
            <div className="text-center">
                <h1 className="createEvent">Guild Events</h1>
                <a href="/CreateEvent">
                    <h3 className="createEvent">Create Event</h3>
                </a>
            </div>
        </div>

    )
}

export default Events;