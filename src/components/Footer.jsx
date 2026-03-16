import { useState, useEffect } from "react";
import "../assets/css/footer.css";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
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

                        <p>
                            A joyful learning place where children explore, create and grow
                            with love and care.
                        </p>

                        <div className="footerSocial">

                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>

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

                        <p><FaMapMarkerAlt /> Pune Maharashtra</p>
                        <p><FaPhoneAlt /> +91 8208025622</p>

                    </div>


                    {/* GOOGLE MAP */}

                    <div className="footerCol map">

                        <h4>Find Us</h4>
                        <div className="school-map">
                            <iframe
                                title="Bright Beginners Pre-Primary School"
                                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d95718.61019873558!2d73.7693758!3d18.4568772!3m2!1i1024!2i768!4f13.1!2m1!1sbright%20beginners!5e1!3m2!1sen!2sin!4v1773633923820!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                    </div>

                </div>


                {/* COPYRIGHT */}

                <div className="footerBottom">

                    © {new Date().getFullYear()} Bright Beginners Pre Primary School

                </div>

            </footer>

        </>
    );
}

export default Footer;