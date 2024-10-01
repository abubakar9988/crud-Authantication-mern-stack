import React, { useState } from 'react'
import "../Login/Login.css"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Navigate=useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
        axios.post("http://localhost:9000/login",{email,password})
        .then((response)=>{
            console.log(response)
            Navigate("/")
        })
        .catch((error)=>{
            console.log(error)
            alert("Invalid Email or Password")
        })
        }
    return (
        <div className='main-cont'>
            <form className='form' onSubmit={handlesubmit}>
                <label>Email:</label>
                <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="Login"/>
                <p>If Not have an Account <Link to="/Signup">Signup</Link></p>
            </form>
            
        </div>
    )
}

export default Login