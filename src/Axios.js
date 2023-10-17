import axios from "axios";
import React, { useEffect, useState } from "react";

function Axios(){
    const[userData,setdata]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setdata(response.data)
        })
    },[])
    return (
        <div>Axios project
            {userData.map((data)=>{
                return(
                    <div>{data.name}</div>
                )
            })}
        </div>
    )
}

export default Axios;