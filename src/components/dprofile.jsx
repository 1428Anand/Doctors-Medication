import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dprofile = () =>{
    const id = localStorage.getItem('id');
    const navigate = useNavigate();
    const [name, setname] = useState('');
    const [specialist, setspecialist] = useState('');
    const [experience, setExperience] = useState('');
    const [drimage, setDrimage] = useState('');
    const [qualification, setqualification] = useState('');
    const [imagePath, setImagepath] =useState('http://localhost:4000/');
    useEffect(()=>{
        getdoctor();
    },[])
    const getdoctor=()=>{
        axios.get('http://localhost:4000/dlist/singledrlist/'+id).then((response)=>{
            setname(response.data.message[0].name);
            setspecialist(response.data.message[0].specialist);
            setExperience(response.data.message[0].experience);
            setqualification(response.data.message[0].qualification)
            let remimg = response.data.message[0].images;
            let result = remimg.substr(remimg.indexOf('c')+2);
            setDrimage(result)
            

        })
    }
    return(
        <>
        <div id="dprofile" class="px-5 py-5">
            <div class="row">
                <div class="col-sm-5">
                    {drimage &&
                    <img class="rounded-pill" src={imagePath+drimage} width="70%" height="80%"/>
                    }
                    {!drimage &&
                    <img class="rounded-pill" src="doc_logo.jpg"/>
                    }
                    <br/><br/><button class="btn btn-outline-primary" onClick={()=>{navigate('/updateprofile/'+id)}}>Update Profile</button>
                </div>
                <div class="col-sm-7">
                    <p class="patient-d">Welcome Back! Dr.</p>
                    <h4>{name} ({specialist})</h4>
                    <p>{experience} of Experience</p>
                    <p>{qualification}, PHD<br/>BOM</p>
                </div>
            </div>
        </div>
        </>
    )
};
export default Dprofile;