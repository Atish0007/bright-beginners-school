import { useState } from "react";
import "../assets/css/popup.css";

function AdmissionPopup(){

const [show,setShow]=useState(false);

return(

<>

<button className="admissionBtn" onClick={()=>setShow(true)}>
Apply for Admission
</button>

{show && (

<div className="popupOverlay">

<div className="popupBox">

<h3>Admission Form</h3>

<input placeholder="Parent Name"/>
<input placeholder="Phone Number"/>
<input placeholder="Child Age"/>

<button className="submitBtn">Submit</button>

<button className="closeBtn" onClick={()=>setShow(false)}>X</button>

</div>

</div>

)}

</>

)

}

export default AdmissionPopup