import express from 'express';  
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; //

import postRoutes from '../server/routes/post.js'; //import routes

const app = express();  //initialize the app


//general set up app instance
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));  //bodyParser to send our request
app.use(cors());  //cors as a function for crossing the origin request

app.use('/posts', postRoutes);  // routes endport '/localhost:5000/posts

//database connection url
const CONNECTION_URL = 'mongodb+srv://stephensu66:13097670335su@cluster0.g24uqrk.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;  //specify the port on the application 


//use mongoose to connect database 
mongoose.connect(CONNECTION_URL) 
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);// avoid error from database

