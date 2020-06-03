import React, { Component } from 'react';
import Loading from './Loading';
import Slider from './Slider';
import ErrorMessage from './ErrorMessage';
import ApiRequest from './ApiRequest';

class AlbumPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      albumPhotos: [],
    };
  }
  async componentDidMount() {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    ApiRequest(url)
      .then((albumPhotos) =>
        this.setState({
          albumPhotos: albumPhotos,
          isLoading: false,
        })
      )
      .catch((error) => {
        this.setState({
          isLoading: false,
          error: error,
        });
      });
  }
  render() {
    const { albumPhotos, isLoading, error } = this.state;

    const filteredAlbumPost = albumPhotos.filter(
      (data) => data.albumId.toString() === this.props.match.params.albumId
    );

    return isLoading ? (
      <Loading />
    ) : error ? (
      <ErrorMessage error={error.message} />
    ) : (
      <React.Fragment>
        <Slider images={filteredAlbumPost} />
      </React.Fragment>
    );
  }
}

export default AlbumPhotos;
