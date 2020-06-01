import React, { Component } from 'react';
import Loading from './Loading';
import Slider from './Slider';

class AlbumPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      albumPhotos: [],
    };
  }
  async componentDidMount() {
    const albumPhotos = await fetch(
      `https://jsonplaceholder.typicode.com/photos`
    );

    this.setState({
      albumPhotos: await albumPhotos.json(),
      isLoading: false,
    });
  }
  render() {
    const { albumPhotos, isLoading } = this.state;

    const filteredAlbumPost = albumPhotos.filter(
      (data) => data.albumId.toString() === this.props.match.params.albumId
    );

    return isLoading ? (
      <Loading />
    ) : (
      <React.Fragment>
        <Slider images={filteredAlbumPost} />
      </React.Fragment>
    );
  }
}

export default AlbumPhotos;
