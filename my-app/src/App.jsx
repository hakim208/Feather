import React from 'react'

import "./App.css"

import Navbar from './companents/navbar/nnavbar'
import Api from './companents/api/api'

import ImgNav from "./assets/Vector (25).png"
import ImgNavkarzina from "./assets/Vector (26).png"
import ImgSec1 from "./assets/IMAGE (54).png"
import ImgCart1 from "./assets/IMAGE (55).png"
import Img from "./assets/IMAGE (56).png"
import Img2 from "./assets/IMAGE (57).png"
import Img3 from "./assets/IMAGE (58).png"
import Img4 from "./assets/IMAGE (59).png"
import Img5 from "./assets/IMAGE (60).png"
import Img6 from "./assets/IMAGE (61).png"
import Img7 from "./assets/IMAGE (62).png"
import Img8 from "./assets/IMAGE (63).png"

const App = () => {
  return (
    <div>
      <div className="section1">
        <Navbar img={ImgNav} karzina={ImgNavkarzina} />
        <div className="sec1">
          <div className="con-Sec1">
            <p className='curated-Text'>Curated and <br /> Convenient</p>
            <p>We've built our offerings on the principle that everyone deserves <br /> high-quality design without the high cost. We offer elevated rental <br /> inventory, to transform your space. Reuse and recycle - we make <br /> the decision as light as a “feather”</p>
            <button className='btn-Get'>Get Started</button>
          </div>
          <img src={ImgSec1} alt="" />
        </div>
        <p className='shop-Text'>Shop by Room</p>
        <Api img={ImgCart1} text="Living Room" />
      </div>
      <div className="con-Text">
        <p className='keeping-Text'>“Keeping Furniture in Homes and out of Landfills."</p>
        <p>This isn’t just another rental company - We’re elevating the future of furniture by <br /> replacing the commitment of ownership with a culture of sharing in a way that’s <br /> curated, convenient, and sustainable.</p>
      </div>
      <div className="sec1">
        <div className="con-Sec1">
          <p className='curated-Text1'>Enjoy a fully furnished <br /> space in less than week</p>
          <p>Feather furniture is available to be delivered and <br /> assembled in New York City, Los Angeles and San <br /> Francisco.</p>
          <p style={{ color: "#E9672B" }}>Explore Furniture</p>
        </div>
        <img src={ImgSec1} alt="" />
      </div>
      <div className="section">
        <img src={Img} alt="" />
        <div className="con-Sec1">
          <p className='curated-Text1'>Garage Sale - 40% & Up</p>
          <p>Our Garage Sale is open! Savings start at 40% on <br /> favorite retired pieces. Find dressers, sofas, decor, and <br /> more to make the year one to remember.</p>
          <p>Terms and conditions apply. View here.</p>
          <p style={{ color: "#E9672B" }}>Shop Now</p>
        </div>
      </div>
      <div className="section">
        <div className="con-Sec">
          <p className='curated-Text1'>Furniture for business, <br /> made simple.</p>
          <p>Say goodbye to cost, complexity, and commitment of <br /> furniture. Feather makes it easy with affordable rental <br /> plans, white glove delivery and best-in-class account <br /> service.</p>
          <p style={{ color: "#E9672B" }}>Visit Feather For Business</p>
        </div>
        <img src={Img2} alt="" />
      </div>
      <div className="section">
        <img src={Img3} alt="" />
        <div className="con-Sec1">
          <p className='curated-Text1'>Never assemble furniture <br /> again.</p>
          <p>We move a lot. There are countless floor plans and <br /> roommates (oh, and your evolving tastes) between <br /> here and there. With Feather, furnish your space <br /> without breaking a sweat or reaching for a <br /> screwdriver.</p>
          <p style={{ color: "#E9672B" }}>How Feather Works</p>
        </div>
      </div>
      <div className="section5">
        <p className='shop-Text'>Shop our Bestsellers</p>
        <div className="Allcart">
          <div className="sec-cart">
            <img src={Img4} alt="" />
            <p>Cooper Dining Table</p>
            <p>rent for
              $
              15
              /mo <br />
              or buy for
              $
              359 <br />
              $
              314</p>
          </div>
          <div className="sec-cart">
            <img src={Img5} alt="" />
            <p>Cooper Dining Table</p>
            <p>rent for
              $
              15
              /mo <br />
              or buy for
              $
              359 <br />
              $
              314</p>
          </div>
          <div className="sec-cart">
            <img src={Img6} alt="" />
            <p>Cooper Dining Table</p>
            <p>rent for
              $
              15
              /mo <br />
              or buy for
              $
              359 <br />
              $
              314</p>
          </div>
          <div className="sec-cart">
            <img src={Img7} alt="" />
            <p>Cooper Dining Table</p>
            <p>rent for
              $
              15
              /mo <br />
              or buy for
              $
              359 <br />
              $
              314</p>
          </div>
        </div>
        <p className='text-shop'>Shop All Furniture</p>
      </div>
    </div>
  )
}

export default App
