import { Carousel } from 'react-bootstrap';
import slider1 from '../assets/images/image4.jpg';
import slider2 from '../assets/images/image2.jpg';
import slider3 from '../assets/images/image3.jpg';
import slider4 from '../assets/images/image4.jpg';
import '../styles/imageslider.css';

function ImageSlider() {
  return (
    <Carousel interval={3000} fade pause={false} className="custom-carousel">
      <Carousel.Item>
        <div className="slide-overlay"></div>
        <img
          className="d-block w-100 slide-image"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption className="animated-caption">
          <h3 className="slide-title">ICE AGE</h3>
          <p className="slide-description">Dawn of the Dinosaurs.</p>
          {/* <button className="slide-button">Learn More</button> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide-overlay"></div>
        <img
          className="d-block w-100 slide-image"
          src={slider2}
          alt="Second slide"
        />
        <Carousel.Caption className="animated-caption">
          <h3 className="slide-title">YOGI BEAR</h3>
          <p className="slide-description">the new yogi bear show.</p>
          {/* <button className="slide-button">Discover</button> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide-overlay"></div>
        <img
          className="d-block w-100 slide-image"
          src={slider3}
          alt="Third slide"
        />
        <Carousel.Caption className="animated-caption">
          <h3 className="slide-title">Dreambuilders</h3>
          <p className="slide-description">La fabbrica dei sogn</p>
          {/* <button className="slide-button">Explore</button> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide-overlay"></div>
        <img
          className="d-block w-100 slide-image"
          src={slider4}
          alt="Fourth slide"
        />
        <Carousel.Caption className="animated-caption">
          <h3 className="slide-title">ICE AGE</h3>
          <p className="slide-description">This is the fourth slide description.</p>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
