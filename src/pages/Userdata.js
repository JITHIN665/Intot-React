import React from "react";
import { useEffect,useState } from "react";


function Userdata() {
    const[userdata,setUserdata]=useState([{
        firstname:"",
        email:"",
        mobile:"",
        password:"",
    }])
    useEffect(()=>{
        fetch("http://localhost:3001/login")
        .then(res => res.json())
        .then(data => setUserdata(data))
    })

    return (
        <div>
            <h1>Userdata</h1>
        </div>
    )

}
