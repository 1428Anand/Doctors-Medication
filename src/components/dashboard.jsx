import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () =>{
    const navigate = useNavigate();
    const id = localStorage.getItem('id');
    const [name, setname] = useState('');
    const [specialist, setspecialist] = useState('');
    const [drimage, setDrimage] = useState('');
    const [totalpatient, setTotalpatient] = useState('');
    const [qualification, setqualification] = useState('');
    const [imagePath, setImagepath] =useState('http://localhost:4000/');
    useEffect(()=>{
        getdoctor();
        getNumberofpatient();
    },[])
    const getNumberofpatient=()=>{
        axios.get('http://localhost:4000/plist/totalpatient/'+id).then((response)=>{
            setTotalpatient(response.data.message[0]["count(docid)"])
        })
    }
    const getdoctor=()=>{
        axios.get('http://localhost:4000/dlist/singledrlist/'+id).then((response)=>{
            setname(response.data.message[0].name);
            setspecialist(response.data.message[0].specialist);
            setqualification(response.data.message[0].qualification)
            let remimg = response.data.message[0].images;
            let result = remimg.substr(remimg.indexOf('c')+2);
            setDrimage(result)
            

        })
    }
    return(
        <>
        <div id="dashboard" class="px-5 py-5">
            <div class="row">
                <div class="col-sm-3 pt-5" style={{textAlign: "center"}}>
                {drimage &&
                <img class="rounded-pill" src={imagePath+drimage} width="75%" />
                }
                {!drimage &&
                <img class="rounded-pill" src="doc_logo.jpg" width="75%"/>
                }
                        <br/><br/><h4>{name} ({qualification})</h4>
                        <p>({specialist})<br/></p>
                </div>
                <div class="col-sm-8 firstcarddiv px-5 py-5">
                <input type="button" value="PATIENT PRESCRIPTION" class="dashbtn h4 text-decoration-underline" style={{marginRight: "100px"}} onClick={()=>{navigate("/prescription")}}/>
                    <div class="row">
                  <div class="card firstcard" onClick={()=>{navigate('/patientlist')}} style={{cursor: "pointer"}}>
                        <h4>Total Patient</h4>
                        <p>{totalpatient}</p>
                  </div>
                  <div class="card firstcard ms-5">
                        <h4>Today's Follow-ups</h4>
                        <p>20</p>
                  </div></div>
                  <div class="row">
                  <div class="card firstcard">
                        <h4>Total Revenue</h4>
                        <p>₹{totalpatient*1800}</p>
                  </div>
                  <div class="card firstcard ms-5">
                        <h4>Reviews</h4>
                        <p>40+</p>
                    </div></div>
                </div>
            </div>
        </div>
        </>
    )
};
export default Dashboard;