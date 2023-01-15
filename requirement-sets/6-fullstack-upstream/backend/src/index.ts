import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import api from './api';

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(morgan('dev'));

app.use('/api', api);

const port = 3030;
app.listen(port, () => {
  console.log(`[SERVER] app is running on port ${port}`);
});
