import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">CoffeeCoffee</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Service
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <NavLink className="nav-link" to="/technicians/" style={{color:'black'}}>Technician Team</NavLink>
                      <NavLink className="nav-link" to="/technicians/new" style={{color:'black'}}>Create a Technician</NavLink>
                      <NavLink className="nav-link" to="/appointments/" style={{color:'black'}}>Service Appointments</NavLink>
                      <NavLink className="nav-link" to="/appointments/new" style={{color:'black'}}>Create Appointment</NavLink>
                      <NavLink className="nav-link" to="/appointments/history/" style={{color:'black'}}>Service History</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
            
              </ul>
            </div>
          </div>
        </nav>
      )
}

export default Nav