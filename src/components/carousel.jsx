import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import auth from "../services/authService";
import slide1 from "../images/slide2.jpg";
import slide2 from "../images/slide1.jpg";
import slide3 from "../images/slide3.jpg";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import Title from "./title";

const items = [
  {
    src: slide1,
    caption: (
      <h1 style={{ position: "relative", bottom: "150px" }}>
        Building a stressless World through Speedy and Perfect Delivery..
      </h1>
    ),
    button: (
      <button
        // onClick={this.props.history.push('/register')}
        className="btn btn-danger"
        style={{ position: "relative", bottom: "160px" }}
      >
        Get Started
      </button>
    )
  },
  {
    src: slide2,
    caption: (
      <h1 style={{ position: "relative", bottom: "150px" }}>
        Building a stressless World through Speedy and Perfect Delivery..
      </h1>
    ),
    button: (
      <button
        className="btn btn-danger"
        style={{ position: "relative", bottom: "160px" }}
      >
        Get Started
      </button>
    )
  },
  {
    src: slide3,
    caption: (
      <h1 style={{ position: "relative", bottom: "150px" }}>
        Building a stressless World through Speedy and Perfect Delivery..
      </h1>
    ),
    button: (
      <button
        className="btn btn-danger"
        style={{ position: "relative", bottom: "160px" }}
      >
        Get Started
      </button>
    )
  }
];

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  handleClick = () => {
    this.props.history.push("/register");
  };

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/profile" />;
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            src={item.src}
            alt={item.altText}
            style={{ width: "100%", height: "100%", opacity: "0.8" }}
          />
          <CarouselCaption
            captionText="Building a stressless World through Speedy and Perfect Delivery.."
            captionHeader={
              <button
                className="btn btn-danger"
                style={{ position: "relative", bottom: "160px" }}
                onClick={this.handleClick}
              >
                Get Started
              </button>
            }
          />
          <Title title="SENDLY" />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Banner;
