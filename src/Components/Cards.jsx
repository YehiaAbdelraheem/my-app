import React from 'react'
import './Cards.css'
import watchImage from './images/images/watch.jpg';
import speaker from './images/images/speaker.jpg';
import laptop from './images/images/laptop.jpg';
import heart from './images/images/wish.svg';
import heart_black from './images/images/wish-black.svg';
import headphone from './images/images/headphone.jpg'
import tost from './images/images/homeapp.jpg'
import camera from './images/images/camera.jpg'
// import stars from './images/images/1143722-200.png'
function Cards() {
    return (
        <div className='myContainer'>
            <h2>Our popular Products</h2>
            <div className='cards'>

                <div className='card-1'>
                    <div className='item-1'>
                        <img src={watchImage} alt='' />
                        <p>Smart watch</p>
                    </div>
                    <div className='item-2'>
                        <img src={speaker} alt='' />
                        <p>Speaker</p>
                    </div>
                    <div className='item-3'>
                        <img src={laptop} alt='' />
                        <p>laptop</p>
                    </div>
                </div>

                <div className='card-2'>
                    <div className='sale'>
                        <p>100 % off</p>
                        <h2>Home Speacker</h2>
                        <p>From $399or $16.62/mo.</p>
                        <span>For 24 mo.*</span>
                    </div>
                </div>
                <div className='card-3'>
                    <div className='heart'>
                        <img src={heart} alt=''/>
                        <img src={heart_black} alt='' />
                    </div>
                    <div className='main-img'>
                        <img src={headphone} alt=''/>
                    </div>
                    <div className='content-text'>
                        <p style={{color:"REd"}}>Havelts</p>
                        <h3>Kids Headphone Bulk 10 pack multi colored for...</h3>
                        {/* <img src={stars} alt='' /> */}
                        <p style={{fontSize:"20px"}}>$100.0</p>
                    </div>
                </div>
                <div className='card-4'>
                    <div className='heart'>
                        <img src={heart} alt='' />
                        <img src={heart_black} alt='' />
                    </div>
                    <div className='main-img'>
                        <img src={tost} alt='' />
                    </div>
                    <div className='content-text'>
                        <p style={{ color: "REd" }}>Havelts</p>
                        <h3>Kids Headphone Bulk 10 pack multi colored for...</h3>
                        {/* <img src={stars} alt='' /> */}
                        <p style={{ fontSize: "20px" }}>$100.0</p>
                    </div>
                </div>
                <div className='card-5'>
                    <div className='heart'>
                        <img src={heart} alt='' />
                        <img src={heart_black} alt='' />
                    </div>
                    <div className='main-img'>
                        <img src={camera} alt='' />
                    </div>
                    <div className='content-text'>
                        <p style={{ color: "REd" }}>Havelts</p>
                        <h3>Kids Headphone Bulk 10 pack multi colored for...</h3>
                        {/* <img src={stars} alt='' /> */}
                        <p style={{ fontSize: "20px" }}>$100.0</p>
                    </div>
                </div>
                <div className='card-6'>
                    <div className='heart'>
                        <img src={heart} alt='' />
                        <img src={heart_black} alt='' />

                    </div>
                    <div className='main-img'>
                        <img src={watchImage} alt='' />
                    </div>
                    <div className='content-text'>
                        <p style={{ color: "REd" }}>Havelts</p>
                        <h3>Kids Headphone Bulk 10 pack multi colored for...</h3>
                        {/* <img src={stars} alt='' /> */}
                        <p style={{ fontSize: "20px" }}>$100.0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards