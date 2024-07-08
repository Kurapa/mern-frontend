import React, {  useState } from 'react'
import personlogo from './personlogo.png';
import  axios from 'axios';
import { useParams } from 'react-router-dom';
export default function FacultyDetails() {

   const {id,name,regno}=useParams();
   const [info,setInfo]=useState({})
    axios.get(`https://mern-backend-server-kurapa.onrender.com/faculty-route/info/${id}`)
    .then((res)=>{
       setInfo(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  return (
    <div className='container mt-3'>
      <div className='d-flex justify-content-center'>
            <img src={personlogo} alt="ProfilePhoto"style={{width:130}} className="rounded-3 d-block border border-2 border-warning" />
      </div>
      <div className='text-center'><h3>{name}</h3></div>
      <div>
        <table className='table table-bordered table-dark opacity-75 shadow table-hover'>
            <tbody>
                <tr>
                    <td>FACULTY ID</td>
                    <td>{regno}</td>
                </tr>
                <tr>
                    <td> NAME</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>GENDER</td>
                    <td>{info.gender}</td>
                </tr>
                <tr>
                    <td>EMAIL</td>
                    <td>{info.Email}</td>
                </tr>
                <tr>
                    <td>NATIVE LANGUAGE	</td>
                    <td>{info.language}</td>
                </tr>
                <tr>
                    <td>NATIVE STATE</td>
                    <td>{info.state}</td>
                </tr>
                <tr>
                    <td>ADDRESS</td>
                    <td>{info.address}</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}