import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Prescription= ()=>{
    const navigate = useNavigate();
    const [username, setusername] = useState('');
    const [gender, setgender] = useState('');
    const [age, setage] = useState('');
    const [mobile, setmobile] = useState('');
    const [disease, setdisease] = useState('');
    const [currentstatus, setcurrentstatus] = useState('');
    const usernamehandler=(event)=>{
        setusername(event.target.value)
    }
    const genderhandler=(event)=>{
        setgender(event.target.value)
    }
    const agehandler=(event)=>{
        setage(event.target.value)
    }
    const mobilehandler=(event)=>{
        setmobile(event.target.value)
    }
    const diseasehandler=(event)=>{
        setdisease(event.target.value)
    }
    const statushandler=(event)=>{
        setcurrentstatus(event.target.value)
    }
    const submithandler=(event)=>{
        event.preventDefault();
        const docid = localStorage.getItem('id');
        const doctorname = localStorage.getItem('name');
            let formdata = {docid:docid, doctorname:doctorname, name:username, gender:gender, age:age, mobile:mobile, disease:disease, status:currentstatus};
        if(username === ''){
            alert("Enter Patient Name")
        }else if(gender === ''){
            alert("Select Gender")
        }else if(mobile === ''){
            alert("Mobile Cannot be blank")
        }else if(mobile.length !== 10){
            alert("Enter valid number")
        }else if(age === ''){
            alert("Age cannot be blank")
        }else if(disease === ''){
            alert("Enter the symptoms")
        }else if(currentstatus === ''){
            alert("Enter prescription")
        }else{
            return axios.post("http://localhost:4000/plist/pregistration",formdata).then((response)=>{
               navigate('/patientlist'); 
            })
        }
    }
    return(
        <>
        <div id="prescription">
            <form>
                <h3 class="text-primary">Patient Prescription</h3>
                {/* Date <input type="date" style={{color: "blue"}} value={date} onChange={datehandler}/><br/> */}
                <input type="text" class="form-input" style={{width: "55%"}} placeholder="enter patient name" value={username} onChange={usernamehandler}/>
                <select  value={gender} style={{width: "40%", fontSize: "70%"}}  class="form-input pb-2 ms-2" onChange={genderhandler}>
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>other</option>
                </select><br/>
                <input type="text" class="form-input" style={{width: "55%"}} placeholder="enter mobile number" value={mobile} onChange={mobilehandler}/>
                <input type="text" class="form-input ms-2" style={{width: "40%"}} placeholder="age of patient" value={age} onChange={agehandler}/><br/>
                
                {/* Email <input type="email" placeholder="enter your email" value={email} onChange={emailhandler}/><br/> */}
                <textarea class="form-input" style={{width: "96%"}} placeholder="symptoms" value={disease} onChange={diseasehandler}/><br/>
                <textarea class="form-input" style={{width: "96%"}} placeholder="prescription" value={currentstatus} onChange={statushandler}/><br/><br/>
                {/* Prescription<span style={{fontSize: "13px"}}><input type="file" onChange={presimage}/></span> */}
                {/* {prescription && <img src={prescription.preview} width="100px" height="100px"/>}<br/><br/> */}
                <input type="button" class="btn btn-outline-primary" value="SUBMIT" onClick={submithandler}/>
            </form>
        </div>
        </>
    )
}
export default Prescription;