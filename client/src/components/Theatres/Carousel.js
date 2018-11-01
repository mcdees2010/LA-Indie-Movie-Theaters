import React, { Component } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

class ControlledCarousel extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.travelcaffeine.com/wp-content/uploads/2017/05/pacific-cinerama-dome-arclight-cinema-hollywood-sunset-los-angeles-california.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>ArcLight Hollywood</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img1.10bestmedia.com/Images/Photos/265007/p-The-Chinese-Theatre-Exterior_54_990x660.JPG"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>TCL Chinese Theatre</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.latimes.com/resizer/2JH4o6VACd8D9DWuIOx_p7PPg4M=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/6SFPOYLXSVCCVGMCPS6YGSATYA.jpg"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Aero Theatre</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
export default ControlledCarousel;