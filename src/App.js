import './App.css';
import Nav from './components/Navbar';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import HomePage from './components/HomePage';
import { Route,Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import StudentDetails from './components/StudentDetails';
import Studentpay from './components/Studentpay';
import StudenntTime from './components/studenttime';
import StudentHomePage from './components/StudentHomepage';
import FaultyLogin from './components/facultylogin';
import FacultyHomePage from './components/FacultyHomePage';
import FacultyDetails from './components/facultydetails';
import FacultyTime from './components/FacultyTime';
import StudentMarks from './components/StudentMarks';
import FacultyMarks from './components/FacultyMarks';
import FacultyForgotpassword from './components/facultyforgotpassword';
import ParentLogin from './components/parentlogin';
function App() {
  return (
    <div className="App">
      <HashRouter>
          <Nav/>
          <Routes>
          <Route path="/student-login" element={<StudentLogin/>} />
          <Route path="/faculty-login" element={<FaultyLogin/>}/>
          <Route path="/parent-login" element={<ParentLogin/>}/>

          
          <Route path='/' element={<HomePage/>}/>
          <Route path='/student-content/:id/:name/:regno' element={<StudentHomePage/>}/>
          <Route path='/student-info/:id/:name/:regno' element={<StudentDetails/>}/>
          <Route path='/student-marks/:id/:name/:regno' element={<StudentMarks/>}/>
          <Route path='/student-pay/:id/:name/:regno' element={<Studentpay/>}/>
          <Route path='/student-time/:id/:name/:regno' element={<StudenntTime/>}/>

          <Route path='/faculty-home/:id/:name/:regno' element={<FacultyHomePage/>}/>
          <Route path='/faculty-info/:id/:name/:regno' element={<FacultyDetails/>}/>
          <Route path='/faculty-marks/:id/:name/:regno' element={<FacultyMarks/>}/>
          <Route path='/faculty-time/:id/:name/:regno' element={<FacultyTime/>}/>


          <Route path='/faculty-forgot-password' element={<FacultyForgotpassword/>}/>

          <Route path='/student-forgot-password' element={<ForgotPassword/>}/>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;