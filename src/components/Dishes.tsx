import React from 'react'
import './Dishes.css'

const Dishes:React.FC = () => {
  return (
   <>
   <div className="dishes py-5 my-4">
   <h1 className='text-uppercase text-center'>Dishes</h1>
   <h6 className='text-center'>Dish Of The Day</h6>
   </div>
   <div className="dishescards">
   <div className="container">
    <div className="row ">
    <div className="card col-12 col-lg-4">
        <img src="/images/dishes/dishes1.svg" alt="" className='img-fluid card-img' />
       <div className="card-title p-3">
       <h1>
        Featured Meal
        </h1>
        <small className='text-white-50 pb-2'>Served with french fries + drink</small>
        <p className='text-white-50'>Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
   <div className="stars d-flex justify-content-between">
    <img src="/images/dishes/stars1.svg" alt="" />
    <h6>12</h6>
    <button className='text-uppercase dishesbtn'>Order</button>
   </div>
       </div>
    </div>
    <div className="card col-12 col-lg-4">
        <img src="/images/dishes/dishes2.svg" alt="" className='img-fluid card-img' />
       <div className="card-title p-3">
       <h1>
        Featured Meal
        </h1>
        <small className='text-white-50 pb-2'>Served with french fries + drink</small>
        <p className='text-white-50'>Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
   <div className="stars d-flex justify-content-between">
    <img src="/images/dishes/stars1.svg" alt="" />
    <h6>12</h6>
    <button className='text-uppercase dishesbtn'>Order</button>
   </div>
       </div>
    </div>  <div className="card col-12 col-lg-4">
        <img src="/images/dishes/dishes3.svg" alt="" className='img-fluid card-img' />
       <div className="card-title p-3">
       <h1>
        Featured Meal
        </h1>
        <small className='text-white-50 pb-2'>Served with french fries + drink</small>
        <p className='text-white-50'>Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
   <div className="stars d-flex justify-content-between">
    <img src="/images/dishes/stars1.svg" alt="" />
    <h6>12</h6>
    <button className='text-uppercase dishesbtn'>Order</button>
   </div>
       </div>
    </div>
    
    </div>
   </div>
   </div>
   <div className="dishescards py-5">
   <div className="container">
    <div className="row">
    <div className="card col-12 col-lg-4">
        <img src="/images/dishes/dishes4.svg" alt="" className='img-fluid card-img' />
       <div className="card-title p-3">
       <h1>
        Featured Meal
        </h1>
        <small className='text-white-50 pb-2'>Served with french fries + drink</small>
        <p className='text-white-50'>Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
   <div className="stars d-flex justify-content-between">
    <img src="/images/dishes/stars1.svg" alt="" />
    <h6>12</h6>
    <button className='text-uppercase dishesbtn'>Order</button>
   </div>
       </div>
    </div>  <div className="card col-12 col-lg-4">
        <img src="/images/dishes/dishes5.svg" alt="" className='img-fluid card-img' />
       <div className="card-title p-3">
       <h1>
        Featured Meal
        </h1>
        <small className='text-white-50 pb-2'>Served with french fries + drink</small>
        <p className='text-white-50'>Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
   <div className="stars d-flex justify-content-between">
    <img src="/images/dishes/stars1.svg" alt="" />
    <h6>12</h6>
    <button className='text-uppercase dishesbtn'>Order</button>
   </div>
       </div>
    </div>  <div className="card col-12 col-lg-4">
        <img src="/images/dishes/dishes6.svg" alt="" className='img-fluid card-img' />
       <div className="card-title p-3">
       <h1>
        Featured Meal
        </h1>
        <small className='text-white-50 pb-2'>Served with french fries + drink</small>
        <p className='text-white-50'>Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...</p>
   <div className="stars d-flex justify-content-between">
    <img src="/images/dishes/stars1.svg" alt="" />
    <h6>12</h6>
    <button className='text-uppercase dishesbtn'>Order</button>
   </div>
       </div>
    </div>
    
    </div>
   </div>
   </div>
   </>
  )
}

export default Dishes