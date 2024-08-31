import React from 'react'
import './Introduction.css'

// icons
import { CiClock2 } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";





const Introduction:React.FC = () => {
  return (
  <>
<div className="intro">
<h1 className='text-white text-center pt-5'>Your <span>favourite food</span> <br />
delivered <span>hot & fresh</span></h1>
<h6>
HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping <br /> & marinating, so you can cook a fresh homemade dinner in just 15 minutes.
</h6>
<div className="btndiv py-5">
<button>Order Now</button>
</div>
</div>
<div className="contact">
<div className="container">
<div className="contactcard">
<div className="cardicon">
<CiClock2 />
</div>
  <h6>Today 10:00 am - 7:0</h6>
  <small>Working hours</small>
 </div>
 <div className="contactcard">
  <div className="cardicon">
  <FaLocationArrow />
  </div>
  <h6>Today 10:00 am - 7:0</h6>
  <small>Working hours</small>
 </div>
 <div className="contactcard">
  <div className="cardicon">
  <FaPhone />  
  </div>
  <h6>Today 10:00 am - 7:0</h6>
  <small>Working hours</small>
 </div>
</div>

</div>
  </>
  )
}

export default Introduction