import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json' assert { type: "json" };

import {createRoles} from './libs/initialSetup.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';



const app = express();
createRoles();

app.set('pkg',pkg);

app.use(morgan('dev'));
app.use(express.json());


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
export default app;