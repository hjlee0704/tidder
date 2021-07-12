const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');
const router = require('./router');
// app.use(compression());

app.use(express.json());
app.use(cors());
app.use(express.static(PUBLIC_DIR));

app.get('/api/reddit/hot', (req, res) => {
  const redditPosts = [];
  axios.get(`http://www.reddit.com/hot.json?limit=50`)
  .then(hot => {
    for (let post = 0; post < 50; post++) {
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
          commentIndex.data[1].data.children.map((comment) => {
            if (typeof comment.data.body === 'undefined' || comment.data.body.includes('Join Our Discord Server') || comment.data.body.includes('Hello! This is just a quick reminder for')) {
              count.push(0);
            } else if (comment.data.body.includes('I am a bot') || comment.data.body.includes('Hello and welcome to') || comment.data.body.includes('The following alternative links are available')) {
              count.push(1);
            } else if (comment.data.body.includes('[removed]')) {
              count.push(2);
            } else {
              singlePost.comments.push(comment.data.body);
              count.push(3);;
            }
          })
          redditPosts.push(singlePost);
          if(redditPosts.length === 50 && commentIndex.data[1].data.children[2]) {
            redditPosts.sort((a, b) => parseFloat(a.index) - parseFloat(b.index));
            return res.send(redditPosts);
          }
        })
      }
    })
  .catch(error => {
    console.log(`faile due to ${error}`)
  })
});

app.get('/api/reddit/best', (req, res) => {
  const redditPosts = [];
  axios.get(`http://www.reddit.com/best.json?limit=25`)
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
          commentIndex.data[1].data.children.map((comment) => {
            if (typeof comment.data.body === 'undefined' || comment.data.body.includes('Join Our Discord Server') || comment.data.body.includes('Hello! This is just a quick reminder for')) {
              count.push(0);
            } else if (comment.data.body.includes('I am a bot') || comment.data.body.includes('Hello and welcome to') || comment.data.body.includes('The following alternative links are available')) {
              count.push(1);
            } else if (comment.data.body.includes('[removed]')) {
              count.push(2);
            } else {
              singlePost.comments.push(comment.data.body);
              count.push(3);;
            }
          })
          redditPosts.push(singlePost);
          if(redditPosts.length === 25 && commentIndex.data[1].data.children[2]) {
            return res.send(redditPosts);
          }
        })
      }
    })
  .catch(error => {
    console.log(`faile due to ${error}`)
  })
});

app.get('/api/reddit/top', (req, res) => {
  const redditPosts = [];
  axios.get(`http://www.reddit.com/top.json?limit=25`)
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
          commentIndex.data[1].data.children.map((comment) => {
            if (typeof comment.data.body === 'undefined' || comment.data.body.includes('Join Our Discord Server') || comment.data.body.includes('Hello! This is just a quick reminder for')) {
              count.push(0);
            } else if (comment.data.body.includes('I am a bot') || comment.data.body.includes('Hello and welcome to') || comment.data.body.includes('The following alternative links are available')) {
              count.push(1);
            } else if (comment.data.body.includes('[removed]')) {
              count.push(2);
            } else {
              singlePost.comments.push(comment.data.body);
              count.push(3);;
            }
          })
          redditPosts.push(singlePost);
 
          if(redditPosts.length === 25 && commentIndex.data[1].data.children[2]) {
            redditPosts.sort((a, b) => parseFloat(a.index) - parseFloat(b.index));
            return res.send(redditPosts);
          }
        })
      }

    })
  .catch(error => {
    console.log(`faile due to ${error}`)
  })
});

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'client', 'dist','index.html')));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
