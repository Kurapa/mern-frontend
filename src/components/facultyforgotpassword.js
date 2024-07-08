import React, { useState } from 'react';
import  Axios  from 'axios';
import { useNavigate } from 'react-router-dom';
export default function FacultyForgotpassword() {
    const navigate=useNavigate()
    const [newpassword,setnewpassword]=useState()
    const [regNo,setregno]=useState()
    const [password,setpassword]=useState()
    const data={
        password:newpassword,
        regno:regNo
      }
    console.log(regNo)
    function handleclick(){
      if(newpassword===password){
      Axios.put("https://mern-backend-server-kurapa.onrender.com/faculty-route/forgotpassword",data)
      .then((res)=>{
          if(res.data.msg==="success"){
            alert("password is updated")
            navigate("/faculty-login")
          }
          else{
            alert("please enter valid details")
          }
      })
      .catch((err)=>{
          console.log(err)
      })
    }
    else{
      alert("passwords do not match")
    }
    }

  return (
    <div className='container-fluid mt-3 text-center'>
      <form className="row justify-content-center flex-column align-items-center"action="" id='form'>
            <h3 class="form-group"id="forgotHeading">Forgot Password</h3>
            <div className="form-group form-floating col-8 col-lg-7 my-2">
                <i className="bi bi-envelope-fill bi-lg"  id='icons'></i>
                <input type="email" className="form-control"id='UserEmail'placeholder="Enter Email" required/>                   
                <label htmlFor="UserEmail">Enter Faculty Email</label>
            </div>
            <div className="form-group form-floating col-8 col-lg-7 my-2">
                <i class="bi bi-person-fill bi-lg" id='icons'></i>
                <input type="text" className="form-control"id='UserName'placeholder="Enter  Full Name" required/>                    
                <label htmlFor="UserName">Enter Faculty Full Name</label>
            </div>
            <div className="form-group form-floating col-8 col-lg-7 my-2">
                <i class="bi bi-person-fill bi-lg" id='icons'></i>
                <input type="text" className="form-control"id='regno'placeholder="Enter reg no" 
                onChange={(event)=>{setregno(event.target.value)} }required/>                    
                <label htmlFor="UserName">Reg no</label>
            </div>

            <div className="form-group form-floating col-8 col-lg-7 my-2">
                    <i class="bi bi-key-fill" id='icons'></i>
                    <input type="password" className="form-control " id="UserPassword" placeholder="Password" 
                   onChange={(event)=>{setpassword(event.target.value)}} required/>
                    <label htmlFor="UserPassword">Password</label>
            </div>

            <div className="form-group form-floating col-8 col-lg-7 my-2">
                    <i class="bi bi-key-fill" id='icons'></i>
                    <input type="password" className="form-control " id="UserRe-Password" placeholder="Re-Password" 
                    onChange={(event)=>{setnewpassword(event.target.value)}} required/>
                    <label htmlFor="UserRe-Password">Re-Password</label>
            </div>
            <button type="submit" className="btn btn-primary col-lg-3 col-4 my-4" id='UpdatingPassword'
            onClick={handleclick}>Update Password</button>
      </form>
    </div>
  )
}