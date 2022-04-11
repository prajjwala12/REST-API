import express from "express";
import bodyParser from "body-parser";

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;
// to show that we're using json and calling it like a function
app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get ('/', (_req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
