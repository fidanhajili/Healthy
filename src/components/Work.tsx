import React from 'react'
import './Work.css'

const Work: React.FC = () => {
    return (
        <>
            <div className="work py-5 mb-5">
                <h1>WORK</h1>
                <h6>How It Works</h6>
            </div>
            <div className="cards py-5">
                <div className="container">
                    <div className="row d-flex">
                        <div className="card col-11 col-md-5 py-5 text-center ">
                            <h2>Pick Meals</h2>
                            <small>Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.</small>
                        </div>
                        <div className="card col-11  col-md-5 py-5 text-center ">
                            <h2>Choose How Often</h2>
                            <small>Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!</small>
                        </div>
                        <div className="card col-11 col-md-5 py-5 text-center ">
                            <h2>Fast Deliveries</h2>
                            <small>Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.</small>
                        </div>
                        <div className="card col-11 col-md-5 py-5 text-center ">
                            <h2>Tasty Meals</h2>
                            <small className='mt-4'>Gobble makes cooking fast, so you have more time to unwind and be with family.</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work