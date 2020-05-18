const getRoster = () => {
    const accessToken = "USj1pMeiAPSPEfvIE4KQ4sbSoLfEOSjUjl"
    const memberList_API = 'https://us.api.blizzard.com/data/wow/guild/nordrassil/shadow-ninjas/roster?namespace=profile-us&locale=en_US&access_token=' + accessToken;
    
    return axios.get(memberList_API)
    .then(function(res){
        var member_list = res.data.members
        console.log(member_list)
    
        member_list.forEach(element => 
            console.log(element.character.name))
    })
    }

    module.exports = getRoster;