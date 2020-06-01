import '../styles/Users.css';
import Loading from './Loading';
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      usersInfo: [],
      isLoading: true,
    };
  }
  useStyles = makeStyles({
    root: {
      minWidth: 275,
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
  });
  async componentDidMount() {
    let users = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'GET',
    });

    this.setState({
      usersInfo: await users.json(),
      isLoading: false,
    });
  }
  handleOnClick = (user) => {
    this.props.history.push(`users/${user.id}`);
  };

  render() {
    const { usersInfo, isLoading } = this.state;
    const classes = this.useStyles;

    return isLoading ? (
      <Loading />
    ) : (
      <Box p={2} className="users">
        <h2>List of users</h2>
        {usersInfo.map((user) => (
          <Card
            key={user.id}
            border={1}
            className={classes.root}
            m={2}
            p={2}
            bgcolor="background.paper"
            variant="outlined"
          >
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                user_name: {user.username}
              </Typography>
              <Typography variant="h5" component="h2">
                {user.name}
              </Typography>
              <CardActions style={{ justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => this.handleOnClick(user)}
                >
                  View More Details
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }
}

export default Users;
