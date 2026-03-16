import "../assets/css/activities.css";

import chef from "../assets/images/activities/chef.png";
import fancydress from "../assets/images/activities/fancydress.png";
import exhibition from "../assets/images/activities/exhibition.png";
import sports from "../assets/images/activities/sports.png";

function Activities() {

    const activities = [
        {
            title: "Master Chef Activity",
            text: "Students prepare healthy food items without fire. This activity helps children learn about healthy eating and develop creativity.",
            img: chef
        },

        {
            title: "Fancy Dress Competition",
            text: "Children dress as different characters and speak about them. It builds confidence and stage presence.",
            img: fancydress
        },

        {
            title: "Exhibition",
            text: "Students present models and projects. It improves speaking skills and encourages learning by demonstration.",
            img: exhibition
        },

        {
            title: "Sports and Games",
            text: "Outdoor sports keep children active and help develop teamwork and discipline.",
            img: sports
        }
    ];

    return (
        <>
            {/* ACTIVITIES */}

            <section id="activities" className="activitiesSection py-4 py-md-5 ps-4 ps-md-0 pe-4 pe-md-0">

                <div className="container">

                    <h2 className="sectionTitle text-center">School Activities</h2>

                    <p className="sectionSubTitle text-center">
                        Fun learning experiences that help children grow with confidence and creativity.
                    </p>

                    <div className="row mt-3 mt-md-5">

                        {activities.map((item, index) => (

                            <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={index}>

                                <div className="activityCard">

                                    <div className="activityImageWrapper">
                                        <img src={item.img} alt={item.title} />
                                    </div>

                                    <div className="activityContent">

                                        <h5>{item.title}</h5>

                                        <p>{item.text}</p>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
        </>
    )
}

export default Activities;