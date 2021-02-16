import React from 'react';
import Post from './Post';
// import { makeStyles } from '@bit/mui-org.material-ui.styles';
// import Paper from '@bit/mui-org.material-ui.paper';
// import Grid from '@bit/mui-org.material-ui.grid';

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

const Posts = ({ comments }) => {
  return (
    <div>
      {comments.map((commentList) => (
        < Post commentList={commentList} />
      ))}
    </div>
  );

  // return (
  //   <div>
  //     <Grid container container direction="column" spacing={3}>
  //       {/* <Grid item xs>
  //         <Paper className={classes.paper}>xs</Paper>
  //       </Grid> */}
  //       <Post />
  //     </Grid>
  //   </div>
  // );
}

export default Posts;