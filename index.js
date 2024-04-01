const express = require('express');
const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

var dataStored = [];

function storeData(data) {
    dataStored.push(data);
    console.log(dataStored);
}

app.post('/api', (request, response) => {
    console.log('I got a request');
    console.log(request.body);
    data = request.body;
    storeData(data);
    console.log('updated database:')
    response.json({
        status: "Success",
        latitude: data.lat,
        longitude: data.lng
    }             
        
    )
})