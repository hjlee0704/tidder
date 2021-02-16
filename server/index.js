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
      };
      const link = hot.data.data.children[post].data.permalink.slice(0, -1);
      axios.get(`http://www.reddit.com${link}.json?limit=4`)
        .then(commentIndex => {
          let count = 0;
          commentIndex.data[1].data.children.map((comment, index) => {
            if (typeof comment.data.body === 'undefined') {
              //console.log('undefined');
              count++
            } else if (comment.data.body.includes('I am a bot')) {
              //console.log('pass');
              count++
            } else {
              singlePost.comments.push(comment.data.body);
              count++;
            }
          })
          redditPosts.push(singlePost);
          // console.log(count);
          console.log(post);
          if(redditPosts.length === 25 && count === 4) {
            redditPosts.sort((a, b) => parseFloat(a.index) - parseFloat(b.index));
            return res.send(redditPosts);
          }
          //console.log(redditPosts);
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
