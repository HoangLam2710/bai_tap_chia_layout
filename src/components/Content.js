import React, { Component } from "react";
import Smartphone from "./Smartphone";
import Laptop from "./Laptop";

class Content extends Component {
    render() {
        return (
            <div>
                <Smartphone />
                <Laptop />
            </div>
        );
    }
}

export default Content;
