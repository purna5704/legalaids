import React, { useState } from 'react'
import NavBar from '../components/Nav';
import "./css/apply.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdExpandMore } from "react-icons/md";
import Footer from '../components/Footer';

function Apply2() {
    const location = useLocation();
    const formDataPassed1 = location.state;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        ...formDataPassed1,
        institutionName: '',
        officialName: '',
        officialcNumber: '',
        officialEmail: ''

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, "second appeneded form");
        navigate('/apply3', { state: formData });
    };

    return (
        <>
            <NavBar currentPage="apply1" className="apply-page" />
            <div className="navheight"></div>
            <div className="apply-wrapper">
                <p className='apply-title-main'>Application form for legal aid.</p>
                <p className="apply-sub">We provide accessible, expert legal aid to ensure justice and equality.</p>

                <div className="apply-tab">
                    <Link to="#">Applicant Information and Details</Link>
                    <Link className='mid-tab tab-current' to="#">Institutions facilitating legal aid applications</Link>
                    <Link to="#">Check List of Documents</Link>
                </div>
                <div className="form-wrapper">
                    <form className='apply-form' onSubmit={handleSubmit}>
                        <p className='apply-title'>Public institutions and other relevant institutions, which facilitates the
                            application for legal aid (if any)</p>
                        <div className="category-wrapper">

                            <label className="legal-label">Institution & Dealing Official/Staff Details</label>
                            <div className="legal-form-row legal-form-row-first">
                                <input
                                    className='form-input'
                                    type="text"
                                    name="institutionName"
                                    value={formData.institutionName}
                                    onChange={handleChange}
                                    placeholder='Institution Name'
                                    required
                                />

                                <input
                                    className='form-input'
                                    type="text"
                                    name="officialName"
                                    value={formData.officialName}
                                    onChange={handleChange}
                                    placeholder='Name Of dealing officer'
                                    required
                                />
                            </div>

                            <div className="legal-form-row">

                                <input
                                    className='form-input'
                                    type="number"
                                    name="officialcNumber"
                                    value={formData.officialcNumber}
                                    onChange={handleChange}
                                    placeholder='Contact Number'
                                    required
                                />
                                <input
                                    className='form-input'
                                    type="email"
                                    name="officialEmail"
                                    value={formData.officialEmail}
                                    onChange={handleChange}
                                    placeholder='Email'
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className='banner-cta-wrapper apply-cta-wrapper'>
                            <div className="banner-cta">
                                Proceed
                                <div className="icon-container">
                                    <MdExpandMore className='exapnd-more' />
                                </div>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
            <div className="whitespace"></div>
            <Footer />
        </>
    )
}

export default Apply2;