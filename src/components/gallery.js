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
      activePhotos: [],
      apiCaller:
        "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=2ec1ee04d803c2cfa9bf388963cd3bee&photoset_id=72157668635132158&user_id=157021524%40N06&format=json&nojsoncallback=1&api_sig=d7c1e6c1fbcc6f0800b55e58bc7d3678"
    };
    this.getActivePhotos = this.getActivePhotos.bind(this);
    this.handleBottomScroll = this.handleBottomScroll.bind(this);
    this.isScrolledIntoView = this.isScrolledIntoView.bind(this);
  }
  componentDidMount() {
    this.getPhotos();
    window.addEventListener("scroll", this.handleBottomScroll, false);
  }
  getPhotos() {
    axios.get(this.state.apiCaller).then(res => {
      let photos = [...this.state.photos, ...res.data.photoset.photo];
      this.setState({
        photos: photos.splice(10, photos.length),
        activePhotos: photos.slice(0, 10)
      });
    });
  }

  getActivePhotos = () => {
    let newActivePhotos = this.state.photos.slice(0, 10);
    let removedPhotos = this.state.photos.splice(0, 10);
    let updatedPhotos = this.state.photos.slice(10, this.state.photos.length);
    this.setState({
      activePhotos: [...this.state.activePhotos, ...newActivePhotos],
      photos: [...updatedPhotos]
    });
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
    let { activePhotos } = this.state;
    let photoSet = activePhotos.map(photo => (
      <PhotoItem {...photo} key={photo.id} />
    ));
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
