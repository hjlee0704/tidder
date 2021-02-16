import React, { useState, useEffect } from 'react';// import axios from 'axios';
import Header from './Header';
import Posts from './Posts';
import Best from './Best';
import axios from 'axios';



const App = () => {
  const [comments, setComments] = useState([]);
  const [best, setBest] = useState([]);
  const [top, setTop] = useState([]);

  const getComments = () => {
    axios.get('/api/reddit/hot')
      .then((res) => {
        setComments(res.data);
      });
    axios.get('/api/reddit/best')
    .then((res) => {
      setBest(res.data);
    });
    axios.get('/api/reddit/top')
    .then((res) => {
      setTop(res.data);
    });
  };

  useEffect(() => {
    getComments();

  },[]);

  const handleClick = (category) => {
    console.log(category);
  }

  return (
      <div className="wrapper">
        <Header handleClick={handleClick} />
        <Posts comments ={comments} />
       
      </div>
  );
}
  
export default App;