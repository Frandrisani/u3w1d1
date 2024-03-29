import { Component } from "react";
class ImageComponent extends Component {
  render() {
    return (
      <img
        className={this.props.className}
        src={this.props.imageSrc}
        alt={this.props.imageAlt}
      />
    );
  }
}
export default ImageComponent;
