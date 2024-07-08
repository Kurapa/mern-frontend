import React, {  useState } from 'react'
import personlogo from './personlogo.png';
import  axios from 'axios';
import { useParams } from 'react-router-dom';
export default function StudentDetails() {

   const {id,name,regno}=useParams();
   const [info,setInfo]=useState({})
    axios.get(`https://mern-backend-server-kurapa.onrender.com/content/info/${Number(id)}`)
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
                    <td>Registration Number</td>
                    <td>{regno}</td>
                </tr>
                <tr>
                    <td>STUDENT NAME</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>DATE OF BIRTH</td>
                    <td>{info.dob}</td>
                </tr>
                <tr>
                    <td>GENDER</td>
                    <td>{info.gender}</td>
                </tr>
                <tr>
                    <td>STUDENT MOBILE NUMBER</td>
                    <td>{info.mobile}</td>
                </tr>
                <tr>
                    <td>PARENT MOBILE NUMBER</td>
                    <td>{info.parentmobile}</td>
                </tr>
                <tr>
                    <td>NATIVE LANGUAGE	</td>
                    <td>{info.nativelanguage}</td>
                </tr>
                <tr>
                    <td>NATIVE STATE</td>
                    <td>{info.address}</td>
                </tr>
                <tr>
                    <td>BLOOD GROUP</td>
                    <td>{info.bloodgroup}</td>
                </tr>
                <tr>
                    <td>NATIONALITY</td>
                    <td>{info.nationality}</td>
                </tr>
                <tr>
                    <td>RELIGION</td>
                    <td>{info.religion}</td>
                </tr>
                <tr>
                    <td>ADDRESS</td>
                    <td>GANDHI NAGAR,CHENNAI,TAMIL NADU</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}