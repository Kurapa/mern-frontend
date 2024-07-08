import React from "react";
import { Link, useParams } from "react-router-dom";

import MarkSheet from "./marksheet.jpg";
import ProfilePic from "./profile.png";
import TimeTable from "./timetable.png";
export default function FacultyHomePage() {
  const {id,name,regno}=useParams();

  return (
    <div className="row justify-content-around align-items-center mt-5" style={{height:"70vh"}}>
      <div className="col-lg-3 shadow rounded-3">
        <div className="card border-0">
          <img
            src={ProfilePic}
            alt="payment"
            className="card-img-top"
            style={{ height: "auto", width: "100px", margin: "0 auto", paddingTop: "20px" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Faculty</h5>
            <button type="submit" className="btn btn-info mt-3">
                <Link to={`/faculty-info/${id}/${name}/${regno}`} className="text-decoration-none text-black">FACULTY INFO
                </Link></button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 shadow rounded-3">
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
              <Link to={`/faculty-marks/${id}/${name}/${regno}`} className="text-decoration-none text-black">FACULTY MARKS
              </Link></button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 shadow rounded-3">
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
                <Link to={`/faculty-time/${id}/${name}/${regno}`} className="text-decoration-none text-black">FACULTY TIME
                </Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}