import React, { useState, useEffect } from 'react';// import axios from 'axios';
import Header from './Header';
import Posts from './Posts';
import Best from './Best';
import Top from './Top';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// const useStyles = makeStyles((theme) => ({

//   root: {
//     flexGrow: 1,
//     overflow: 'hidden',
//     padding: theme.spacing(2, 3),

//   },

// }));



const App = () => {
  const [comments, setComments] = useState([]);
  const [best, setBest] = useState([]);
  const [top, setTop] = useState([]);

  const getComments = () => {
    axios.get('/api/reddit/hot')
      .then((res) => {
        setComments(res.data);
      });
  };

  const getBest = () => {
    axios.get('/api/reddit/best')
      .then((res) => {
        setBest(res.data);
      });
  };

  const getTop = () => {
    axios.get('/api/reddit/top')
      .then((res) => {
        setTop(res.data);
      });
  };

  useEffect(() => {
    getComments();
    getBest();
    getTop();

  },[]);

  const handleClick = (category) => {
    console.log(category);
  }

  return (
    <Router>
      <div className="wrapper">
        <Header handleClick={handleClick} />
        <Switch>
          {/* <Posts comments ={comments} />   */}
          <Route path="/" exact > <Posts comments ={comments} /> </Route>
          <Route path="/best"> <Best comments ={best}/> </Route>
          <Route path="/top"> <Top comments ={top}/> </Route>
        </Switch>
       
      </div>
    </Router>
  );
}
  
export default App;