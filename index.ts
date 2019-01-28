import Server from './classes/server';
import router from './routes/routes';
import bodyParser from 'body-parser';
import cors from 'cors';
 
//const server = new Server();
// uso de patron Singleton
const server = Server.instance;

// bodyParser
server.app.use( bodyParser.urlencoded({ extended: true }) );
// Pasar la peticion en formato json
server.app.use( bodyParser.json() );


// CORS
server.app.use( cors({ origin:true, credentials: true }));


server.app.use('/', router)


server.start( ()=>{

	console.log(`Servidor corriendo port: ${ server.port }`); 
})