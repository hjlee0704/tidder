const express = require('express');
const path = require('path');
// const compression = require('compression');
const axios = require('axios');

const app = express();
const PORT = 3000;
//const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');
//const router = require('./router');

// app.use(compression());
app.use(express.json());

//app.use(express.static(PUBLIC_DIR));
app.get('/api/reddit/hot', (req, res) => {
  axios.get(`http://www.reddit.com/hot.json`)
  .then(hot => {
    const link = hot.data.data.children[0].data.permalink.slice(0, -1);
    axios.get(`http://www.reddit.com${link}.json`)
      .then(comments => {
        console.log(comments.data[1].data.children[0].data.body);
        res.send(comments.data[1].data.children[0].data.body);
      })
    // console.log(`http://www.reddit.com${link}.json`);
    // res.send(`http://www.reddit.com${link}.json`);
  })
  .catch(error => {
    console.log(`faile due to ${error}`)
  })
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
