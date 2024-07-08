import React from 'react'
import parentLogo from "./parentLogo.png";
import studentLogo from "./studentLogo.png";
import employeeLogo from "./employeeLogo.png";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="container-fluid mt-3" style={{height:"80vh"}}>
        <h1 className='text-center'>Unlock Your Future with MERNSCHOOL</h1>
        <p className='text-center display-6 fw-normal'>At MERNSCHOOL, we empower aspiring developers with cutting-edge skills in MongoDB, Express.js, React, and Node.js. </p>
        <div className="row justify-content-around">
            <div className="col-lg-3 col-7 p-3 shadow rounded-3" id='ParentBack'>
                <Link className='text-decoration-none'>
                    <div className='d-flex'>
                        <div className='flex-fill align-items-lg-center justify-content-center'>
                            <img src={parentLogo} alt="Logo" style={{width:70}} className="rounded-pill"/>
                        </div>
                        <div className='flex-fill'>
                            <h5 id='ParentTextColor'>Parent Login</h5>
                            <Link to="parent-login">
                                <button type='submit' className='btn btn-success fw-bold'>
                                    <i class="bi bi-box-arrow-in-right"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-7 p-3 shadow rounded-3" id='StudentBack'>
                <Link to="/student-login" className='text-decoration-none'>
                    <div className='d-flex'>
                            <div className='flex-fill align-items-lg-center justify-content-center'>
                                <img src={studentLogo} alt="Logo" style={{width:70}} className="rounded-pill"/>
                            </div>
                            <div className='flex-fill'>
                                <h5 id='StudentTextColor'>Student Login</h5>
                                <Link to="/student-login">
                                    <button type='submit'  className='btn btn-info fw-bold' id='box-text'>
                                        <i class="bi bi-box-arrow-in-right"/>
                                    </button>
                                </Link>
                            </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3  col-7 p-3 shadow rounded-3" id='FacultyBack'>
                <Link to="/faculty-login" className='text-decoration-none'>
                    <div className='d-flex'>
                            <div className='flex-fill align-items-lg-center justify-content-center'>
                                <img src={employeeLogo} alt="Logo" style={{width:70}} className="rounded-pill"/>
                            </div>
                            <div className='flex-fill'>
                                <h5 id='FacultyTextColor'>Faculty Login</h5>
                                <Link to="/faculty-login">
                                        <button type='submit'  className='btn btn-primary fw-bold'>
                                            <i class="bi bi-box-arrow-in-right"/>
                                        </button>
                                </Link>
                            </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className='container mt-5'>
        <ul class="list-group">
            <li class="list-group-item active">
            <i class="bi bi-lightning"></i>
               <strong>Curriculum:</strong> A MERN school typically offers a curriculum focused on teaching MongoDB, Express.js, React, and Node.js, ensuring students gain practical experience with each component of the stack.
            </li>
            <li class="list-group-item">
                <i class="bi bi-lightning"></i>
                <strong>Project-Based Learning:</strong>Students in a MERN school often engage in project-based learning, building real-world applications to apply their skills and gain hands-on experience.
            </li>
            <li class="list-group-item">
                <i class="bi bi-lightning"></i>
                <strong>Experienced Instructors:</strong>MERN schools often employ instructors who are industry professionals with real-world experience, providing students with insights into best practices and current trends in full-stack development.
            </li>
            <li class="list-group-item">
                <i class="bi bi-lightning"></i>
                <strong>Career Support:</strong>Many MERN schools offer career support services, including resume building, interview preparation, and job placement assistance, to help students transition into the workforce as full-stack developers.
            </li>
        </ul>
        </div>
    </div>
  )
}