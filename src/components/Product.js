import React, { Component } from "react";

class Product extends Component {
    render() {
        return (
            <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                    <img
                        className="card-img-top"
                        src={this.props.imgProduct}
                        alt="Card"
                        style={{ maxWidth: "100%", height: 250 }}
                    />
                    <div className="card-body text-center">
                        <h4 className="card-title text-center">
                            {this.props.header}
                        </h4>
                        <p className="card-text">{this.props.desc}</p>
                        <a href="/" className="btn btn-primary">
                            Detail
                        </a>
                        <a href="/" className="btn btn-danger">
                            Cart
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
