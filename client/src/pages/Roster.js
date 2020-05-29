import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/NavbarSearch'

function Roster() {

    localStorage.getItem('userToken')
    console.log(localStorage.userToken)
    const [data, setData] = useState([]);
    const accessToken = localStorage.userToken;
    const memberList_API = 'https://us.api.blizzard.com/data/wow/guild/nordrassil/shadow-ninjas/roster?namespace=profile-us&locale=en_US&access_token=' + accessToken;

    const getRoster = async () => {
        const roster = await axios.get(memberList_API)
        setData(roster.data.members)
        console.log(roster.data.members)
    }
    useEffect(() => {
        getRoster();
    }, [])

    const profileURl = "https://worldofwarcraft.com/en-us/character/us/"

    return (
        <div>
            <Navbar/>
                <div id="roster" className='text-center'>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th className="memberList">Character Name</th>
                                <th className='memberList'>Level</th>
                                <th className="memberList">Guild Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(member => {
                                const { character, rank } = member
                                return <tr>
                                    <td className="memberList">
                                        <a class='playerLink' href={`${profileURl}${character.realm.slug}/${character.name}`}>{character.name}</a></td>
                                    <td className="memberList">{character.level}</td>
                                    <td className='memberList'>{rank}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default Roster;
 