
import "../assets/css/facilities.css";

import {
  FaSchool,
  FaPuzzlePiece,
  FaChild,
  FaPaintBrush,
  FaBookOpen,
  FaFutbol,
  FaBirthdayCake,
  FaUsers
} from "react-icons/fa";

import facilityImg from "../assets/images/facilities.png";



function Facilities() {
    return (
        <>
            {/* FACILITIES */}

            <section id="facilities" className="facilitySection py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">

                <div className="container text-center">

                    {/* <h2 className="sectionTitle">Our Facilities</h2> */}

                    {/* ROW 1 IMAGE */}

                    <div className="row justify-content-center mt-0">

                        <div className="col-lg-8">

                            <img
                                src={facilityImg}
                                alt="Bright Beginners Facilities"
                                className="facilityMainImage"
                            />

                        </div>

                    </div>

                    {/* ROW 2 FACILITY CARDS */}

                    <div className="row mt-0 mt-md-5 g-3 g-md-4">

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="facilityCard">
                                <FaSchool className="facilityIcon kidsIcon" />
                                <p>Safe & Clean Classrooms</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="facilityCard">
                                <FaPuzzlePiece className="facilityIcon kidsIcon" />
                                <p>Educational Toys</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="facilityCard">
                                <FaChild className="facilityIcon kidsIcon" />
                                <p>Activity Based Learning</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="facilityCard">
                                <FaPaintBrush className="facilityIcon kidsIcon" />
                                <p>Art & Craft</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="facilityCard">
                                <FaBookOpen className="facilityIcon kidsIcon" />
                                <p>Storytelling & Rhymes</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="facilityCard">
                                <FaFutbol className="facilityIcon kidsIcon" />
                                <p>Outdoor Play Area</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="facilityCard">
                                <FaBirthdayCake className="facilityIcon kidsIcon" />
                                <p>Festival Celebrations</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="facilityCard">
                                <FaUsers className="facilityIcon kidsIcon" />
                                <p>Parent Teacher Meetings</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Facilities;