import React from 'react';
import bgImg from '../assets/bg-img.png'; 
import emailIcon from '../assets/email.png'; 
import locationIcon from '../assets/location.png'; 

import './Homepage.css';
import Signup from './Signup';
import FindSuppliers from './FindSuppliers';
import Suppliers from './Suppliers';
import FindServiceTags from './FindServiceTags';
import Footer from './Footer';

export default function Homepage() {
    return (
        <div>
            <div className='img-container'>
                <img src={bgImg} alt='BackGround of Towers' className='bg-img' />
                <div className="scrim"></div>
                <div className='text-container'>
                    <h1 className='overlay-text'>Are You a Supplier?</h1>
                    <h2 className='overlay-subtext'>Explore Matching Opportunities.</h2>
                </div>
                <div className='input-container'>
                    <div className='input-group'>
                        <span className='icon-wrapper'>
                            <img src={emailIcon} alt="Email Icon" className="input-icon" />
                        </span>
                        <input className='overlay input-field' type="text" placeholder='Search your required service here' />
                    </div>
                    <div className='input-group'>
                        <span className='icon-wrapper'>
                            <img src={locationIcon} alt="Location Icon" className="input-icon" />
                        </span>
                        <input className='overlay input-field' type="text" placeholder='Search your desired location here' />
                    </div>
                    <button className='submit-button overlay-subtext'>Search</button>
                </div>
                <div className='text-container'>
                    <h1 className='overlay-subtext' style={{fontSize:'18px'}}><strong>Are you a buyer?</strong> <a href='/'>Click here if you are looking to post a requirements</a></h1>
                </div>
            </div>
            <Signup />
            <FindSuppliers />
            <Suppliers />
            <FindServiceTags />
            <Footer />
        </div>
    );
}
