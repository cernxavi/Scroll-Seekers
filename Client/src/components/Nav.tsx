import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import nextPageLogo from "../images/next-page-logo.svg";
import AUTH from '../utils/auth';
import { useState } from "react";

function Navigation() {
  const [loggedIn] =useState(()=> AUTH.loggedIn());
  return (
    <Navbar expand="lg" className="navigation-bar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="nav-brand">
        <img
          src="/assets/next-page-logo.svg" // This points to the public folder
          alt="Next Page Logo"
          className="nav-logo"
          style={{ height: '50px', width: 'auto', marginRight: '10px' }}
        />

          {/* <img
            src={nextPageLogo}
            alt="Next Page Logo"
            className="nav-logo"
            style={{ height: '50px', width: 'auto', marginRight: '10px' }}
          /> */}
          Next Page
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav-links" navbarScroll>
            <Nav.Link as={Link} to="/myBooks" className="nav-link">
              MyBooks
            </Nav.Link> 
        
           {loggedIn ? ( 
            <Nav.Link className="nav-link" 

            onClick={() => AUTH.logout()}
            >
              Logout
            </Nav.Link>
          ) : ( 
          <Nav.Link as={Link} to="/login" className="nav-link">
              Login
            </Nav.Link>
          )}
            <Nav.Link as={Link} to="/recommend" className="nav-link">
              Recommended
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;






// import { Link } from "react-router-dom";

// // import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// // import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function Navigation() {
//   return (
//     <Navbar expand="lg" className="navigation-bar">
//       <Container fluid>
//         <Navbar.Brand as={Link} to="/" className="nav-brand">
//           Next Page
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="nav-links"
//             navbarScroll
//           >
//             <Nav.Link as={Link} to="/myBooks" className="nav-link">
//               MyBooks
//             </Nav.Link>
//             <Nav.Link as={Link} to="/login" className="nav-link">
//               Login
//             </Nav.Link>
//             <Nav.Link as={Link} to="/recommend" className="nav-link">
//               Recommended
//             </Nav.Link>
//           </Nav>
//           {/* <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form> */}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navigation;
