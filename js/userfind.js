$(document).ready(function(){
   const FindButton = document.getElementById("Find")
   const RobloxUsername = document.getElementById("username")

   FindButton.onclick = function() {
       console.log(RobloxUsername.value)
        fetch("https://users.roblox.com/v1/usernames/users",{
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                "usernames": [
                    RobloxUsername.value
                ],
                "excludeBannedUsers": true
            }
        }).then( response => {
            // const json = response.json()
            console.log(response)
            if (response.ok == false) {
                console.warn("ERR fetching")   
            }
        }).catch(err => {
            console.warn(err)
        })
   }
});