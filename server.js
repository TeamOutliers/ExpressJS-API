const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const {initiateConnection} = require('./connector');
const getters = require('./getter');
const updaters = require('./updater');
const removers = require('./remover');
const creators = require('./creator');

const port = process.env.PORT || 3000;
const dbURL = "mongodb+srv://root:12345@cluster0.ezakn.mongodb.net/test?retryWrites=true&w=majority";

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get('/', (_, res) => {
    return res.send("Welcome to Hotel Management API")
})

app.get('/users', (_, res) => {
    getters.getAllUsers().then((data) => {
        return res.send(data);
    })
})
app.get('/users/:email', (req, res) => {
    getters.getUser(req.params.email).then((data) => {
        return res.send(data);
    })
})
app.post('/users', (req, res) => {
    creators.createUser(req.body).then((data) => {
        return res.send(data);
    })
})
app.put('/users', (req, res) => {
    updaters.updateUser(req.body).then((data) => {
        return res.send(data);
    })
})
app.delete('/users/:email', (req, res) => {
    removers.removeUser(req.params.email).then((data) => {
        return res.send(data);
    })
})


app.get('/rooms', (_, res) => {
    getters.getAllRooms().then((data) => {
        return res.send(data);
    })
})
app.get('/rooms/:number', (req, res) => {
    getters.getRoom(req.params.number).then((data) => {
        return res.send(data);
    })
})
app.post('/rooms', (req, res) => {
    creators.createRoom(req.body).then((data) => {
        return res.send(data);
    })
})
app.put('/rooms', (req, res) => {
    updaters.updateRoom(req.body).then((data) => {
        return res.send(data);
    })
})
app.delete('/rooms/:number', (req, res) => {
    removers.removeRoom(req.params.number).then((data) => {
        return res.send(data);
    })
})


app.get('/members', (_, res) => {
    getters.getAllStaff().then((data) => {
        return res.send(data);
    })
})
app.get('/members/:contact', (req, res) => {
    getters.getStaff(req.params.contact).then((data) => {
        return res.send(data);
    })
})
app.post('/members', (req, res) => {
    creators.createStaff(req.body).then((data) => {
        return res.send(data);
    })
})
app.put('/members', (req, res) => {
    updaters.updateStaff(req.body).then((data) => {
        return res.send(data);
    })
})
app.delete('/members/:contact', (req, res) => {
    removers.removeStaff(req.params.contact).then((data) => {
        return res.send(data);
    })
})


app.post('/accounts/bills', (req, res) => {
    creators.createBill(req.body).then((data) => {
        return res.send(data);
    })
})
app.put('/accounts/bills', (req, res) => {
    getters.getBillsWithinTime(req.body).then((data) => {
        return res.send(data);
    })
})
app.get('/accounts/bills/:number', (req, res) => {
    getters.getBill(req.params.number).then((data) => {
        return res.send(data);
    })
})
app.post('/accounts', (req, res) => {
    getters.aggregateBillsWithinTime(req.body).then((data) => {
        return res.send(data);
    })
})
app.delete('/accounts/bills/:number', (req, res) => {
    removers.removeBill(req.params.number).then(data => {
        return res.send(data);
    })
})

app.listen(port, () => initiateConnection(dbURL))
