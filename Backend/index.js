import Express  from "express";
import connection from "./DB/db.js";
import userRouts from './Routs/userRouts.js'
import adminRouts from './Routs/adminRouts.js'
import cors from 'cors'
import bodyParser  from 'body-parser'


const app = Express()


const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
  };
app.use(cors(corsOptions))
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(bodyParser.json())


app.use('/',userRouts)
app.use('/admin',adminRouts)

const port = 8000

app.listen(port ,()=>{
    console.log('server started on port 8000');
    connection()
})