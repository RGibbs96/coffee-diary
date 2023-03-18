import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'

function Nav() {
    const handleLogout = async (e) => {
      e.preventDefault()
      const url = 'http://localhost:8000/accounts/auth/logout/'
      const fetchConfig = {
        method: 'post',
        headers : {
          'Authorization': `Token ${localStorage.getItem("token")}`
        }
      }
      const response = await fetch(url, fetchConfig)
      if (response.ok) {
        localStorage.clear()
        window.location.replace('http://localhost:3000/');
      } else (
        console.log("uh oh logout failed")
      )
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Coffee Diary</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Beans
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <NavLink className="nav-link" to="/beans/new" style={{color:'black'}}>Add a bean</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Brewers
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <NavLink className="nav-link" to="/brewers/new" style={{color:'black'}}>Add a brewer</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Grinders
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <NavLink className="nav-link" to="/grinders/new" style={{color:'black'}}>Add a grinder</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Origins
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <NavLink className="nav-link" to="/origins/new" style={{color:'black'}}>Add an origin</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Roasters
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <NavLink className="nav-link" to="/roasters/new" style={{color:'black'}}>Add a roaster</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                {(localStorage.getItem('token') !== null) ?
                <li>
                  <NavLink className="nav-link" onClick={handleLogout}>Logout</NavLink>
                </li>:
                  <li>
                    <NavLink className="nav-link" to="/login/">Login</NavLink>
                  </li>
                }
                {(localStorage.getItem('token') !== null) ?
                <li>
                </li>:
                  <li>
                    <NavLink className="nav-link" to="/signup/">Sign Up</NavLink>
                  </li>
                }

              </ul>
            </div>
          </div>
        </nav>
      )
}

export default Nav
