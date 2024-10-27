import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";

const Raisequery=()=>{
    const navigate = useNavigate();
    const params = useParams();
    const emailexpression = /^[a-z 0-9 A-Z]+@[a-z 0-9]+\.[a-z]{2,5}$/
    const [date, setdate] = useState('');
    const [username, setname] = useState('');
    const [gender, setgender] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setemail] = useState('');
    const [query, setquery] = useState('');
    const [secureuser, setsecureuser] = useState('');
    const [submitbutton, setsubmitbutton] = useState('Submit');
    useEffect(()=>{
        if(params.id){
            setsubmitbutton('Update');
            getquery();
            setsecureuser(localStorage.getItem('id'))
        }
    },[])
    const logouthandler=()=>{
        localStorage.clear('id');
        navigate('/login1')
    }
    const getquery=()=>{
        axios.get('http://localhost:4000/query/singlequery/'+params.id).then((response)=>{
            setquery(response.data.message[0].query)
        })
    }
    const dobhandler=(event)=>{
        setdate(event.target.value)
    }
    const namehandler=(event)=>{
        setname(event.target.value)
    }
    const genderhandler=(event)=>{
        setgender(event.target.value)
    }
    const mobilehandler=(event)=>{
        setmobile(event.target.value)
    }
    const emailhandler=(event)=>{
        setemail(event.target.value)
    }
    const queryhandler=(event)=>{
        setquery(event.target.value)
    }
    const submithandler=(event)=>{
        event.preventDefault();
        if(params.id){
            let querydata = {query: query}
            return axios.put('http://localhost:4000/query/updatequery/'+params.id, querydata).then((response)=>{
                navigate('/querypage')
            })
        }else{
            let formdata = {date:date, name:username, gender:gender, mobile:mobile, email:email, query:query}
            if(date === ''){
                alert('enter date')
            }else if(username === ''){
                alert('enter your name')
            }else if(gender === 'select'){
                alert('select your gender')
            }else if(mobile === '' || mobile.length<10 || mobile.length>10){
                console.log(mobile.length)
                alert('enter your mobile number')
            }else if(!email.match(emailexpression)){
                alert('enter correct email id')
            }else if(query === ''){
                alert('please enter your query')
            }else{
            return axios.post('http://localhost:4000/query/storedata',formdata).then((response)=>{
                navigate('/querypage')
            })}}
    }
    return(
        <>
        <div id="query">
            {secureuser && 
            <>
            <button class="btn btn-outline-primary" onClick={()=>{navigate('/dprofile')}} style={{marginLeft: '75%'}}>See Profile</button>
            <button class="btn btn-outline-primary" onClick={logouthandler}>Logout</button>
            </>
            }
            <form>
                {!params.id &&
                <>
                Date<input type="text" class="login-input" placeholder="YYYY/MM/DD" value={date} onChange={dobhandler}/><br/>
                Name <input type="text" class="login-input" placeholder="enter patient name" value={username} onChange={namehandler}/><br/>
                Gender <select style={{backgroundColor: "inherit",color: "blue"}} value={gender} onChange={genderhandler}>
                    <option>select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>other</option>
                </select><br/>
                Mobile <input type="text" class="login-input" placeholder="enter mobile number" value={mobile} onChange={mobilehandler}/><br/>
                Email <input type="email" class="login-input" placeholder="enter your email" value={email} onChange={emailhandler}/><br/><br/>
                </>}
                Query <textarea class="login-input" cols="22" rows="2" value={query} placeholder="Your name:- query...." onChange={queryhandler}></textarea><br/><br/>
                <input type="submit" value={submitbutton} class="btn btn-outline-primary" onClick={submithandler}/><br/>
                <span style={{fontSize: "13px"}}><a href="#" onClick={()=>{navigate('/querypage')}}>Click </a>to see query page</span>
            </form>
        </div>
        </>
    )
};
export default Raisequery;