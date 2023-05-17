import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import leoRoutes from './routes/leo.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limig: "50mb" }))

app.use("/api/v1/dalle", leoRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from Leokonda" })
})

app.listen(8080, () => console.log('Server has started on port 8080'))