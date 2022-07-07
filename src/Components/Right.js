import React from "react";
import img1 from "../Assets/img1.png";
import cartimg from "../Assets/cartimg.png";
import arrow from "../Assets/arrow.png";
import Size from "./Size";

const Right = () => {
  return (
    <>
      <div className="right mt-lg-1">

        <div className="right_title">
          <h6 className="">JONATHAN SIMKHAI</h6>
        </div>

        <div>
        <p className="mb-1">Lurex Linen Viscose Jacket in Conchiglia</p>
        <p className="fw-bold mb-3">$225</p>
        <p><span className="fw-bold">Color</span> Conchiglia</p>
        </div>

        <div className="cart_img mb-3">
        <img src={img1} alt="img1" className="me-2"/>
        <img src={cartimg} alt="img1" />
        </div>

        <div className="size">
            <div className="d-flex justify-content-between">
                <p><span className="fw-bold">SIZE</span> L</p>
                <p className="text-decoration-underline">SIZE GUIDE</p>
            </div>
            <div className="d-flex mb-3">
            <Size size="XS"/>
            <Size size="S"/>
            <Size size="M"/>
            <Size size="L"/>
            <Size size="XL"/>
            </div>

            
            <button className="btn btn-dark cart_btn w-100 mb-2" type="button">Add to Bag<img src={arrow}/></button>
            
            
            <p className="mb-3">Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
            <p>Speak to a Personal Stylist CHAT NOW</p>
        </div>
      </div>
    </>
  );
};

export default Right;
