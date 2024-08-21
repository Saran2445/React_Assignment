const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes will be added here

const PORT = process.env.PORT || 5000;
const skillsRouter = require('./routes/skills');
const projectsRouter = require('./routes/projects');

app.use('/api/skills', skillsRouter);
app.use('/api/projects', projectsRouter);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));