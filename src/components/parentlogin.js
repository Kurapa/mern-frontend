import React from 'react'
import { useState } from "react"
import logo from "./logo.jpeg";
import "./Custom.css";
import Axios from 'axios';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
export default function ParentLogin() {
  const navigate=useNavigate()
  const[email,setEmail] =useState("")
  const[name,setName] =useState("")
  const[regno,setRegNo]=useState("")
  const arr={
      email:email,
      name:name,
      regNo:regno
  }
    function handlesubmit(event){
        event.preventDefault();
        Axios.post("http://localhost:5000/route/parent-login",arr)
        .then((res)=>{
            if(res.data.msg==='fail'){
                alert("incorrect username or password")
                event.target.reset();         
            }
            else{
                console.log(res.data)
                 localStorage.setItem("user-id",res.data.id)
                 navigate(`/student-content/${res.data.id}/${res.data.name}/${res.data.regNo}`)
                }
        })
        .catch(
            (err)=>{
                console.log(err)
            }
        )
    }
  return (
    <div style={{height:"70vh"}}>
    <div className='row my-5 mx-5  justify-content-center' style={{height: "70vh"}}>
      <div className='col-12 col-lg-6 d-flex align-items-end  align-items-lg-center justify-content-center'>
            <img src={logo} alt="Logo" style={{width:230}} className="rounded-pill"/>
      </div>
      <div className='col-10 col-lg-6 mt-4 pt-4 d-flex align-items-lg-center align-items-start justify-content-center  shadow rounded-5' >
        <div>
            <form onSubmit={handlesubmit}>
                <div className='row align-items-center justify-content-center px-5'>
                <h3 className="form-group col-10 col-lg-6" id='studentheading'>Login to Parent Portal</h3>
                <div className="form-group form-floating col-10 col-lg-8 my-4">
                    <i className="bi bi-envelope-fill bi-lg" id='iconsEnvelope'></i>
                    <input type="email" className="form-control"id='UserEmail'placeholder="Enter Email" 
                    onChange={(event)=>setEmail(event.target.value)} required/>                    
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <label htmlFor="UserEmail">Enter Email</label>

                </div>
                <div className="form-group form-floating mb-3 col-lg-8 col-10">
                <i class="bi bi-person-fill bi-lg" id='icons'></i>
                    <input type="text" className="form-control " id="name"placeholder="Enter student name"
                    onChange={(event)=>setName(event.target.value)} required/>
                    <label htmlFor="UserPassword">Name</label>
                </div>
                <div className="form-group form-floating mb-3 col-lg-8 col-10">
                <i class="bi bi-r-circle-fill" id='icons'></i>
                    <input type="text" className="form-control " id="regno" placeholder="Enter Reg no"
                    onChange={(event)=>setRegNo(event.target.value)} required/>
                    <label htmlFor="UserPassword">RegNo</label>
                </div>
                    <div className="form-group mb-3 col-lg-8 col-10 d-flex justify-content-end">
                        <Link to="/student-forgot-password">Forgot Password?</Link>
                    </div>
                      <button type="submit" className="btn btn-info col-lg-8 col-10"  id='PortalLogIn'>Log in</button>
                </div>
            </form>
            </div>
            </div>
    </div>
    </div>
  )
}