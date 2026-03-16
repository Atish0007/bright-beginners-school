import { useState } from "react";
import "../assets/css/nursery.css";

import one from "../assets/images/kids/one.JPEG";
import two from "../assets/images/kids/two.JPG";
import three from "../assets/images/kids/three.JPEG";
import four from "../assets/images/kids/four.JPG";
import five from "../assets/images/kids/five.JPEG";
import six from "../assets/images/kids/six.JPG";
import seven from "../assets/images/kids/seven.JPEG";
import eight from "../assets/images/kids/eight.JPG";
// import nine from "../assets/images/kids/nine.JPEG";

const galleryImages = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    // nine
];

function Nursery() {

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <section id="nursery" className="gallerySection py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">

                <div className="container">

                    <h2 className="galleryTitle text-center">Nursery</h2>
                    {/* Our School Gallery */}
                    <p className="gallerySubTitle text-center">
                        Explore joyful learning moments, classroom activities, kids events and fun memories from Bright Beginners Pre-Primary School.
                    </p>

                    <div className="row mt-5">

                        {galleryImages.map((img, index) => (

                            <div className="col-lg-3 col-md-4 col-6 mb-4" key={index}>

                                <div
                                    className="galleryCard"
                                    onClick={() => setSelectedImage(img)}
                                >

                                    <img src={img} alt="school gallery" />

                                    <div className="galleryOverlay">
                                        <span>View</span>
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>


                {/* LIGHTBOX */}

                {selectedImage && (

                    <div
                        className="galleryLightbox"
                        onClick={() => setSelectedImage(null)}
                    >

                        <img src={selectedImage} alt="preview" />

                    </div>

                )}

            </section>
        </>
    )
}
export default Nursery;