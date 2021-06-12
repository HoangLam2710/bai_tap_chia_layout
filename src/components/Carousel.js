import React, { Component } from "react";
import ImgSlide1 from "./../assets/image/slide_1.jpg";
import ImgSlide2 from "./../assets/image/slide_2.jpg";
import ImgSlide3 from "./../assets/image/slide_3.jpg";

class Carousel extends Component {
    render() {
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li
                        data-target="#demo"
                        data-slide-to={0}
                        className="active"
                    />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={ImgSlide1}
                            alt="Los Angeles"
                            width={1100}
                            height={500}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={ImgSlide2}
                            alt="Chicago"
                            width={1100}
                            height={500}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={ImgSlide3}
                            alt="New York"
                            width={1100}
                            height={500}
                        />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#demo"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" />
                </a>
                <a
                    className="carousel-control-next"
                    href="#demo"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" />
                </a>
            </div>
        );
    }
}

export default Carousel;
