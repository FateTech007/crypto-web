import React from 'react'
import HeroImg from '../assets/hero-img.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                {/* left sides */}
                <div className="left">
                    <p>Buy & Sell Crypto 24/7 using retirement account</p>
                    <h1>Invest in Cryptocurrency with Your IRA</h1>
                    <p>Buy, Store and Sell hundreds of cryptocurrencies</p>

                    <div className="input-container">
                        <input type="email" placeholder="enter your email" />
                        <button className="btn">Learn More</button>
                    </div>
                </div>
                {/* Right sides */}
                <div className="right">
                    <div className="img-container">
                        <img src={HeroImg} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero