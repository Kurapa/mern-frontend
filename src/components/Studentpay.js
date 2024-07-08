import  axios from 'axios';
import { useParams } from 'react-router-dom';
import React, {  useState } from 'react'
import {StudentListpay} from './studentListRow';


export default function Studentpay() {
    const {id}=useParams();
    const [info,setInfo]=useState([])
    const ListItems =()=>{
    return info.map((val,ind)=>{
    return <StudentListpay obj={val}/>
    })
    }
    axios.get(`http://localhost:5000/content/pay/${Number(id)}`)
    .then((res)=>{
       setInfo(res.data)
       return
    })
    .catch((err)=>{
        console.log(err)
    })
  return (
    <div className='container mt-3'>
        <h1 className='text-center text-info mt-5'>Receipts</h1>
        <table class="table table-bordered text-center opacity-75 shadow table-hover mt-5">
            <thead>
                <tr className='table-primary'>
                    <th>RECEIPT NUMBER</th>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                </tr>
            </thead>
            <tbody>
               {ListItems()} 
            </tbody>
        </table>
    </div>
  )
}