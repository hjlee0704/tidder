import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#1a1a1b" 
  },
  title: {
    flexGrow: 1,
  },
  
}));

const Header = () => {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <img src="newlog.png" alt="reddit" />
          <Typography variant="h3" className={classes.title} component={Link} to="/" color="inherit" style={{ textDecoration: 'none' }}>
              ...Tidder
          </Typography>
          
              <SearchIcon />
         

          <Button color="inherit" component={Link} to="/">Hot</Button>
          <Button color="inherit" component={Link} to="/top">Top</Button>
          <Button color="inherit" component={Link} to="/best">Best</Button>

        </Toolbar>
      </AppBar>
    // </div>  
  )

}

export default Header;

