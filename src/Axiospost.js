
import axios from "axios";
import React, { useState } from "react"
const Axiospost=()=>{
        const data={fname:"", lastName:""}; 
        const[inputData,setInputdata]=useState(data)

        const handleData=(e)=>{
            setInputdata({...inputData,[e.target.name]:e.target.value})
        }
        const handleSubmit = (e)=>{
            e.preventDefault();
            axios.post("https://jsonplaceholder.typicode.com/users",inputData)
            .then((response)=>{
                console.log(response)
            })

        }
        const handleUpdate=(e)=>{
            e.preventDefault();
            axios.put("https://jsonplaceholder.typicode.com/users/1")
            .then((response)=>{
                console.log(response)
            })
        }

        const handleDelete=(e)=>{
            e.preventDefault();
            axios.delete("https://jsonplaceholder.typicode.com/users/1")
            .then((response)=>{
                console.log(response)
            })
        }

    return(
        <>
        <label>First Name:</label>
        <input type="text" name="fname" value={inputData.fname} onChange={handleData}></input><br/>
        <label>last Name</label>
        <input type="text" name="lastName" value={inputData.lastName} onChange={handleData}></input>

        <button onClick={handleSubmit}>submit</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleUpdate}>Update</button>
        </>
    );
}
export default Axiospost;