const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('work.mediasmart.io/', (req, res) => {
  res.send({ message: 'Hello, I am the server' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
