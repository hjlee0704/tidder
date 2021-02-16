import React from 'react';
import TopSingle from './TopSingle';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(2, 3),

  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const Top = ({ comments }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [title, setTitle] = React.useState('');


  const handleClick = (event, commentList) => {
    setAnchorEl(event.currentTarget);
    getTitle(commentList);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getTitle = (input) => {
    setTitle(input);
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={2} border={1} >
          {comments.map((commentList) => (
             < TopSingle commentList={commentList} key={commentList.index} handleClick={handleClick} id={id} />         
          ))}         
        </Grid>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          <Link href={title.link} color="inherit">
            {title.title}
          </Link>
        </Typography>
      </Popover>
    </div>
  );
}

export default Top;