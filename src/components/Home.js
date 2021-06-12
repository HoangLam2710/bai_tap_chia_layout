import React, { Component } from "react";
import Carousel from "./Carousel";
import Content from "./Content";
import Header from "./Header";
import Promotion from "./Promotion";

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Content />
                <Promotion />
            </div>
        );
    }
}

export default Home;
