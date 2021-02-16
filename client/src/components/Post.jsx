import React from 'react';
// import { makeStyles } from '@bit/mui-org.material-ui.styles';
// import Paper from '@bit/mui-org.material-ui.paper';
// import Grid from '@bit/mui-org.material-ui.grid';
// import Box from '@material-ui/core/Box';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(10),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

const Post = ({commentList}) => {

// const classes = useStyles();

  return (
    <div className="wrap" >
      {/* <Grid item xs={3}>
        <Paper className={classes.paper}>xs</Paper>
      </Grid> */}
      {commentList.comments.map((comment) => (
        <span>{comment} </span>
      ))}
    </div>
  );
}

export default Post;