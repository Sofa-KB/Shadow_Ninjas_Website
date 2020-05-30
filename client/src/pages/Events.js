import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import axios from 'axios';
import { Card } from 'react-bootstrap'


function Events() {

    const [data, setData] = useState([]);

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

            <Card className="eventCard">
                <h1 className="eventType">Arena</h1>
                <strong><p>Creator: </p></strong> <span className="playerName">Cåptjack</span>
                <strong><p>Player Count: </p></strong><span className="numberPlayers">2 Man Arena</span>
                <strong><p>Event Date: </p></strong><span className="eventDate">06/03/2020</span>
                <strong><p>Event Time: </p></strong><span className="eventTime">10:00PM</span>
            </Card>
            <Card className="eventCard">
                <h1 className="eventType">Mythic Dungeon</h1>
                <strong><p>Creator: </p></strong> <span className="playerName">Teefus</span>
                <strong><p>Player Count: </p></strong><span className="numberPlayers">Dungeon</span>
                <strong><p>Event Date: </p></strong><span className="eventDate">06/05/2020</span>
                <strong><p>Event Time: </p></strong><span className="eventTime">10:00PM</span>
            </Card>
            <Card className="eventCard">
                <h1 className="eventType">Heroic Raid</h1>
                <strong><p>Creator: </p></strong><span className="playerName">Smavis</span>
                <strong><p>Player Count: </p></strong><span className="numberPlayers">10 Man Raid</span>
                <strong><p>Event Date: </p></strong><span className="eventDate">06/06/2020</span>
                <strong><p>Event Time: </p></strong><span className="eventTime">10:00PM</span>
            </Card>
            <Card className="eventCard">
                <h1 className="eventType">Normal Raid</h1>
                <strong><p>Creator: </p></strong><span className="playerName">Elisande</span>
                <strong><p>Player Count: </p></strong><span className="numberPlayers">25 Man Raid</span>
                <strong><p>Event Date: </p></strong><span className="eventDate">06/07/2020</span>
                <strong><p>Event Time: </p></strong><span className="eventTime">10:00PM</span>
            </Card>
            <Card className="eventCard">
                <h1 className="eventType">Mythic Raid</h1>
                <strong><p>Creator: </p></strong><span className="playerName">Smavis</span>
                <strong><p>Player Count: </p></strong><span className="numberPlayers">10 Man Raid</span>
                <strong><p>Event Date: </p></strong><span className="eventDate">06/08/2020</span>
                <strong><p>Event Time: </p></strong><span className="eventTime">10:00PM</span>
            </Card>
            <Card className="eventCard">
                <h1 className="eventType">Mythic Dungeon</h1>
                <strong><p>Creator: </p></strong><span className="playerName">Cåptjack</span>
                <strong><p>Player Count: </p></strong><span className="numberPlayers">Dungeon</span>
                <strong><p>Event Date: </p></strong><span className="eventDate">06/08/2020</span>
                <strong><p>Event Time: </p></strong><span className="eventTime">11:30PM</span>
            </Card>
        </div>

    )
}

export default Events;