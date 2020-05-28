import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Col, Card, Row } from 'react-bootstrap'
import axios from 'axios';
import update from 'immutability-helper';


const newURL = window.location.pathname
const userToken = newURL.replace('/Home/', '')
console.log(userToken)

function Home() {

    const [data, setData] = useState([]);
    const guildActivityAPI = 'https://us.api.blizzard.com/data/wow/guild/nordrassil/shadow-ninjas/activity?namespace=profile-us&locale=en_US&access_token=USIUsHPehg8iMGcjIn3RF7lnYaV8Za3sFr'

    const getActivity = async () => {
        const newURL = window.location.pathname
        const userToken = newURL.replace('/Home/', '')
        const activity = await axios.get(guildActivityAPI)
        const activityData = activity.data.activities
        const activityPromises = activityData.map(act => {
            const href = act.character_achievement.achievement.key.href
            const fhref = href.split('?')[0] + '?namespace=static-us&locale=en_US&access_token=' + userToken
            axios.get(fhref)
            return axios.get(fhref)
        })

        Promise.all(activityPromises).then((activityResponse) => {
            activityResponse.map(achievement => {
                console.log(achievement)
            })
        })
    }

    useEffect(() => {
        getActivity();
    }, [])

    return (
        <div>
            <Navbar />
            <div className='text-center'>
                <h1 className="homeNewsHeader">Guild Activity</h1>
            </div>
            <Row>
                <Col lg={3} md={3} sm={3} />
                <Col lg={6} md={5} sm={3}>
                    {data.map(activity => {
                        const { character_achievement } = activity
                        console.log(activity.data)
                        return <div>
                            {/* <Card className='homeContent'>
                                <h5 className='achievement'>{character_achievement.achievement.name}</h5>
                                <p>{data.description}</p>
                                <p>Earned by: {character_achievement.character.name}</p>
                            </Card> */}
                        </div>
                    })}
                </Col>
            </Row>
        </div>
    )
}

export default Home;
export { userToken };