import { Link } from "react-router-dom";
import logo from "./logo.jpeg";
export default function Nav(props) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark shadow">
        <div className="container-fluid ">
        <Link to="/" className="navbar-brand" >
            <img src={logo} alt="Logo" style={{height:70}} className="rounded-pill"/>
            </Link>
        </div>
    </nav>
)
}