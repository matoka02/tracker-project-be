import path from 'path';

import cors from 'cors';
import express from 'express';
import logger from 'morgan';

/* eslint-disable import/order*/
import usersRouter from './routes/users';
import tasksRouter from './routes/tasks';

// Initialize environment variables
require('dotenv').config();

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

// =============================================== MIDDLEWARES =========================================
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ================================================= ROUTES =========================================
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/tasks', tasksRouter);

// ================================================= ERROR CATCHERS =========================================
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

interface HttpError extends Error {
  status?: number;
}

app.use((err: HttpError, req: express.Request, res: express.Response) => {
  res.status(err.status || 500).json({
    status: err.status,
    message: err.message,
  });
});

export default app;
