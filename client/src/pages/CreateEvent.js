import React from 'react';
import Navbar from '../components/Navbar'
import {Form, Card, Button} from 'react-bootstrap'

function CreateEvent() {

    return(
        <div>
  <Navbar/>
  <Card className="event">
  <Form action='/api/Events' method='POST'>
    <Form.Group controlId="creator">
        <Form.Label>Character Name: </Form.Label>
        <Form.Control name="creator" placeholder="Character Name" />
    </Form.Group>

    <Form.Group controlId="event_date">
        <Form.Label>Event Date: </Form.Label>
        <input type="date" id="eventDate" name="event_date" class="form-control"/>
    </Form.Group>

    <Form.Group controlId="event_time">
        <Form.Label>Event Time: </Form.Label>
        <input type="time" id="eventTime" name="event_time" class="form-control"/>
    </Form.Group>

    <Form.Group controlId="event_style">
        <Form.Label>Event Style: </Form.Label>
        <Form.Control name="event_style" as="select">
            <option>Heroic Dungeon</option>
            <option>Mythic Dungeon</option>
            <option>Normal Raid</option>
            <option>Heroic Raid</option>
            <option>Mythic Raid</option>
            <option>Normal Battleground</option>
            <option>Rated Battleground</option>
            <option>Arena</option>
        </Form.Control>
    </Form.Group>


    <Form.Group controlId="player_count">
        <Form.Label>Player Count:</Form.Label>
        <Form.Control name="player_count" as="select">
            <option>Dungeon</option>
            <option>10 Man Raid</option>
            <option>25 Man Raid</option>
            <option>Battlegounds (10-40)</option>
            <option>2 Man Arena</option>
            <option>3 Man Arena</option>
            <option>5 Man Arena</option>
        </Form.Control>
    </Form.Group>

    <Form.Group controlId="notes">
        <Form.Label>Notes: </Form.Label>
        <Form.Control name="notes" as="textarea" rows="3" />
    </Form.Group>
    <div className="text-center">
    <Button variant="primary" type="submit">
    Create Event
  </Button>
  </div>
</Form>
</Card>
</div>

    )
}

export default CreateEvent;