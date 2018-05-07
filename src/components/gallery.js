import React, { Component } from "react";
import axios from "axios";
import { debounce } from "lodash";
import PhotoItem from "./photoitem";
import "../styles/gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photoPage: 1,
      apiCaller:
        "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=345693c1be002c3602e3e5dbd54e78db&photoset_id=72157668635132158&user_id=157021524%40N06&per_page=10&page=1&format=json&nojsoncallback=1"
    };
    this.getActivePhotos = this.getActivePhotos.bind(this);
    this.handleBottomScroll = this.handleBottomScroll.bind(this);
    this.isScrolledIntoView = this.isScrolledIntoView.bind(this);
    this.changeApiLink = this.changeApiLink.bind(this);
  }
  componentDidMount() {
    this.getPhotos();
    window.addEventListener("scroll", this.handleBottomScroll, false);
  }
  componentWillUnmount() {
    this.getPhotos();
    window.removeEventListener("scroll", this.handleBottomScroll, false);
    this.setState({ photos: [], activePhotos: [] });
  }
  getPhotos() {
    axios.get(this.state.apiCaller).then(res => {
      let photos = [...this.state.photos, ...res.data.photoset.photo];
      this.setState({
        photos: photos,
        photoPage: this.state.photoPage + 1
      });
      this.changeApiLink();
    });
  }

  getActivePhotos = () => {
    this.getPhotos();
  };

  changeApiLink = () => {
    let apiLink = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=01b03f0b97eada5bd3dbb1a108833e86&photoset_id=72157668635132158&user_id=157021524%40N06&per_page=10&page=${
      this.state.photoPage
    }&format=json&nojsoncallback=1`;
    this.setState({ apiCaller: apiLink });
  };

  handleBottomScroll = debounce(() => {
    let x = document.getElementById("scroller").lastChild;
    if (this.isScrolledIntoView(x)) {
      this.getActivePhotos();
    }
  }, 500);

  isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    return isVisible;
  }

  render() {
    let { photos } = this.state;
    let photoSet = photos.map(photo => <PhotoItem {...photo} key={photo.id} />);
    return (
      <div className="gallery" id="scroller">
        <div className="photoset">{photoSet}</div>
        <i
          className="fas fa-venus-mars"
          onClick={this.getActivePhotos}
          onScroll={this.handleBottomScroll}
        />
      </div>
    );
  }
}

export default Gallery;
