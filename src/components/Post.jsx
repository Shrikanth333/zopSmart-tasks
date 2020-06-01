import React, { Component } from 'react';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ApiRequest from './ApiRequest';
class Post extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      postsInfo: {},
      postCommentsInfo: [],
      error: false,
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

  componentDidMount() {
    const { match } = this.props;

    let url = `https://jsonplaceholder.typicode.com/posts/${match.params.postId}`;
    ApiRequest(url)
      .then((post) =>
        this.setState({
          postsInfo: post,
        })
      )
      .catch((error) =>
        this.setState({
          isLoading: false,
          error: error,
        })
      );

    url = `https://jsonplaceholder.typicode.com/comments`;
    ApiRequest(url)
      .then((comments) => {
        this.setState({
          postCommentsInfo: comments,
          isLoading: false,
        });
      })
      .catch((error) =>
        this.setState({
          isLoading: false,
          error: error,
        })
      );
  }
  handleOnClick = (post) => {
    this.props.history.push(`posts/${post.id}`);
  };

  render() {
    const { postsInfo, postCommentsInfo, isLoading, error } = this.state;
    const classes = this.useStyles;
    return isLoading ? (
      <Loading />
    ) : error ? (
      <ErrorMessage error={error} />
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
              bgcolor="background.paper"
              variant="outlined"
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
