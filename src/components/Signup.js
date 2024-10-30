import React from 'react';
import './Signup.css'; // Ensure to create this CSS file

export default function Signup() {
    return (
        <div className="signup-container">
            <div className="left-section">
                <h1>Ready to dive into HABOT?</h1>
                <p>
                Signing up with HABOT opens the door to a world of new opportunities
and potential for business growth. Gain access to a vibrant community
of like-minded individuals, unlock valuable resources, and take the first
step towards realizing your entrepreneurial dreams.
                </p>
                <button className='sign-up-button'><h2>Sign up Today!  → </h2></button>
            </div>
            <div className="right-section">
                <div className='button-section'>
                    <div className='button-row'>
                        <button className='button'>Abu Dhabi</button>
                        <button className='button'>Dubai</button>
                    </div>
                    <div className='button-row'>
                        <button className='button'>Sharjah & Ajman</button>
                        <button className='button'>Fujairah</button>
                    </div>
                    <div className='button-row'>
                        <button className='button'>Ras Al Khaimah</button>
                        <button className='button'>Umm Al Quwain</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
