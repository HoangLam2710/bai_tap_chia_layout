import React, { Component } from "react";
import Product from "./Product";
import iPhoneX from "./../assets/image/sp_iphoneX.png";
import GalaxyNote7 from "./../assets/image/sp_note7.png";
import Vivo from "./../assets/image/sp_vivo850.png";
import Blackberry from "./../assets/image/sp_blackberry.png";

class Smartphone extends Component {
    render() {
        return (
            <section id="smartphone" className="container-fluid pt-5 pb-5">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Product
                            header="iPhone X"
                            desc="iPhone X features a new all-screen design. Face ID, which makes your face your password"
                            imgProduct={iPhoneX}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Product
                            header="Galaxy Note7"
                            desc="The Galaxy Note7 comes with a perfectly symmetrical design for good reason"
                            imgProduct={GalaxyNote7}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Product
                            header="Vivo"
                            desc="A young global smartphone brand focusing on introducing perfect sound quality"
                            imgProduct={Vivo}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Product
                            header="Blackberry"
                            desc="BlackBerry is a line of smartphones, tablets, and services originally designed"
                            imgProduct={Blackberry}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Smartphone;
