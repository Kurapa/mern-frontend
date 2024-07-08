import  axios from 'axios';
import { useParams } from 'react-router-dom';
import React, {  useState } from 'react'
import { FacultyListTime } from './facultylistrow';
export default function FacultyTime() {
    const {id}=useParams();
    const [info,setInfo]=useState([])
    const ListItems =()=>{
    return info.map((val,ind)=>{
    return <FacultyListTime obj={val}/>
    })
    }
    axios.get(`http://localhost:5000/faculty-route/time/${id}`)
    .then((res)=>{
       setInfo(res.data)
       return
    })
    .catch((err)=>{
        console.log(err)
    })
  return (
    <div className='container mt-3'>
      <h1 className='text-center text-info mt-5'>TIME TABLE</h1>
        <table class="table table-bordered text-center opacity-75 shadow table-hover mt-5">
            <thead>
                <tr className='table-primary'>
                    <th>COURSE TITLE</th>
                    <th>COURSE ID</th>
                    <th>ROOM NO</th>
                    <th>TIMINGS</th>
                </tr>
            </thead>
            <tbody>
               {ListItems()}
            </tbody>
        </table>
    </div>
  )
}