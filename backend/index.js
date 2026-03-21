require('dotenv').config();

const express = require('express');
const cors = require('cors');
const chatRoute = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', chatRoute);

app.get('/', (req, res) => {
  res.json({ 
    status: 'DsaMentor.ai backend is live',
    version: '1.0.0'
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});