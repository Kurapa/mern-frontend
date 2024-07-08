import  Axios from 'axios';
import { useParams } from 'react-router-dom';
import React, {  useState } from 'react'
import { FacultyListMarks } from './facultylistrow';



export default function FacultyMarks() {
    const {id}=useParams();
    const [info,setInfo]=useState([])
    const [Sname,setName]=useState("")
    const [Smarks,setMarks]=useState("")
    const uploadData={
        sname:Sname,
        marks:Smarks
    }
    const ListItems =()=>{
    return info.map((val,ind)=>{
      return <FacultyListMarks obj={val} fid={id}/>
    })
    }
    
    Axios.get(`https://mern-backend-server-kurapa.onrender.com/faculty-route/marks/${Number(id)}`)
    .then((res)=>{
       setInfo(res.data)
       return
    })
    .catch((err)=>{
        console.log(err)
    })

    function handleclick(){
      Axios.post(`https://mern-backend-server-kurapa.onrender.com/faculty-route/marks-upload/${id}`,uploadData)
      .then((res)=>{
       console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  return (
    <div className='container mt-3'>
         <div className='d-flex justify-content-center '>
        <input type='text' placeholder='student-name' 
        onChange={(event)=>setName(event.target.value)}/>
        <input type='text' placeholder='student-marks'
        onChange={(event)=>setMarks(event.target.value)}/>
        <button className='btn btn-secondary' onClick={handleclick}>Add</button>
      </div>
        <h1 className='text-center text-info mt-5'>MARKS UPLOAD</h1>
        <table class="table table-bordered text-center opacity-75 shadow table-hover mt-5">
            <thead>
                <tr className='table-primary'>
                    <th>STUDENT NAME</th>
                    <th>MARKS</th>
                    <th>REMOVE</th>
                </tr>
            </thead>
            <tbody>
               {ListItems()} 
            </tbody>
        </table>
    </div>
  )
}