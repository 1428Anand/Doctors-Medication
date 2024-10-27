import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Plist=()=>{
    const navigate = useNavigate();
    const [patientdata, getpatientdata] = useState('');
    useEffect(()=>{
        getpatientlist();
    });
    const getpatientlist=()=>{
        const docid = localStorage.getItem('id')
        return axios.get('http://localhost:4000/plist/plist/'+docid).then((response)=>{
            getpatientdata(response.data.message)
        })
    }
    return(
        <> 
        <div id="patientlist" class="px-4 py-5" style={{backgroundColor: "#96ecfa", fontFamily: "cursive"}}>
            <h2 style={{marginLeft: "42%"}}>Patient List</h2>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Mobile</th>
                    <th>Symptoms</th>
                    <th>Treatment</th>
                </thead>
                {patientdata && patientdata.map((user)=>
                <tbody>
                    <tr>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td><a onClick={()=>{navigate('/profile')}}>{user.mobile}</a></td>
                    <td>{user.disease}</td>
                    <td>{user.status}</td>
                    </tr>
                </tbody>
                )}
            </table>
        </div>
        </>
    )
};
export default Plist;