import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dlist=()=>{
    const navigate = useNavigate();
    const [docdata, getdocdata] = useState('');
    useEffect(()=>{
        getdoctorlist();
    })
    const getdoctorlist=()=>{
        return axios.get('http://localhost:4000/dlist/doclist').then((response)=>{
            getdocdata(response.data.message)
        })
    }
    return(
        <>
        <div class="p-5" style={{backgroundColor: "aqua", color: "blue"}}>
            <h2 style={{marginLeft: "42%"}}>Doctors List</h2>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Mobile</th>
                    <th>Specialist</th>
                    <th>Experience</th>
                </thead>
                {docdata && docdata.map((user)=>
                <tbody>
                    <tr>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>{user.mobile}</td>
                    <td>{user.specialist}</td>
                    <td>{user.experience}</td>
                    </tr>
                </tbody>
                )}
            </table>
        </div>
        </>
    )
}
export default Dlist;