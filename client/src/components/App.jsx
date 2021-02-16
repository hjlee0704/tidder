import React, { useState, useEffect } from 'react';// import axios from 'axios';
import Header from './Header';
import Posts from './Posts';
import axios from 'axios';

const App = () => {
  const [comments, setComments] = useState([]);

  const getComments = () => {
    axios.get('/api/reddit/hot')
      .then((res) => {
        setComments(res.data);
        //console.log(comments);
      });
  };

  useEffect(() => {
    getComments(() => {
      console.log(comments);
    });

  },[]);

  return (
    <div className="wrapper">
      {/* <Header /> */}
      <Posts comments ={comments}/>

    </div>
  );
}
  
export default App;