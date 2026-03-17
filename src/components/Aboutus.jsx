
import "../assets/css/about.css";
import aboutus from "../assets/images/aboutus.png";

function Aboutus() {
    return (
        <>
            {/* ABOUT */}

            <section id="about" className="section py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0 mt-3">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-6">

                            <img
                                src={aboutus}
                                className="aboutImg"
                            />

                        </div>

                        <div className="col-lg-6 mt-4 mt-md-4 mt-lg-0">

                            {/* <h2 className="text-center">About Us</h2>  fst-italic */}

                            <p className="fw-500 text-md-justify mb-0 mb-md-3">
                                Shree swami samarth educational foundation bright beginners pre-primary school is dedicated to providing quality early childhood education.
                                Our aim is to build a strong foundation for children during their most important learning years.
                            </p>
                            <p className="fw-500 text-normal text-md-justify mb-0 mb-md-3">
                                We focus on developing children's social, emotional, physical, and intellectual skills through activity-based learning.
                                Our classrooms create a friendly atmosphere where children feel happy and safe.
                            </p>
                            <p className="fw-500 text-normal text-md-justify">Our experienced teachers encourage curiosity, creativity, and confidence in every child. We also work closely with parents to support the growth and development of students.</p>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Aboutus;