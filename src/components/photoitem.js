import React, { Component } from "react";

class PhotoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, farm, secret, server } = this.props;
    const source = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_h.jpg`;
    return <img className="photo-item" alt={id} src={source} />;
  }
}

export default PhotoItem;
