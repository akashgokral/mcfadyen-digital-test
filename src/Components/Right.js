import React, { useState } from "react";
import img1 from "../Assets/img1.png";
import cartimg from "../Assets/cartimg.png";
import arrow from "../Assets/arrow.png";
import products from "../API/api";
import { addsize } from "../Redux/Actions/Action";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'

const Right = () => {
  const [size, setSize] = useState();

  const handlesize = (size) => {
    setSize(size);
    console.log(size);
  };

  const Addsize = (size) => {
    dispatch(addsize(size));
    Swal.fire({
      title:`Item added to cart of size ${size}`,
      confirmButtonColor: '#000',
    });
  };

  const dispatch = useDispatch();

  const add = useSelector((state) => state.SizeReducer);
  console.log(add, "add");

  return (
    <>
      <div className="right mt-lg-1">
        <div className="right_title">
          <h6>JONATHAN SIMKHAI</h6>
        </div>

        <div>
          <p className="mb-1 ">Lurex Linen Viscose Jacket in Conchiglia</p>
          <p className="fw-bold mb-3">$225</p>
          <p>
            <span className="fw-bold">Color</span> Conchiglia
          </p>
        </div>

        <div className="cart_img mb-3">
          <img src={img1} alt="img1" className="me-2" />
          <img src={cartimg} alt="img1" />
        </div>

        <div className="size">
          <div className="d-flex justify-content-between">
            <p>
              <span className="fw-bold">SIZE</span> 
            </p>
            <p className="text-decoration-underline">SIZE GUIDE</p>
          </div>
          {products.map((product) => {
            return (
              <>
                <div className="d-inline-block">
                  <div
                    className={
                      size === product.size
                        ? "size_details mb-2 active"
                        : "size_details mb-2"
                    }
                    onClick={() => {
                      handlesize(product.size);
                    }}
                  >
                    <span>{product.size}</span>
                  </div>
                </div>
              </>
            );
          })}
          <button
            className="btn btn-dark cart_btn w-100 mb-2"
            type="button"
            onClick={() => Addsize(size)}
          >
            Add to Bag
            <img src={arrow} alt="arrow" />
          </button>

          <p className="mb-3">
            Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
          </p>
          <p>Speak to a Personal Stylist CHAT NOW</p>
        </div>
      </div>
    </>
  );
};

export default Right;
