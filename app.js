const http = require('express');
const app = express();

//this is a route. it points to the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/portfolio', (req, res) => {
    res.sendFile(__dirname + '/portfolio.html');
});

//sets up a contact
app.listen(3000, () => {
    console.log('app is running')
});