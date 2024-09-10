import React, { useState, useEffect } from 'react';
import './nav.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from '../assets/logo.png';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from '../slices/authApiSlice';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

function NavBar({ currentPage }) {
    const { userInfo } = useSelector(state => state.auth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const verified = localStorage.getItem('verified');

    const [logoutCall] = useLogoutMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
          await logoutCall().unwrap();
          dispatch(logout());
          localStorage.removeItem('verified');
          navigate('/')
        }catch(err) {
          console.log(err)
        }
    }

    useEffect(() => {

    }, [userInfo]);
    console.log(userInfo);
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const handleScroll = () => {
        if (window.scrollY > 70) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`mainNav ${scrolled ? 'scrolled' : ''}`}>
                <div className='navLogo'>
                    <Link to='/home'>
                        <img src={Logo} alt='Logo' />
                    </Link>
                </div>
                <div id="linkswrapper" className={isMenuOpen ? "linkswrapper active" : "linkswrapper"}>
                    <div id='navLinks'>
                        <ul >
                            <li><Link to="/home" className={currentPage === "home" ? "active" : ""}>Home</Link></li>
                            <li><Link to="/about" className={currentPage === "about" ? "active" : ""}>About Us</Link></li>
                            <li><Link to="/legal" className={currentPage === "legal" ? "active" : ""}>Legal Issues</Link></li>
                            <li><Link to="/apply1" className={currentPage === "apply1" ? "active" : ""}>Apply for legal aid</Link></li>
                            <li><Link to="/track" className={currentPage === "track" ? "active" : ""}>Track Application</Link></li>
                        </ul>
                    </div>
                    {userInfo && userInfo.user.authorities[0].authority === "User" && verified? (
                        <div className='navBtns'>
                            <Link onClick={handleLogout} className='logoutLink'>
                                <div className="nav-btn">
                                    Logout
                                </div>
                            </Link>
                        </div>
                    ): (
                        <div className='navBtns'>
                            <Link to="/login" className='logoutLink'>
                                <div className="nav-btn nav-btn1">
                                    Login
                                </div>
                            </Link>
                            <Link to="/signup" className='logoutLink'>
                                <div className="nav-btn">
                                    Sign Up
                                </div>
                            </Link>
                        </div>
                    )}
                    
                </div>

                {/* mobile */}
                <div className="mobileView" onClick={toggleMenu}>
                    {isMenuOpen ? <IoClose className='hamburger' /> : <RxHamburgerMenu className='hamburger' />}
                </div>
            </nav>
        </>
    );
}

export default NavBar;
