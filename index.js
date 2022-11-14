import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navbars = () => {

  const {session, loading, status} = useSession()

  if (status === "unauthenticated") {
    return (
      <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <div className="logo">
              <Link href='/'>
                  <a href="index.html" className="logo" font-size='25px'>
                  </a>

              </Link>   
          </div>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/index.html" className="links">Home</Nav.Link>
            <Nav.Link href="/About Me.html" className="links">About Me</Nav.Link>
            <Nav.Link href="/Services.html" className="links">Services</Nav.Link> 
            <Nav.Link href="/Resume.html" className="links">Resume</Nav.Link> 
          </Nav>

          <Nav.Item >
               <Login/>
          </Nav.Item>



          
        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
  }
  else{
    (
      
      <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <div className="logo">
              <Link href='/'>
                  <a href="index.html" className="logo" font-size='25px'>
            
                  </a>

              </Link>   
          </div>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/index.html" className="links">Home</Nav.Link>
            <Nav.Link href="/About Me.html" className="links">About Me</Nav.Link>
            <Nav.Link href="/Services.htnl" className="links">Services</Nav.Link> 
            <Nav.Link href="/Resume.html" className="links">Resume</Nav.Link>
          </Nav>

          <Nav.Item >
               <Login/>
          </Nav.Item>



          
        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
  }

    
  };
  
  export default Navbars;

