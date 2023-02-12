import React, { useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate()
    const collectData = async () => {
        console.log(name,email,password);
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body: JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
         result = await result.json();
         localStorage.setItem("user",JSON.stringify(result.result))
         localStorage.setItem("token",JSON.stringify(result.token))
        if(result){
            navigate('/');
        }else{
         alert("Enter correct details")   
        }
    }
    return (
        <div className="register-form">
            <h1>Registration Form</h1>
            <input className="inputBox" type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input className="inputBox" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input className="inputBox" type="password" placeholder="Passsword" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className="submit-button" type="button" onClick={collectData}>Submit</button>
        </div>
    )
}

export default Signup;