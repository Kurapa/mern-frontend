import React, {  useState } from 'react'
import  axios from 'axios';
import { useParams } from 'react-router-dom';
export default function StudentMarks() {

   const {id}=useParams();
   const [info,setInfo]=useState({})
    axios.get(`http://localhost:5000/content/marks/${Number(id)}`)
    .then((res)=>{
       setInfo(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  return (
    <div className='container mt-3'>

      <div className='d-flex justify-content-center'>
                   <h1>MARK SHEET</h1>
      </div>
        <table className='table table-bordered shadow table-hover'>
            <tbody>
                <tr>
                    <th>SUBJECT NAME</th>
                    <th>MARKS</th>
                </tr>
                <tr>
                    <td>HTML</td>
                    <td>{info.html}</td>
                </tr>
                <tr>
                    <td>CSS</td>
                    <td>{info.css}</td>
                </tr>
                <tr>
                    <td>JS</td>
                    <td>{info.js}</td>
                </tr>
                
               
            </tbody>
        </table>
      </div>
  )
}