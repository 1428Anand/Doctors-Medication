import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
const Header = ()=>{
    const navigate = useNavigate();
    const [secureuser, getsecureuser] = useState('');
    const [drdashboard, getdrdashboard] = useState('');
    useEffect(()=>{
            getsecureuser(localStorage.getItem('name'));
            getdrdashboard(localStorage.getItem('id'));
    })
    const handlelogout=()=>{
        localStorage.clear('');
        navigate('/')
    }
    return(
        <>
        <div id="header" class="sticky-top pe-4">
            <navbar id="navbar">
                <img src="wing.png" class="rounded-pill" width="50px" style={{color: "white"}}/>
                <a onClick={()=>{navigate('/')}}>HOME</a>
                <a onClick={()=>{navigate('/doctorslist')}}>OUR DOCTORS</a>
                <a onClick={()=>{navigate('/querypage')}}>QUERIES</a>
                {/* <a href="#home2" style={{textDecoration: "none", color: "white"}}>ABOUT US</a> */}
                {drdashboard && 
                <>
                <button class="btn text-white dropdown-toggle ms-5" data-bs-toggle="dropdown" style={{fontFamily: "cursive"}}>PROFILE</button>
                <ul class="dropdown-menu">
                <li><a onClick={()=>{navigate('/dprofile')}}>PROFILE</a></li>
                <li><a onClick={()=>{navigate('/dashboard')}}>DASHBOARD</a></li>
                <li><a onClick={()=>{navigate('/prescription')}}>PATIENT PRESCRIPTION</a></li>
                <li><a onClick={()=>{navigate('/patientlist')}}>PATIENT LIST</a></li>
                {/* <li><a onClick={()=>{navigate('/querypage')}}>PATIENT QUERIES</a></li> */}
                </ul>
                </>
                }
                {!secureuser &&
                <>
                <button class="btn text-white dropdown-toggle" data-bs-toggle="dropdown" style={{fontFamily: "cursive", float: "inline-end"}}>LOGIN</button>
                <ul class="dropdown-menu">
                <li><a onClick={()=>{navigate('/login')}}>Patient Login</a></li>
                <li><a onClick={()=>{navigate('/login1')}}>Doctors Login</a></li>
                </ul>
                </>}
                {secureuser &&
                
                <button onClick={handlelogout} class="btn text-white" style={{fontFamily: "cursive", float: "inline-end"}}>LOGOUT</button>
                }
            </navbar>
        </div>
        </>
    )
}
export default Header;