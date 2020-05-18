import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'

function Roster() {

    const accessToken = "USj1pMeiAPSPEfvIE4KQ4sbSoLfEOSjUjl"
    const memberList_API = 'https://us.api.blizzard.com/data/wow/guild/nordrassil/shadow-ninjas/roster?namespace=profile-us&locale=en_US&access_token=' + accessToken;

    axios.get(memberList_API)
        .then(function (res) {
            
            var member_list = res.data.members
            
            member_list.forEach(element => 
                console.log(element.character.name))
        })

    return (
        <div>
            <Navbar />
            <div id="roster">
            </div>
        </div>
    )
}

export default Roster;