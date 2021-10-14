const express = require('express')
const path = require('path')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const homecontroller = require('./controllers/home')
const profilecontroller = require('./controllers/getprofile')
const createusercontroller = require('./controllers/createuser')
const updateusercontroller = require('./controllers/updateusers')
const isauthenticated = require('./config/isauthorised')
const signincontroller = require('./controllers/signincontroller')
const authcontroller = require('./controllers/authcontroller')
const createdose = require('./controllers/createdoses')
const getdoses = require('./controllers/getdoses') 
const port = 5000;
//mongodb connection
//-------------------------------------------------------------------------------
const uri = "mongodb+srv://raju:8900@Cluster0.dziub.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((con) => {
    console.log("Connection successfully");
  }).catch(err => console.log(err));
//------------------------------------------------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.get('/', homecontroller.index)

app.get('/:nam', profilecontroller.profile)

app.post('/user',createusercontroller.createuser)

app.post('/updateuser', updateusercontroller.update)

app.post('/signin', signincontroller.signin)

app.post('/auth', authcontroller.auth)

app.post('/user/doses', createdose.createdose)
app.get('/user/doses', getdoses.getdoses)
app.listen(port, ()=>{
    console.log('app is running at http://localhost:5000')
})