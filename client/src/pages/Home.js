import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Col, Card, Row } from 'react-bootstrap'
import axios from 'axios';

function Home() {

    const newURL = window.location.pathname
    const usertoken = newURL.replace('/Home/', '')
    localStorage.setItem('userToken', usertoken)
    console.log(localStorage)

    const [data, setData] = useState([]);
    const guildActivityAPI = 'https://us.api.blizzard.com/data/wow/guild/nordrassil/shadow-ninjas/activity?namespace=profile-us&locale=en_US&access_token=' + localStorage.userToken
  
    const getActivity = async () => {
        const userToken = localStorage.userToken
        const activity = await axios.get(guildActivityAPI)
        const activityData = activity.data.activities
        const activityPromises = activityData.map(act => {
            const href = act.character_achievement.achievement.key.href
            const fhref = href.split('?')[0] + '?namespace=static-us&locale=en_US&access_token=' + userToken
            return axios.get(fhref)
        })

        Promise.all(activityPromises).then((activityResponse) => {
            const imagePromises = [];
            activityResponse.forEach((achievement, index) => {
                activityData[index].achievementText = achievement.data.description;
                const imgLink = achievement.data.media.key.href
                const imgHref = imgLink.replace('?namespace=static-8.3.0_32861-us', '?namespace=static-us&locale=en_US&access_token=' + userToken)
                activityData[index].achievementImgHref = imgHref
                imagePromises.push(axios.get(imgHref))
            })
            Promise.all(imagePromises).then(imgs => {
                imgs.forEach((img, index) => {
                    const imgLink = img.data.assets[0].value;
                activityData[index].achievementImg = imgLink
                })
                setData([...activityData]);
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
                        return <div>
                            <Card className='homeContent'>
                                <h5 className='achievementName'>{character_achievement.achievement.name}</h5>
                                <img className='achievementImg' src={activity.achievementImg} />
                                <p className='achievementText'>{activity.achievementText}</p>
                                <p className='earnedBy'>Earned by: {character_achievement.character.name}</p>
                            </Card>
                        </div>
                    })}
                </Col>
            </Row>
        </div>
    )
}

export default Home;