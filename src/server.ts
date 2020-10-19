import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema/index';
import {ApolloServer} from 'apollo-server-express';
import { createServer } from 'http';

const app = express();
const PORT = 4000;

app.use("*",cors());

app.use(compression());

const server = new ApolloServer({
    schema,
    introspection:true
});

server.applyMiddleware({app})

const httpServer = createServer(app)

httpServer.listen({port:PORT},()=>{
    console.log(`Running on port : ${PORT}`);
});