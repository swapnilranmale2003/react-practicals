import React, {useState} from 'react'
import axios from 'axios'
function AxiosPost() {
    const data ={fname:"",lname:""};
    const [inputData, setInputData] = useState(data );
    const handleInput = (e)=>{
        
        setInputData({...inputData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then((response)=>{
            console.log(response)
            
        })
    }
    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
        .then((response)=>{
            console.log(response)
            
        })
    }
    const handleDelete = (e)=>{
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response)
            
        })
    }
  return (
    <div>
      
        <label htmlFor="">First Name</label>
        <input type="text" name="fname" id="" value={inputData.fname}  onChange={handleInput} /> <br />
        <label htmlFor="">Last Name</label>
        <input type="text" name="lname" value={inputData.lname} id="" onChange={handleInput} />  <br />
     <button onClick={handleSubmit}>Submit</button> <br />
     <button onClick={handleUpdate}>Update</button> <br />
     <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default AxiosPost
