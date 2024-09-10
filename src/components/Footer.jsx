import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.css"

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-black-space"></div>
            <div className="footer-box">
                <p className='box-title'>Apply For Legal Aid</p>
                <Link to="/signup" className='logoutLink'>
                    <div className="footer-btn">
                        <div className="footer-line"></div>
                        <p>
                            Get Help
                        </p>
                    </div>
                </Link>
            </div>

            <div id='footer-navLinks'>
                <ul >
                    <li><Link to="/home" >Home</Link></li>
                    <li><Link to="/about" >About Us</Link></li>
                    <li><Link to="/legal" >Legal Issues</Link></li>
                    <li><Link to="/eligibility">Eligibility</Link></li>
                </ul>
            </div>

            <div className="copyright">
                <p>&copy; 2024 Bhutan Legal Aid Center</p>
            </div>
         
        </div>
        
    )
}

export default Footer