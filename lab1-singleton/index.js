import express from 'express';
import db from './dbs/mongodb.js';
import studentRoutes from './routers/student.js';

const app = express();
app.use(express.json());

// Routes
app.use('/students', studentRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
