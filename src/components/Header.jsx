import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../assets/css/header.css";
import logo from "../assets/images/logo.png";

function Header() {
    const [open, setOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [hideSticky, setHideSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // first time crossing 300px
            if (currentScroll > 300 && !hasTriggered) {
                setIsSticky(true);
                setHideSticky(false);
                setHasTriggered(true);
            }

            // after sticky active
            if (currentScroll > 300 && hasTriggered) {
                if (currentScroll > lastScrollY) {
                    setHideSticky(false); // scroll down
                } else {
                    setHideSticky(true); // scroll up
                }
            }

            // reset when going back up
            if (currentScroll <= 300) {
                setIsSticky(false);
                setHideSticky(false);
                setHasTriggered(false);
            }

            setLastScrollY(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, hasTriggered]);

    
    // Menu Scroll 
    const scrollToSection = (id) => {

        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });

        setOpen(false);

        // close bootstrap menu
        const menu = document.getElementById("navMenu");
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
        }

    };

    return (
        <>
            {/* HEADER */}

            <nav className={`navbar navbar-expand-lg navbar-light header ${isSticky ? "sticky-nav" : ""} ${hideSticky ? "sticky-hide" : ""}`}>

                <div className="container-fluid pxmb-4 px-md-6 px-lg-7">

                    <a className="navbar-brand ms-3 ms-md-0">
                        <img src={logo} alt="Bright Beginners logo" className="logo" /> <span className="whiteShadow text-white ms-3 fs-18">Bright Beginners</span>
                    </a>

                    {/* <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <button
                        className={`navbar-toggler custom-toggler ${open ? "open" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navMenu"
                        onClick={() => setOpen(!open)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navMenu">

                        <ul className="navbar-nav ms-auto mt-2 mt-md-0">

                            <li className="nav-item">
                                <a className="nav-link" onClick={() => scrollToSection("home")}>Home</a>
                                {/* <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link> */}
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" onClick={() => scrollToSection("about")}>About</a>
                                {/* <Link to="about" smooth={true} duration={500} className="nav-link">About</Link> */}
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" onClick={() => scrollToSection("facilities")}>Facilities</a>
                                {/* <Link to="facilities" smooth={true} duration={500} className="nav-link">Facilities</Link> */}
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" onClick={() => scrollToSection("nursery")}>Nursery</a>
                                {/* <Link to="nursery" smooth={true} duration={500} className="nav-link">Nursery</Link> */}
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" onClick={() => scrollToSection("activities")}>Activities</a>
                                {/* <Link to="activities" smooth={true} duration={500} className="nav-link">Activities</Link> */}
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" onClick={() => scrollToSection("admission")}>Admission</a>
                                {/* <Link to="admission" smooth={true} duration={500} className="nav-link">Admission</Link> */}
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>

        </>
    )
}

export default Header;