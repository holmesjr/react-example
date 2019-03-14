const https =require ("https");
const axios = require('axios');
const querystring = require('querystring');

axios({
    method: 'post',
    url: 'https://localhost:8443/authenticate',
    data: querystring.stringify({
        username: 'bob',
        password: 'bobspassword'
    }),
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
})
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });


