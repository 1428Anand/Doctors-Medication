import axios from "axios";
import { useEffect, useState } from "react";

const Pprofile = ()=>{
    const mobile = localStorage.getItem('mobile');
    const [name, setname] = useState('');
    const [singlepatient, getsinglepatient] = useState('');
    useEffect(()=>{
        getuser();
    })
    const getuser=()=>{
        axios.get('http://localhost:4000/plist/singleplist/'+mobile).then((response)=>{
            getsinglepatient(response.data.message);
            setname(response.data.message[0].name)
        })
    }
    return(
        <>
        <div id='profile' class="px-3">
        <p class="patient-d">PATIENT DETAILS</p>
            <div class="row">
                <div class="col-sm-3 pt-3 ms-4 profilediv">
                    <h4>Hello! <span class="text-info">{name}</span></h4><br/><br/>
                    <p>Contact Number: <span class="text-info">{mobile}</span></p><br/>
                    <img class="rounded-pill" src="getwell.jpg" alt="img" width="100%"/>
                </div>
                <div class="col-sm-8 pt-4 profilediv">
                    <table id="patienttable">
                        <thead>
                            <th>Date</th>
                            <th>Disease</th>
                            <th>Medication</th>
                            <th>Concern Doctor</th>
                        </thead>
                        {singlepatient && singlepatient.map((user)=>
                        <tbody>
                            <td>{user.date}</td>
                            <td>{user.disease}</td>
                            <td>{user.status}</td>
                            <td>{user.doctorname}</td>
                        </tbody>
                        )}
                    </table>
                    
                </div>
                {/* <div class="col-sm-2 pt-3 profilediv">
                    <h4>Treatment Started:<br/> </h4><span class="text-info">{date}</span><br/><br/>
                    <p>Medicines Prescribed:<br/> <span class="text-info">{status}</span></p>
                </div> */}
            </div>
        </div>
        </>
    )
}
export default Pprofile;