import React, { useState } from 'react'
import "../SignUp/signup.css"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Navigate=useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(firstname,lastname, email, password)
        // http://localhost:9000/signup
        axios.post("http://localhost:9000/signup",{firstname, lastname, email, password})
        .then((response)=>{
            console.log(response);
            Navigate("/login")
            alert("user signup successful")
        })
        .catch((error)=>{
            console.log(error);
            alert("User Already Exist")
        })
    }
    return (
        <div className='main-cont'>
            <form className='form' onSubmit={handlesubmit}>
                <label >First Name:</label>
                <input type="text" placeholder="First Name" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
                <label >Last Name:</label>
                <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => { setLastname(e.target.value) }} />
                <label >Email:</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label>Password:</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <input type="submit" value="Sign Up" />
                <p>Already  have an Account <Link to="/Login">Login</Link></p>
            </form>
        </div>
    )
}

export default Signup