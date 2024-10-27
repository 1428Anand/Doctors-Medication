import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Query=()=>{
    const [querydata, getquerydata] = useState('');
    const [secureuser, setsecureuser] = useState('');
    useEffect(()=>{
        getquerylist();
        if(localStorage.getItem('id')){
            setsecureuser(localStorage.getItem('id'))
        }
    },[])
    const getquerylist=()=>{
        return axios.get('http://localhost:4000/query/querylist').then((response)=>{
            getquerydata(response.data.message)
        })
    }
    const navigate = useNavigate();
    const updatequery=(id)=>{
        navigate('/updatequery/'+id)
    }
    const logouthandler=()=>{
        localStorage.clear('id');
        navigate('/login1')
    }
    return(
        <>
        <div id="querypage">
            <h2 class="pb-3" style={{marginLeft: "42%"}}>Patient Queries</h2>
            <table>
                {querydata && querydata.map((user)=>
                <tbody>
                    <tr>
                        <td width="20%">{user.name}</td>
                        <td>{user.query}<br/>
                        {secureuser &&
                        <button class="btn btn-primary" onClick={()=>{updatequery(user.id)}}>update</button>
                        }
                        </td>
                    </tr>
                </tbody>
                )}
            </table>
        </div>
        </>
    )
};
export default Query;