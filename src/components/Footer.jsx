import { useState, useEffect } from "react";
import "../assets/css/footer.css";
import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import logo from "../assets/images/logo.png";

function Footer() {

    const [open, setOpen] = useState(false);

    const phoneNumber = "919876543210"; // replace with your WhatsApp number

    const message = `Hello Bright Beginners Pre Primary School! 
I would like to know more about admissions, programs, and activities for my child.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


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

            {/* FLOATING WHATSAPP */}

            {/* <a
                href={whatsappUrl}
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp />
            </a> */}


            {/* WAVE */}

            <div className="footerWave">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
                    <path
                        fill="#1e3c72"
                        d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,74.7C840,75,960,117,1080,122.7C1200,128,1320,96,1380,80L1440,64L1440,320L0,320Z"
                    ></path>
                </svg>
            </div>


            {/* FOOTER */}

            <footer className="footer">

                <div className="container footerGrid">

                    {/* SCHOOL INFO */}

                    <div className="footerCol">

                        <h3 className="footerLogo">
                            <img src={logo} alt="Bright Beginners Logo" /> <span className="ms-2">Bright Beginners</span>
                        </h3>

                        <p className="fw-500">
                            A joyful learning place where children explore, create and grow
                            with love and care.
                        </p>

                        <div className="footerSocial">

                            <a href="https://www.facebook.com/people/Bright-Beginners-Pre-Primary-School/100068507050115/" target="_blank"><FaFacebook /></a>
                            <a href="https://www.instagram.com/bright_beginners_school?igsh=dXlpd2Y5bGVxc3Zo" target="_blank"><FaInstagram /></a>

                        </div>

                    </div>


                    {/* QUICK LINKS */}

                    <div className="footerCol">

                        <h4>Quick Links</h4>

                        <ul className="footerLinks">

                            <li><a onClick={() => scrollToSection("home")}>Home</a></li>
                            <li><a onClick={() => scrollToSection("about")}>About</a></li>
                            <li><a onClick={() => scrollToSection("facilities")}>Facilities</a></li>
                            <li><a onClick={() => scrollToSection("nursery")}>Nursery</a></li>
                            <li><a onClick={() => scrollToSection("activities")}>Activities</a></li>
                            <li><a onClick={() => scrollToSection("admission")}>Admission</a></li>

                        </ul>

                    </div>


                    {/* CONTACT */}

                    <div className="footerCol">

                        <h4>Contact</h4>

                        <p>
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Bright+Beginners+Pre-primary+School+Pune"
                                target="_blank"
                                className="mapHref fw-500"
                            >
                            <FaMapMarkerAlt /> Shree Swami Samarth Educational Foundation Bright Beginners Pre Primary School 
Flat No. 102, A Wing, Atharva Plaza, post Uttamnagar NDA Road kondhave-Dhawade, Pune- 411023</a></p>
                        
                        <p> <a href="tel:8208025622" className="text-decoration-none d-flex align-items-center gap-3 text-white link-warning fw-500"> <FaPhoneAlt className="text-primary fs-6 wht-shadow" /> +91 8208025622</a></p>

                    </div>


                    {/* GOOGLE MAP */}

                    <div className="footerCol map">

                        <h4>Find Us</h4>
                        <div className="school-map">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1534868.4058046667!2d73.883966!3d18.075245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295c60bfc8a61%3A0xd3249ea700fef8d6!2sBright%20Beginners%20Pre-primary%20School!5e1!3m2!1sen!2sus!4v1773683265295!5m2!1sen!2sus"
                                width="100%"
                                height="450"
                                style={{ border: "0" }}
                                loading="lazy"
                                title="Shree Swami Samarth Educational Foundation Bright Beginners Pre Primary School"
                            ></iframe>



                        </div>

                    </div>

                </div>


                {/* COPYRIGHT */}

                <div className="footerBottom">

                 <p className="fw-normal mb-0">© {new Date().getFullYear()} Bright Beginners Pre Primary School. All Rights Reserved.</p>

                </div>

            </footer>

        </>
    );
}

export default Footer;