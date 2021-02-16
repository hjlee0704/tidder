import React from 'react';
// import Paper from '@bit/mui-org.material-ui.paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  root: {
    minWidth: 275,
    color: '#d7dadc',
    background: "#1a1a1b",
    height: 300,
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

}));

const Post = ({commentList, handleClick, id}) => {
  const classes = useStyles();

  return (
      <Grid item xs={12} sm={6} md={4} lg= {3} aria-describedby={id} onClick={(e) => {handleClick(e, commentList)}} zeroMinWidth>

        {/* <Paper className={classes.paper}> 

          {commentList.comments[0]} 

        </Paper> */}
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="body2" component="p">
                {commentList.comments[0]} 
              </Typography>
            </CardContent>
            <CardActions>
              <img src={commentList.img} alt=''/>
            </CardActions>
        </Card>

      </Grid>
  );
}

export default Post;