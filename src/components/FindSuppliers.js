import React, { useState } from 'react';
import './FindSuppliers.css';
import requirementImg from '../assets/req-img.jpeg';

export default function FindSuppliers() {
    const [activeTab, setActiveTab] = useState('buyers'); 

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="findsuppliers-container">
            <div className="leftSection">
                <img src={requirementImg} alt="Left Section" className="left-image" />
            </div>
            <div className="rightrSection">
                <div className="tab-buttons">
                    <button
                        className={`tab-button ${activeTab === 'buyers' ? 'active' : ''}`}
                        onClick={() => handleTabClick('buyers')}
                    >
                        <h2>Buyers</h2>
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'suppliers' ? 'active' : ''}`}
                        onClick={() => handleTabClick('suppliers')}
                    >
                        <h2>Supplier</h2>
                    </button>
                </div>
                <div className="content">
                    {activeTab === 'buyers' ? (
                        <div>
                            <p> <i class="fa fa-check-circle" style={{ fontSize: '24px', color: 'green' }} aria-hidden="true"></i> Post your requirements.</p>
                            <p> <i class="fa fa-check-circle" style={{ fontSize: '24px', color: 'green' }} aria-hidden="true"></i> Sit back for multiple suppliers to contact you.</p>
                            <p><i class="fa fa-check-circle" style={{ fontSize: '24px', color: 'green' }} aria-hidden="true"></i> Choose among the suppliers based on the ratings and reviews.</p>
                        </div>
                    ) : (
                        <div>
                            <p><i class="fa fa-check-circle" style={{ fontSize: '24px', color: 'green' }} aria-hidden="true"></i> Become a Supplier</p>
                            <p><i class="fa fa-check-circle" style={{ fontSize: '24px', color: 'green' }} aria-hidden="true"></i> Connect with potential buyers and grow your business.</p>
                            <p><i class="fa fa-check-circle" style={{ fontSize: '24px', color: 'green' }} aria-hidden="true"></i> Showcase your offerings and reach a larger audience.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
