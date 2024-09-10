import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../components/Nav';
import "./css/about.css"
import Banner from "../assets/aboutus-banner.png"
import Motto from "../assets/about-group.png"
import Inauguration from "../assets/Inauguration.png"
import Footer from '../components/Footer';

function About() {
    const [isSticky, setIsSticky] = useState(true);
    const [yearsCount, setYearsCount] = useState(0);
    const [casesCount, setCasesCount] = useState(0);
    const [inauguralImages] = useState([Inauguration, Banner,Motto]);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const statsRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current && imageRef.current) {
                const { bottom } = textRef.current.getBoundingClientRect();
                const { height } = imageRef.current.getBoundingClientRect();
                setIsSticky(bottom > height);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateCounter(2, setYearsCount, 1000);
                    animateCounter(100, setCasesCount, 2000);
                    observer.unobserve(entries[0].target);
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    const animateCounter = (end, setter, duration) => {
        let start = 0;
        const increment = end / (duration / 16); 

        const timer = setInterval(() => {
            start += increment;
            setter(Math.floor(start));

            if (start >= end) {
                clearInterval(timer);
                setter(end);
            }
        }, 16);
    };

    const handleImageChange = () => {
        if (textRef.current && imageRef.current) {
            const { top, height } = textRef.current.getBoundingClientRect();
            const scrollProgress = (window.innerHeight - top) / (height*1.2);
            const imageIndex = Math.min(
                Math.floor(scrollProgress * inauguralImages.length),
                inauguralImages.length - 1
            );
            setCurrentImageIndex(Math.max(0, imageIndex));
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current && imageRef.current) {
                const { bottom } = textRef.current.getBoundingClientRect();
                const { height } = imageRef.current.getBoundingClientRect();
                setIsSticky(bottom > height);
            }
            handleImageChange();
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <NavBar currentPage="about" />
            <div className="about-banner-wrapper">
                <div className="about-banner">
                    <div className="about-img-wrapper">
                        <img src={Banner} alt="" />
                    </div>
                </div>
                <div className="about-des">
                    <p>THE MOST PROMINENT  AND IMPACTFUL LAW FIRM IN BHUTAN </p>
                    <p>DEDICATED TO SOCIAL JUSTICE.</p>
                </div>
            </div>

            <div className="about-motto">
                <img src={Motto} alt="" />
                <p>“The Legal Aid Society operates on a straightforward yet compelling principle: every
                    individual deserves the right to equal justice.”</p>
            </div>
            <div className="whitespace"></div>
            <div className="Inauguration-wrapper">
                <p className='Inauguration-title'>Our Journey Through Time</p>
                <div className="Inauguration-container">
                    <div className={`Inauguration-image ${isSticky ? 'sticky' : ''}`} ref={imageRef}>
                        <img src={inauguralImages[currentImageIndex]} alt="Inauguration image" />
                    </div>
                    <div className="Inauguration-text" ref={textRef}>
                        <p>The Bhutan Legal Aid Center was established on October 19, 2022, following a Royal Command. The
                            inauguration ceremony was graced by the President of BNLI, Her Royal Highness Princess Sonam Dechan Wangchuck,
                            and Chief Justice Chogyal Dago Rigdzin. During the ceremony, the Legal Aid Inception Document and the Legal Aid
                            Rules 2022 were also launched.
                        </p>
                        <p>The Center aims to strengthen the rule of law and the justice system by ensuring that all people have access to
                            the courts and the legal process, as enshrined in Article 9.6 of the Constitution. Legal aid is particularly
                            crucial for indigent individuals, enabling them to access fair and full justice.
                        </p>
                        <p>Legal Aid is available exclusively to indigent persons, defined as individuals who cannot afford basic necessities
                            such as food, clothing, and decent shelter, or those without sufficient means to hire a lawyer. Children in conflict
                            with the law (CICL) and persons with permanent physical, mental, or social disabilities are also eligible for legal
                            advice and assistance, regardless of their financial capacity, if the interest of justice so requires.
                        </p>
                        <p>To qualify for legal aid, applicants must pass both a means test and a merits test. The means test assesses an
                            applicant's financial capacity by examining income and disposable capital, with eligibility determined based on the per
                            capita poverty line set by the National Statistics Bureau of Bhutan (NSB). The merits test evaluates whether the applicant
                            has reasonable grounds to bring or defend a case in court, ensuring that only cases with reasonable prospects of success receive legal aid.</p>
                    </div>
                </div>
            </div>
            <div className="whitespace"></div>
            <div className="statistics" ref={statsRef}>
                <div className="stats-des">
                    <p>Track Record</p>
                    <p>Legal Aid Center has provided legal assistance to countless clients, ensuring that justice remains accessible to all.
                        We have successfully managed and resolved numerous cases, reflecting our commitment to upholding the rule of law.
                        These accomplishments underscore our unwavering dedication to safeguarding the rights and well-being of our citizens.</p>
                </div>
                <div className="stats-num">
                    <div className="stats1">
                        <p>
                            {yearsCount} <span>+</span>
                        </p>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <div className="stats2">
                        <p>
                            {casesCount} <span>+</span>
                        </p>
                        <p>CASES HELPED</p>
                    </div>
                </div>
            </div>
            <div className="whitespace"></div>
            <Footer />
        </>
    )

}

export default About;