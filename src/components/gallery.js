import React, { Component } from "react";
import axios from "axios";

import PhotoItem from "./photoitem";
import "../styles/gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      apiCaller:
        "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=2ec1ee04d803c2cfa9bf388963cd3bee&photoset_id=72157668635132158&user_id=157021524%40N06&format=json&nojsoncallback=1&api_sig=d7c1e6c1fbcc6f0800b55e58bc7d3678"
    };
  }
  componentDidMount() {
    this.getPhotos();
  }
  getPhotos() {
    axios.get(this.state.apiCaller).then(res => {
      let photos = this.state.photos.concat(res.data.photoset.photo);
      this.setState({ photos: photos });
    });
  }

  render() {
    let { photos } = this.state;
    let photoSet = photos.map(photo => <PhotoItem {...photo} key={photo.id} />);
    return <div className="photoset">{photoSet}</div>;
  }
}

export default Gallery;
