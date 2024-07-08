import React from "react";
import { Link, useParams } from "react-router-dom";
import TimeTable from "./timetable.png";
import Payment from "./payment.png";
import MarkSheet from "./marksheet.jpg";
import ProfilePic from "./profile.png";
export default function StudentHomePage() {
    const {id,name,regno}=useParams();
   
      
  return (
    <div className="row justify-content-lg-around justify-content-center align-items-center mt-5" style={{height:"70vh"}}>
      <div className="col-lg-2 shadow rounded-3 col-6">
        <div className="card border-0">
          <img
            src={ProfilePic}
            alt="student"
            className="card-img-top"
            style={{ height: "auto", width: "100px", margin: "0 auto", paddingTop: "20px" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Student</h5>
                <button type="submit" className="btn btn-info mt-3">
                <Link to={`/student-info/${id}/${name}/${regno}`} className="text-decoration-none text-black">STUDENT INFO
                </Link></button>
          </div>
        </div>
      </div>
      <div className="col-lg-2 shadow rounded-3 col-6">
        <div className="card border-0">
          <img
            src={MarkSheet}
            alt="marks"
            className="card-img-top"
            style={{ height: "auto", width: "100px", margin: "0 auto", paddingTop: "20px" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Marks Sheet</h5>
            <button type="submit" className="btn btn-info mt-3">
                <Link to={`/student-marks/${id}/${name}/${regno}`} className="text-decoration-none text-black">STUDENT MARKS
                </Link></button>         
           </div>
        </div>
      </div>
      <div className="col-lg-2 shadow rounded-3 col-6">
        <div className="card border-0">
          <img
            src={TimeTable}
            alt="student"
            className="card-img-top"
            style={{ height: "auto", width: "100px", margin: "0 auto", paddingTop: "20px" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Timetable</h5>
                <button type="submit" className="btn btn-info mt-3">
                <Link to={`/student-time/${id}/${name}/${regno}`} className="text-decoration-none text-black">STUDENT TIME
                </Link></button>
          </div>
        </div>
      </div>
      <div className="col-lg-2 shadow rounded-3 col-6">
        <div className="card border-0">
          <img
            src={Payment}
            alt="student"
            className="card-img-top"
            style={{ height: "auto", width: "100px", margin: "0 auto", paddingTop: "20px" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Fee Details</h5>
                <button type="submit" className="btn btn-info mt-3">
                    <Link to={`/student-pay/${id}/${name}/${regno}`} className="text-decoration-none text-black">STUDENT PAY
                </Link>  </button>
          </div>
        </div>
      </div>
    </div>
  );
}