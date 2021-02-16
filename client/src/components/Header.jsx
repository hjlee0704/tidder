import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import logo from "./logo.png";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#1a1a1b" 
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 40,
    marginRight: '10px'
  },
  
}));

const Header = () => {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          {/* <img src={logo} alt="reddit" className={classes.logo} /> */}
          <Typography variant="h6" className={classes.title} >
            Tidder
          </Typography>
        </Toolbar>
      </AppBar>
    // </div>  
  )

}

export default Header;

