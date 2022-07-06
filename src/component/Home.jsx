import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white">
                <img src="/assets/bg.jpg" className="card-img" alt="background" height="700px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center" >
                    <h5 className="card-title display-3 fw-bolder mb-0 align-content-center">..COMPLETE YOUR WISHLIST !! LET'S GO</h5>
                   <p className="card-text lead fs-2">Check Out All The Products</p>
                </div>
            </div>
            <Products></Products>
        </div>
    );
}

export default Home;
