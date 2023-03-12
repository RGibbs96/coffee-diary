import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'

function Nav() {
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
              </ul>
            </div>
          </div>
        </nav>
      )
}

export default Nav
