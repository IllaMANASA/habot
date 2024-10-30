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
                <h2 className='overlay-subtext'>Explore Matching Opportunities</h2>
            </div>
            <div className='input-container'>
                <div className='input-group'>
                <img src={emailIcon} alt="Email Icon" className="input-icon" />
                <input className='overlay' type="text" placeholder='Search your required service here' style={{ textAlign:'center'}} />
                </div>
                <div className='input-group'>
                <img src={locationIcon} alt="Email Icon" className="input-icon" />
                    <input className='overlay' type="text" placeholder='Search your desired location here' style={{textAlign:'center'}}/>
                </div>
                <button className='submit-button overlay-subtext'>Search</button>
            </div>
            <div className='input-group'>
                <h1 className='overlay-subtext' style={{fontSize:'30px'}}>Are you a buyer? <a href='/'>Click here if you are looking to post a requirements</a></h1>
            </div>
        </div>
        <Signup />
        <FindSuppliers />
        <Suppliers/>
        <FindServiceTags />
        <Footer />
        </div>
    );
}
