// server.js
// init project

const express = require('express');
const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// routes
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/landingPage.html');
});

app.get('/admin', function(request, response) {
  response.sendFile(__dirname + '/views/adminPortal.html');
});

app.get('/studentPortal', function(request, response) {
  response.sendFile(__dirname + '/views/studentPortal.html');
});
app.get('/t', function(request, response) {
  response.sendFile(__dirname + '/views/matrix1.html');
});
app.get('/teacherPortal', function(request, response) {
  response.sendFile(__dirname + '/views/teacherPortal.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port
);
});


