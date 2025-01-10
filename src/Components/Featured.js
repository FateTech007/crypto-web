import React from 'react'
import './Featured.css'
import BTC from '../assets/btc-img.png'
import { FiArrowUpRight } from 'react-icons/fi'

const Featured = () => {
    return (
        <div className="featured">
            <div className="container">
                {/* Left */}
                <div className="left">
                    <h1>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h1>
                    <p>see all available assets Cryptocurriencies and NFT's</p>
                    <button className="btn">see more coins</button>

                </div>
                {/* Right */}
                <div className="right">
                    <div className="top">
                        <img src={BTC} alt="" />
                        <div>
                            <h5>Bitcoin</h5>
                            <p>$98000</p>
                        </div>
                        <span><FiArrowUpRight />2.5%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured