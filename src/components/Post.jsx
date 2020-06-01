import React, { Component } from 'react';
import Loading from './Loading';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      postsInfo: {},
      postCommentsInfo: [],
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
    const { match } = this.props;
    let posts = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${match.params.postId}`,
      {
        method: 'GET',
      }
    );
    let comments = await fetch(
      `https://jsonplaceholder.typicode.com/comments`,
      {
        method: 'GET',
      }
    );

    this.setState({
      postsInfo: await posts.json(),
      postCommentsInfo: await comments.json(),
      isLoading: false,
    });
  }
  handleOnClick = (post) => {
    this.props.history.push(`posts/${post.id}`);
  };

  render() {
    const { postsInfo, postCommentsInfo, isLoading } = this.state;
    const classes = this.useStyles;
    return isLoading ? (
      <Loading />
    ) : (
      <Box variant="outlined" p={2}>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          UserId: {postsInfo.userId}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {postsInfo.title}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {postsInfo.body}
        </Typography>

        <Typography variant="body2" component="p">
          Comments:
        </Typography>
        {postCommentsInfo.map((comment) =>
          comment.postId === postsInfo.id ? (
            <Card
              //   className={classes.body}
              bgcolor="background.paper"
              variant="outlined"
              //   className={classes.root}
              key={comment.id}
            >
              <CardContent>
                <Typography variant="body2" component="p">
                  <small> Username: {comment.name}</small>
                </Typography>
                <Typography variant="body2" component="p">
                  {comment.body}
                </Typography>
              </CardContent>
            </Card>
          ) : null
        )}
      </Box>
    );
  }
}

export default Post;
