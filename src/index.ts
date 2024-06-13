const express = require('express');
import bodyParser from 'body-parser';
import userRoutes from './rout';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
