import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import LoginOverlay from './components/LoginOverlay';
import SignUpOverlay from './components/SignUpOverlay';

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
        <nav className="navbar navbar-expand-lg" id="navbar-container">
          <div className="container-fluid">
            <NavLink style={{paddingLeft:"224px"}} className="navbar-brand" id="navbar-brand" to="/">Coffee Diary</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li style={{paddingTop:"4px", paddingLeft:"224px"}}>
                  <Dropdown >
                    <Dropdown.Toggle variant="secondary" id="nav-dropdown">
                      Beans
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{background:"rgba(133, 163, 224, 0.1)"}}>
                      <NavLink id="nav-link" className="nav-link" to="/beans/new">Add a bean</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li style={{paddingTop:"4px", paddingLeft:"8px"}}>
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="nav-dropdown">
                      Brewers
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{background:"rgba(133, 163, 224, 0.1)"}}>
                      <NavLink id="nav-link" className="nav-link" to="/brewers/new">Add a brewer</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li style={{paddingTop:"4px", paddingLeft:"8px"}}>
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="nav-dropdown">
                      Grinders
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{background:"rgba(133, 163, 224, 0.1)"}}>
                      <NavLink id="nav-link" className="nav-link" to="/grinders/new">Add a grinder</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li style={{paddingTop:"4px", paddingLeft:"8px"}}>
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="nav-dropdown">
                      Origins
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{background:"rgba(133, 163, 224, 0.1)"}}>
                      <NavLink id="nav-link" className="nav-link" to="/origins/new">Add an origin</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li style={{paddingTop:"4px", paddingLeft:"8px"}}>
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="nav-dropdown">
                      Roasters
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{background:"rgba(133, 163, 224, 0.1)"}}>
                      <NavLink id="nav-link" className="nav-link" to="/roasters/new">Add a roaster</NavLink>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                {(localStorage.getItem('token') !== null) ?
                <li style={{paddingTop:"4px", paddingLeft:"8px"}}>
                  <button type="button" className="btn" id="nav-button" onClick={handleLogout}>Logout</button>
                </li>:
                <li style={{paddingTop:"4px", paddingLeft:"8px"}}>
                  <LoginOverlay />
                </li>
                }
                {(localStorage.getItem('token') !== null) ?
                <li>
                </li>:
                <li style={{paddingTop:"4px", paddingLeft:"8px"}}>
                  <SignUpOverlay />
                </li>
                }

              </ul>
            </div>
          </div>
        </nav>
      )
}

export default Nav
