import { useState } from "react";
import "../assets/css/admissions.css";



const programs = [
    {
        title: "Play Group",
        age: "Age: 2.5 – 3 Years",
        text: "Fun filled learning through play activities, music, rhymes and interactive games that help children explore the world around them.",
        icon: "https://cdn-icons-png.flaticon.com/512/2436/2436636.png"
    },
    {
        title: "Nursery",
        age: "Age: 3 – 4 Years",
        text: "Our nursery program focuses on communication skills, creativity and social interaction through storytelling and play based learning.",
        icon: "https://cdn-icons-png.flaticon.com/512/2436/2436874.png"
    },
    {
        title: "LKG",
        age: "Age: 4 – 5 Years",
        text: "Children begin structured learning including alphabets, numbers, basic writing and creative thinking activities.",
        icon: "https://cdn-icons-png.flaticon.com/512/2995/2995620.png"
    },
    {
        title: "UKG",
        age: "Age: 5 – 6 Years",
        text: "Preparation for primary school with reading, writing, math concepts, confidence building and interactive classroom learning.",
        icon: "https://cdn-icons-png.flaticon.com/512/2784/2784403.png"
    }
];


function Admissions() {

    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        parent: "",
        phone: "",
        age: ""
    });

    const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    // remove error when user starts typing correct value
    setErrors((prev) => {
        const newErrors = { ...prev };

        if (name === "parent" && value.trim() !== "") {
            delete newErrors.parent;
        }

        if (name === "phone" && /^[6-9]\d{9}$/.test(value)) {
            delete newErrors.phone;
        }

        if (name === "age" && value.trim() !== "") {
            delete newErrors.age;
        }

        return newErrors;
    });
};

    const sendWhatsApp = () => {

        if (!validate()) return;

        const message = `
 *New Admission Enquiry*

 Parent Name: ${form.parent}
 Phone: ${form.phone}
 Child Age: ${form.age}
`;

        const url = `https://wa.me/918208025622?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };

    
const validate = () => {

    let newErrors = {};

    if (!form.parent.trim()) {
        newErrors.parent = "Parent name is required";
    }

    if (!form.phone.trim()) {
        newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
        newErrors.phone = "Enter valid 10 digit number";
    }

    if (!form.age.trim()) {
        newErrors.age = "Child age is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
};


    return (
        <>
            <section id="admission" className="programSection admissionSection py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">

                <div className="container admissionOverlay">

                    <div className="text-center programHeader">

                        {/* <h2 className="programTitle">
                            Our Learning Programs
                        </h2>

                        <p className="programSubTitle">
                            Bright Beginners offers engaging preschool programs designed to build creativity, confidence and curiosity in every child.
                        </p> */}

                    </div>

                    <div className="row mt-5">

                        {programs.map((item, index) => (

                            <div className="col-lg-3 col-md-6 mb-4" key={index}>

                                <div className="programCard">

                                    <div className="programIcon">
                                        <img src={item.icon} alt={item.title} />
                                    </div>

                                    <h4>{item.title}</h4>

                                    <span className="programAge">
                                        {item.age}
                                    </span>

                                    <p>
                                        {item.text}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* ONE BUTTON */}

                    <div className="text-center programCTA">

                        <button className="applyAdmissionBtn" onClick={() => setShow(true)}>
                            Apply for Admission
                        </button>

                    </div>

                </div>

            </section>


            {/* POPUP */}

            {show && (

                <div className="popupOverlay">

                    <div className="popupBox">

                        <button
                            className="closeBtn"
                            onClick={() => setShow(false)}
                        >
                            ✕
                        </button>

                        <h3>Admission Enquiry</h3>

                        <p className="popupSub">
                            Fill the details and our team will contact you soon.
                        </p>

                        <input
                            name="parent"
                            placeholder="Parent Name"
                            onChange={handleChange}
                        />
                        {errors.parent && <small className="error">{errors.parent}</small>}

                        <input
                            name="phone"
                            placeholder="Phone Number"
                            onChange={handleChange}
                        />
                        {errors.phone && <small className="error">{errors.phone}</small>}

                        <input
                            name="age"
                            placeholder="Child Age"
                            onChange={handleChange}
                        />
                        {errors.age && <small className="error">{errors.age}</small>}

                        <button
                            className="submitBtn"
                            onClick={sendWhatsApp}
                        >
                            Send on WhatsApp
                        </button>

                    </div>

                </div>

            )}


        </>
    )
}

export default Admissions;