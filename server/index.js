const express = require('express');
const path = require('path');
// const compression = require('compression');
const axios = require('axios');

const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');
//const router = require('./router');
// app.use(compression());

app.use(express.json());
app.use(express.static(PUBLIC_DIR));

app.get('/api/reddit/hot', (req, res) => {
  const redditPosts = [];
  axios.get(`http://www.reddit.com/hot.json?limit=25`)
  .then(hot => {
    for (let post = 0; post < 25; post++) {
      let singlePost = {
        title: hot.data.data.children[post].data.title,
        comments: [],
        index: post,
        img: hot.data.data.children[post].data.thumbnail,
        link: `http://www.reddit.com${hot.data.data.children[post].data.permalink}`,
      };
      const link = hot.data.data.children[post].data.permalink.slice(0, -1);
      axios.get(`http://www.reddit.com${link}.json?limit=3`)
        .then(commentIndex => {
          let count = [];
          // console.log(commentIndex.data[1].data.children);
          commentIndex.data[1].data.children.map((comment) => {
            if (typeof comment.data.body === 'undefined' || comment.data.body.includes('Join Our Discord Server') || comment.data.body.includes('Hello! This is just a quick reminder for')) {
              //console.log('undefined');
              count.push(0);
            } else if (comment.data.body.includes('I am a bot') || comment.data.body.includes('Hello and welcome to') || comment.data.body.includes('The following alternative links are available')) {
              //console.log('pass');
              count.push(1);
            } else if (comment.data.body.includes('[removed]')) {
              //console.log('pass');
              count.push(2);
            } else {
              singlePost.comments.push(comment.data.body);
              count.push(3);;
            }
            console.log(count);
          })
          redditPosts.push(singlePost);
          console.log(count);
           
          if(redditPosts.length === 25 && commentIndex.data[1].data.children[2]) {
            redditPosts.sort((a, b) => parseFloat(a.index) - parseFloat(b.index));
            console.log(count);
            return res.send(redditPosts);
          }
        })
      }

      // res.send(redditPosts);
      // console.log(`http://www.reddit.com${link}.json`); comments.data[1].data.children[0].data.body
      // res.send(`http://www.reddit.com${link}.json`);
    })
  .catch(error => {
    console.log(`faile due to ${error}`)
  })
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
