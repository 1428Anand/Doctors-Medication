import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Login=()=>{
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const [dpname, setDpname] = useState('');
    const [login, setLogin] = useState('');
    const [loginbutton, setLoginbutton] = useState('');
    const [mobile, setMobile] = useState('');
    const [otp, setotp] = useState('');
    const [date, setdate] = useState('');
    const [username, setusername] = useState('');
    const [gender, setgender] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');
    const [disease, setdisease] = useState('');
    const [currentstatus, setstatus] = useState('');
    const [password, setpassword] = useState('');
    const [specialist, setspecialist] = useState('');
    const [experience, setexperience] = useState('');
    const [conpassword, setconpassword] = useState('');
    const [profilepic, getProfilepic] = useState('');
    useEffect(()=>{
        if(location.pathname === '/login'){
            setDpname('There');
            setLogin('Login');
            setLoginbutton('Login');
        }else if(location.pathname === '/login1'){
            setDpname('Doctor');
            setLogin("Dr's Login");
            setLoginbutton('Login');
        }else if(location.pathname === '/registration'){
            setDpname('There');
            setLogin('Enter Patient Details');
            setLoginbutton('Submit');
        }
        if(params.id){
            setDpname('Doctor');
            setLogin("Update Profile Pic");
            setLoginbutton('Update');
        };
    },[])
    const handleprofile=(event)=>{
        const img={
            preview:URL.createObjectURL(event.target.files[0]),
            data: event.target.files[0]
        }
        getProfilepic(img);
    }
    const dynamicregistration=()=>{
        if(location.pathname === '/login'){
            navigate('/registration');
        }else if(location.pathname === '/login1'){
            navigate('/registration1')
        }
    }
    const mobilehandler=(event)=>{
        setMobile(event.target.value)
    }
    const otphandler=(event)=>{
        setotp(event.target.value)
    }
    const datehandler=(event)=>{
        setdate(event.target.value)
    }
    const usernamehandler=(event)=>{
        setusername(event.target.value)
    }
    const genderhandler=(event)=>{
        setgender(event.target.value)
    }
    const agehandler=(event)=>{
        setage(event.target.value)
    }
    const emailhandler=(event)=>{
        setemail(event.target.value)
    }
    const diseasehandler=(event)=>{
        setdisease(event.target.value)
    }
    const statushandler=(event)=>{
        setstatus(event.target.value)
    }
    const passwordhandler=(event)=>{
        setpassword(event.target.value)
    }
    const specialisthandler=(event)=>{
        setspecialist(event.target.value)
    }
    const experiencehandler=(event)=>{
        setexperience(event.target.value)
    }
    const conpasswordhandler=(event)=>{
        setconpassword(event.target.value)
    }
    const logouthandler=()=>{
        localStorage.clear('id');
        navigate('/login1')
    }
    const loginhandler=async(event)=>{
        event.preventDefault();
        if(params.id){
            // let formdata = {name:username, gender:gender, specialist:specialist, experience:experience, mobile:mobile, email:email, password:password, confirmpassword:conpassword}
            // if(username === ''){
            //     alert("please enter your name");
            //     return false;
            // }else if(gender === 'select' || gender === null){
            //     alert('please select your gender');
            // }else if(specialist === 'select'){
            //     alert('please select your speciality')
            // }else if(experience === ''){
            //     alert('please enter work experience')
            // }else if(mobile === ''){
            //     alert('please enter your mobile number')
            // }else if(email === ''){
            //     alert('please enter your email')
            // }else if(password === '' || conpassword ==='' || password !== conpassword){
            //     alert("password shoud be same or can't be blank")
            // }else{
            // return axios.post('http://localhost:4000/dlist/registration',formdata).then((response)=>{
            //     navigate('/login1')
            // })}
            if(profilepic === ''){
                alert('please choose an image')
            }else{
            let formdata = new FormData();
            formdata.append('images',profilepic.data)
            const userid = params.id
            const profileuploaddata =await fetch('http://localhost:4000/dlist/updateprofile/'+userid,{method:'put',body:formdata})
            if(profileuploaddata){
                alert('image uploaded successfully')
                navigate('/dprofile')
            }else{
                alert('there is an error')
            }}
        }
        if(location.pathname === '/login1'){
            let formdata = {email:email, password:password}
            if(email === ''){
                alert('please enter your email')
            }else if(password === ''){
                alert('enter your password')
            }else{
            return axios.post('http://localhost:4000/dlist/login/',formdata).then((response)=>{
                if(response.data.message === 'email or password is incorrect'){
                    alert('email or password is incorrect')
                }else{
                    localStorage.setItem('id',response.data.message[0].id);
                    localStorage.setItem('name',response.data.message[0].name)
                navigate('/dashboard')}
            })}
        }
        if(location.pathname === '/registration'){
            let docid = localStorage.getItem('id');
            let formdata = {docid:docid, name:username, gender:gender, age:age, mobile:mobile, disease:disease, status:currentstatus}
            if(username === ''){
                alert("please enter patient name");
                return false;
            }else if(gender === 'select' || gender === null){
                alert('please select gender');
            }else if(age === ''){
                alert('please enter patient age')
            }else if(mobile === ''){
                alert('please enter your mobile number')
            }
            // else if(email === ''){
            //     alert('please enter your email')
            // }
            else if(disease === ''){
                alert('please mention type of disease')
            }else if(currentstatus === ''){
                alert('please enter status of treatment')
            }else{
            return axios.post('http://localhost:4000/plist/pregistration',formdata).then((response)=>{
                navigate('/patientlist')
            })}
        }
        if(location.pathname === '/login'){
            let formdata = {mobile:mobile, otp:otp}
            if(mobile === ''){
                alert('enter your mobile')
            }else if(otp === ''){
                alert('enter your otp')
            }else{
            return axios.post('http://localhost:4000/plist/plogin',formdata).then((response)=>{
                if(response.data.message === 'mobile or otp is incorrect'){
                    console.log(response)
                    alert('mobile or otp is incorrect')
                }else{
                    localStorage.setItem('user_id',response.data.message[0].id);
                    localStorage.setItem('mobile',response.data.message[0].mobile);
                    localStorage.setItem('name',response.data.message[0].name)
                navigate('/profile')}
            })}
        }
    }
    return(
        <>
        <div id="login" class="mb-5">
            <div class="loginform">
                <p class="text-white">Hello! {dpname}</p>
                <h4 style={{fontFamily: "cursive"}}>{login}</h4>
                <form>
                    {login === 'Login' &&
                        <>
                        Mobile <input type="text" class="login-input" placeholder="enter your mobile" value={mobile} onChange={mobilehandler}/><br/><br/>
                        OTP <input type="text" class="login-input" placeholder="OTP" value={otp} onChange={otphandler}/><br/><br/>
                        </>
                    }
                    {login === 'Enter Patient Details' &&
                        <>
                        {/* Date <input type="date" class="login-input" style={{color: "blue"}} value={date} onChange={datehandler}/><br/> */}
                        {/* <input type="text" class="login-input" placeholder="enter patient name" value={username} onChange={usernamehandler}/><br/>
                        <select style={{backgroundColor: "#0085AE",color: "white"}} value={gender} onChange={genderhandler}>
                            <option><span style={{fontSize: "12px"}}>Select Gender</span></option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>other</option>
                        </select><br/>
                        <input type="text" class="login-input" placeholder="age of patient" value={age} onChange={agehandler}/><br/>
                        <input type="text" class="login-input" placeholder="enter mobile number" value={mobile} onChange={mobilehandler}/><br/> */}
                        {/* Email <input type="email" class="login-input" placeholder="enter your email" value={email} onChange={emailhandler}/><br/> */}
                        {/* <textarea class="login-input" placeholder="symptoms" value={disease} onChange={diseasehandler}/><br/>
                        <textarea class="login-input" placeholder="prescription" value={currentstatus} onChange={statushandler}/><br/><br/> */}
                        {/* Prescription<span style={{fontSize: "13px"}}><input type="file" onChange={presimage}/></span> */}
                        {/* {prescription && <img src={prescription.preview} width="100px" height="100px"/>}<br/><br/> */}
                        </>
                    }
                    {login === "Dr's Login" &&
                        <>
                        User Name <input type="text" class="login-input" placeholder="enter your email" value={email} onChange={emailhandler}/><br/><br/>
                    Password <input type="password" class="login-input" placeholder="enter your password" value={password} onChange={passwordhandler}/><br/><br/>
                        </>
                    }
                    {login === "Update Profile Pic" &&
                        <>
                        <br/><input type="file" onChange={handleprofile}/>
                        {profilepic.data &&
                        <img src={profilepic.preview} width="100px" height="100px"/>
                        }
                        <br/><br/>
                        {/* Name <input type="text" class="login-input" placeholder="enter your name" value={username} onChange={usernamehandler}/><br/><br/>
                        Gender <select style={{backgroundColor: "inherit",color: "blue"}} value={gender} onChange={genderhandler}>
                            <option>select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>other</option>
                        </select>
                        Specialist In<select style={{backgroundColor: "inherit",color: "blue"}} value={specialist} onChange={specialisthandler}>
                            <option>select</option>
                            <option>Physician</option>
                            <option>Surgeon</option>
                            <option>Pediatrics</option>
                            <option>Gynaecologist</option>
                            <option>Orthopaedic</option>
                            <option>Neurophysician</option>
                            <option>ENT</option>
                            <option>Neurosurgeon</option>
                            <option>Psychiatrist</option>
                        </select><br/>
                        Experience <input type="text" class="login-input" placeholder="Years" value={experience} onChange={experiencehandler}/><br/>
                        Mobile <input type="text" class="login-input" placeholder="enter mobile number" value={mobile} onChange={mobilehandler}/><br/>
                        Email <input type="email" class="login-input" placeholder="enter your email"value={email} onChange={emailhandler}/><br/>
                        Change Password <input type="password" class="login-input" placeholder="enter your password" value={password} onChange={passwordhandler}/><br/>
                        Confirm Pass<input type="password" class="login-input" placeholder="re-enter password" value={conpassword} onChange={conpasswordhandler}/><br/><br/> */}
                        </>
                    }
                    <input type="submit" value={loginbutton} class="btn btn-outline-light" onClick={loginhandler}/><br/>
                    {/* {login !== 'Login' && login !== "Update Profile Pic" && login !== 'Enter Patient Details' &&
                    <>
                        <span style={{fontSize: "13px"}}>Don't have an Account? </span><a style={{color: "blue", cursor: "pointer"}} onClick={dynamicregistration}><u>Signup</u></a>
                        </>
                    } */}
                    {login === 'Login' &&
                    <>
                    <span style={{fontSize: "13px"}}>Not a registered patient don't worry </span><a onClick={()=>{navigate('/raisequery')}} style={{color: "blue", cursor: "pointer"}}><u>Raise your query</u></a>
                    </>}
                </form>
            </div>
        </div>
        </>
    )
};
export default Login;