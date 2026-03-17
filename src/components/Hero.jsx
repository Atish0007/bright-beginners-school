
import "../assets/css/hero.css";

function Hero() {



    const handleWhatsApp = () => {
        const phoneNumber = "918208025622";

        const message = `Hello,\nShree Swami Samarth Educational Foundation \nBright Beginners Pre-Primary School! \n
I would like to know more about admissions, programs, and activities for my child.`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    }


    return (
        <>

            {/* HERO */}

            <section id="home" className="hero d-flex align-items-end align-items-md-center">

                <div className="container text-center mt-5">
                    <div className="heroDiv">
                        <h1>Welcome to Shree Swami Samarth Educational Foundation Bright Beginners Pre-Primary School</h1>

                        <p className="mb-1">
                            Bright Beginners Pre Primary School is a caring and joyful place where young children begin their learning journey.
                            Our school focuses on the overall development of every child through fun learning activities and creative programs.
                        </p>

                        <p className="tagline mt-0 mb-0">Learning Today, Leading Tomorrow.</p>
                    </div>
                    <button className="admissionBtn" onClick={handleWhatsApp}>Admissions Open</button>

                </div>

            </section>

        </>
    )
}

export default Hero;