import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      postsInfo: [],
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
    let posts = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'GET',
    });

    this.setState({
      postsInfo: await posts.json(),
    });
  }
  handleOnClick = (post) => {
    this.props.history.push(`posts/${post.id}`);
  };

  render() {
    const { postsInfo } = this.state;
    const classes = this.useStyles;
    return (
      <Box m={2} p={2}>
        <Typography variant="h2" component="h2"></Typography>
        <h2>List of Posts</h2>
        {postsInfo.map((post) => (
          <Card
            border={1}
            className={classes.root}
            boxShadow={3}
            m={2}
            p={2}
            bgcolor="background.paper"
            variant="outlined"
          >
            <CardContent>
              <Typography className={classes.title} color="textPrimary">
                UserId: {post.userId}
              </Typography>
              <Typography variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography variant="body2" component="p">
                {post.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                onClick={() => this.handleOnClick(post)}
              >
                Read more
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    );
  }
}

export default Posts;
