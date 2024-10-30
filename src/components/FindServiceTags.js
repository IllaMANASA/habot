import './FindServiceTags.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

export default function FindServiceTags() {
    return (
        <div className="container">
            <h1>How it works?</h1>
            <p className="description">
                Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
            </p>

            <div className="row">
                <div className="box box1">
                    <img src={image1} alt="Profile" />
                    <p>Select Your Role and Sign Up</p>
                </div>
                <div className="box box2">
                    <img src={image2} alt="Profile" />
                    <p>Buyers Post Your Requirements</p>
                </div>
                <div className="box box3">
                    <img src={image3} alt="Profile" />
                    <p>Review, Select, and Contact the Best Suppliers</p>
                </div>
            </div>

            <div className="row">
                <div className="box box4">
                    <img src={image4} alt="Profile" />
                    <p>Suppliers Complete Your Profile and Get Notified for Opportunities</p>
                </div>
                <div className="box box5">
                    <img src={image5} alt="Profile" />
                    <p>Contact Buyers and Share Your Quote for the Service</p>
                </div>
                <div className="box box6">
                    <img src={image6} alt="Profile" />
                    <p>Both Parties Connect and Leave Feedback</p>
                </div>
            </div>
        </div>
    );
}
