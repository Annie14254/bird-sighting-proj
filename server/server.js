const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json())
app.use(express.json())

app.use(cookieParser())
app.use(routes);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "..", 'client/build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", 'client/build/index.html'))
  })
}




db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
