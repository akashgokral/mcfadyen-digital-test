import React from "react";
import img1 from "../Assets/img1.png";
import img2_1 from "../Assets/img2_1.png";
import img2_2 from "../Assets/img2_2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";
import heart from "../Assets/heart.png";

const Center = () => {
  return (
    <>
      <div className="center">
        <div className="mobile_view">
          <div className="first_img mb-lg-2">
          <div className="img_div"> <img src={img1} alt="img1" className="" /></div>
          <img src={heart} alt="heart" className="heart " />
          </div>

          <div className="second_img d-flex mb-lg-2">
          <div className="img_div"> <img src={img2_1} alt="img2_1" className="" /> </div>
          <div className="img_div">  <img src={img2_2} alt="img2_2" className="" /> </div>
          </div>

          <div className="third_img mb-lg-2">
          <div className="img_div"> <img src={img3} alt="img3" className="" /> </div>
          </div>

          <div className="fourth_img mb-5">
          <div className="img_div"> <img src={img4} alt="img4" className="" /> </div>
          </div>
        </div>
      </div>
      <div className="brand d-flex justify-content-center mb-lg-5">
        <p>JONATHAN SIMKHAI</p>
        <p>BLAZERS</p>
        <p>VISCOSE</p>
      </div>
    </>
  );
};

export default Center;
