import React, { Component } from "react";
import Product from "./Product";
import macbook from "./../assets/image/lt_macbook.png";
import asus from "./../assets/image/lt_rog.png";
import hp from "./../assets/image/lt_hp.png";
import lenovo from "./../assets/image/lt_lenovo.png";

class Smartphone extends Component {
    render() {
        return (
            <section
                id="laptop"
                className="container-fluid pt-5 pb-5 bg-light text-dark"
            >
                <h1 className="text-center">BEST LAPTOP</h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Product
                            header="MACBOOK"
                            desc="The MacBook is a brand of notebook computers manufactured by Apple Inc"
                            imgProduct={macbook}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Product
                            header="ASUS ROG"
                            desc="the Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices"
                            imgProduct={asus}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Product
                            header="HP OMEN"
                            desc="A young global smartphone brand focusing on introducing perfect sound quality"
                            imgProduct={hp}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Product
                            header="LENOVO THINKPAD"
                            desc="The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012"
                            imgProduct={lenovo}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Smartphone;
