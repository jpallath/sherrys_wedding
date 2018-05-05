import React, { Component } from "react";
import beach from "../images/beach.jpg";
import engagement from "../images/engagement.jpg";

class Gallery extends Component {
  render() {
    const arrayOfPictures = [{ beach }];
    const pictures = arrayOfPictures.map((image, index) => <div>...image</div>);
    return <div className="gallery">{pictures}</div>;
  }
}

export default Gallery;
