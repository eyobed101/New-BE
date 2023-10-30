import cors from 'cors'
import http from 'http'
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import route from "./routes/main.js"
import compression from 'compression';
import connection from "./helpers/db.js"
import config from './config/index.js';
import errorHandler from './helpers/errorHandler.js';


const app = express();
 
// console.log(config.allowedDomains)
// app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
	// origin:  ['http://127.0.0.1:5173', 'http://127.0.0.1:5173/login','http://127.0.0.1:5173/dashboard','http://127.0.0.1:5173/game','https://keno.kal-logistics-and-trading.com','https://keno.kal-logistics-and-trading.com/login','https://keno.kal-logistics-and-trading.com/dashboard','https://keno.kal-logistics-and-trading.com/game']
	origin: '*'
}))
app.use(helmet())
app.use(compression())


  app.use((req, res, next) => {
	res.header( {"Access-Control-Allow-Origin":"*"} )
	next()
})
// app.use('/api/playkeno', kenoRoute)

app.use("/", route);


const server = http.createServer(app);

server.listen(config.port, () => {
	connection.connect()
	console.log("I'm connected to the backend!");
	
});