import '../styles/User.css';
import React, { Component } from 'react';
import Loading from './Loading';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

class User extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: 'true',
      userInfo: {},
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
    list: {
      fontWeight: 10,
    },
  });
  async componentDidMount() {
    try {
      const { match } = this.props;
      let userInfo = await fetch(
        `https://jsonplaceholder.typicode.com/users/${match.params.userId}`,
        {
          method: 'GET',
        }
      );

      this.setState({
        userInfo: await userInfo.json(),
      });
    } catch (e) {
      console.log(e);
    }
  }
  handleOnClick = (post) => {
    this.props.history.push(`posts/${post.id}`);
  };

  render() {
    const { userInfo } = this.state;
    const classes = this.useStyles;

    return userInfo.address === undefined ? (
      <Loading />
    ) : (
      <Card variant="outlined" className="user">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            UserId:{userInfo.id}
          </Typography>
          <Typography variant="h5" component="h2">
            {userInfo.name}
          </Typography>
          <Typography className={classes.pos}>
            User name: {userInfo.username}
          </Typography>
          <Typography variant="body2" component="p">
            Email: {userInfo.email}
          </Typography>

          <List className="list">
            address:
            <ol>
              <li>street:{userInfo.address.street}</li>
              <li>suite:{userInfo.address.suite}</li>

              <li>city:{userInfo.address.city}</li>
              <li>zipcode:{userInfo.address.zipcode}</li>
            </ol>
          </List>
          <Typography variant="body2" component="p">
            phone: {userInfo.phone}
          </Typography>

          <List>
            company:
            <ol>
              <li>name:{userInfo.company.name}</li>
              <li>catch phrase:{userInfo.company.catchPhrase}</li>

              <li>bs:{userInfo.company.bs}</li>
            </ol>
          </List>
          <Typography variant="body2" component="p">
            website: {userInfo.website}
            <br />
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default User;
