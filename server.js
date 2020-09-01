const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const {initiateConnection} = require('./connector');

const port = process.env.PORT || 3000;
const dbURL = "mongodb+srv://root:12345@cluster0.ezakn.mongodb.net/test?retryWrites=true&w=majority";

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get('/', (_, res) => {
    return res.send('Hotel Management API - Team Outliers');
})

app.get('/users', (_, res) => {
    return res.send('List of users');
})
app.get('/users/:email', (req, res) => {
    return res.send('Details of user: '+req.params.email);
})
app.post('/users', (req, res) => {
    return res.send('Creating new user: '+req.body.email);
})
app.put('/users', (req, res) => {
    return res.send('Updating this user: '+req.body.email);
})
app.delete('/users/:email', (req, res) => {
    return res.send('Deleted user: '+req.params.email);
})


app.get('/rooms', (_, res) => {
    return res.send('List of rooms');
})
app.get('/rooms/:number', (req, res) => {
    return res.send('Details of room: '+req.params.number);
})
app.post('/rooms', (req, res) => {
    return res.send('Creating new room: '+req.body.number);
})
app.put('/rooms', (req, res) => {
    return res.send('Updating this room: '+req.body.number);
})
app.delete('/rooms/:number', (req, res) => {
    return res.send('Deleted room: '+req.params.number);
})


app.get('/members', (_, res) => {
    return res.send('List of members');
})
app.get('/members/:contact', (req, res) => {
    return res.send('Details of member: '+req.params.contact);
})
app.post('/members', (req, res) => {
    return res.send('Creating new member: '+req.body.contact);
})
app.put('/members', (req, res) => {
    return res.send('Updating this member: '+req.body.contact);
})
app.delete('/members/:contact', (req, res) => {
    return res.send('Deleted member: '+req.params.contact);
})


app.post('/accounts/bills', (req, res) => {
    return res.send('Creating new bill: '+req.body.number)
})
app.put('/accounts/bills', (req, res) => {
    return res.send('List of bills from '+req.body.dateFrom+' to '+req.body.dateTo)
})
app.get('/accounts/bills/:number', (req, res) => {
    return res.send('Details of bill: '+req.params.number)
})
app.post('/accounts', (req, res) => {
    return res.send('Aggregating from: '+req.body.dateFrom+' to '+req.body.dateTo)
})

app.listen(port, () => initiateConnection(dbURL))
