import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(2),
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.link}
            color="inherit"
            to="/"
            component={Link}
          >
            Home
          </Typography>
          <Typography
            className={classes.link}
            color="inherit"
            to="/users"
            component={Link}
          >
            Users
          </Typography>
          <Typography color="inherit" to="/albums" component={Link}>
            Albums
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
