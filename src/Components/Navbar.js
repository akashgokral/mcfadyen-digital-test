import React from 'react'
import search from "../Assets/Search.png"
import bag from "../Assets/Bag.png"
import account from "../Assets/Account.png"

const Navbar = () => {
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top ">
  <div className="container-fluid ">
    <div><a className="navbar-brand nav_title" href="#">MY COMPANY.COM</a></div>
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav text-center mx-auto">
        <li className='nav-item nav_li'>THE EDIT</li>
          <li className='nav-item nav_li'>NEW ARRIVALS</li>
          <li className='nav-item nav_li'>DESIGNERS</li>
          <li className='nav-item nav_li'>CLOTHING</li>
          <li className='nav-item nav_li'>SHOES</li>
          <li className='nav-item nav_li'>BAGS</li>
          <li className='nav-item nav_li'>ACCESSORIES</li>
          <li className='nav-item nav_li'>JEWELLERY</li>
          <li className='nav-item nav_li'>BEAUTY</li>
          <li className='nav-item nav_li'>HOME</li>
      </ul> 
      </div>
      <div className='d-flex'>
        <img src={search} alt="search" className='mx-2'/>
        <img src={bag} alt="bag" className='mx-2'/>
        <img src={account} alt="account" className='mx-2 acc__img'/>
      </div>
    </div>
    
</nav>






    {/* <div className="nav d-flex justify-content-between mb-3">

      <div className="nav_title">
        <h6>MY COMPANY.COM</h6>
      </div>

      <div>
        <ul className='nav_ul'>
          <li className='nav_li'>THE EDIT</li>
          <li className='nav_li'>NEW ARRIVALS</li>
          <li className='nav_li'>DESIGNERS</li>
          <li className='nav_li'>CLOTHING</li>
          <li className='nav_li'>SHOES</li>
          <li className='nav_li'>BAGS</li>
          <li className='nav_li'>ACCESSORIES</li>
          <li className='nav_li'>JEWELLERY</li>
          <li className='nav_li'>BEAUTY</li>
          <li className='nav_li'>HOME</li>
        </ul>
      </div>

      <div>
        <img src={search} alt="search" className='mx-2'/>
        <img src={bag} alt="bag" className='mx-2'/>
        <img src={account} alt="account" className='mx-2'/>
      </div>
    </div> 
     */}
    </>
  )
}

export default Navbar