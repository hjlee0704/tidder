import React from 'react';
// import Paper from '@bit/mui-org.material-ui.paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#d7dadc',
    background: "#1a1a1b",
    maxWidth: 400,
    height: 250,
  },

}));

const BestSingle = ({commentList, handleClick, id}) => {
  const classes = useStyles();

  return (
    
      <Grid item xs={12} sm={6} md= {3} aria-describedby={id} onClick={(e) => {handleClick(e, commentList)}}>

        <Paper className={classes.paper}> 

          {commentList.comments[0]} 

        </Paper>
        
      </Grid>

  );
}

export default BestSingle;