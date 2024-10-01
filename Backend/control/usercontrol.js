const users = require('../Model/usermodel')
const Signup =async (req,res)=>{
    const {firstname,lastname,email,password} = req.body;
    const user =  await users.findOne({email:req.body.email})
    if(user){
        return res.status(409).send({message: "User already exists"})  //409 Conflict Status Code for already existing user. 400 Bad Request for invalid data. 201 Created for successful creation. 200 OK for successful read. 404 Not Found for not found. 500 Server Error for server errors. 401 Unauthorized for unauthorized requests. 403 Forbidden for forbidden requests. 202 Accepted for requests that are accepted for processing, but haven't been completed yet. 204 No Content for responses that don't have a body. 304 Not Modified for responses that haven't been modified since the last request. 100 Continue for requests that expect a body. 101 Switching Protocols for requests that switch protocols. 203 Non-Authoritative Information for responses that include information from a non-authoritative source
    }else{

        await users.create({
            firstname,lastname,email,password
        })
        return res.status(201).send({success:"successfully created"})
    }
}
const Login = async (req,res)=>{
    
   const user =  await users.findOne({email:req.body.email})
   .then((user)=>{
    if (user.password ===req.body.password) {
        return res.status(200).send({message: "Login Successful"})
    }else{
        return res.status(401).send({message: "Invalid Password"})
    }
   }).catch((err)=>console.log(err));
   if(!user)
    return res.status(404).send({message: "User not found"})
}
module.exports = {Signup,Login}