import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import img from "./images/header.png";
import img1 from "./images/me.png";
import img2 from "./images/proj1.png";
import img3 from "./images/proj2.png";
import img4 from "./images/proj3.jpg";
import img5 from "./images/proj4.jpg";
import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Rima2.css";
import header from "./images/header copy.png";
import me from "./images/me copy.png";
import proj1 from "./images/port1.jpg";
import proj2 from "./images/port2.png";
import proj3 from "./images/port3.jpg";
import proj4 from "./images/proj1.png";
export default function Rima2() {
  return (
    <div id="home-section">
      <div className="cs-home">
        <Navbar
          className="navbar-wrapper me-auto"
          expand="lg"
          style={{
            backgroundColor: "#1b242f",
            borderBottom: "2px solid #0ab2cc",
          }}
          fixed="top"
        >
          <Navbar.Brand
            href="#home-section"
            style={{
              fontWeight: "bold",
              letterSpacing: ".14rem",
              color: "#0ab2cc",
              marginLeft: "30px",
            }}
          >
            Matthew Williams
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              style={{
                fontWeight: "bold",
                letterSpacing: ".14rem",
                color: "white",
              }}
              className=" m-auto nav-item"
            >
              <Nav.Link
                href="#home-section"
                style={{
                  color: "white",
                  color: "#0ab2cc",
                  marginRight: "30px",
                }}
                className="menu-items"
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#about-section"
                style={{ color: "white", marginRight: "30px" }}
                className="menu-items"
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#skills-section"
                style={{ color: "white", marginRight: "30px" }}
                className="menu-items"
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects-section"
                style={{ color: "white", marginRight: "30px" }}
                className="menu-items"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#work-section"
                style={{ color: "white", marginRight: "30px" }}
                className="menu-items"
              >
                Work
              </Nav.Link>
              <Nav.Link
                href="#contact-section"
                style={{ color: "white", marginRight: "30px" }}
                className="menu-items"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="cs-header-info d-flex justify-content-center">
          <div className="header-txt d-flex flex-column justify-content-center align-items-center mt-5 ">
            <h2 className="mt-4" style={{ color: "white" }}>
              {" "}
              Hi, Matthew Williams{" "}
            </h2>
            <h2 className="mt-4" style={{ color: "white" }}>
              I'm Web Developer
            </h2>
            <h2 className="mt-4" style={{ color: "white" }}>
              Confident, team leader, energetic and efficient in my work.
            </h2>
            {/* <h1>Thoughtful Brand Design</h1>
          <p>for independent creatives</p> */}
            <a href="#about-section">
              {" "}
              <Button
                style={{
                  backgroundColor: "#0ab2cc",
                  color: "white",
                  border: "none",
                  fontWeight: "bold",
                  letterSpacing: ".14rem",
                }}
                variant="light"
              >
                VIEW MY WORK
              </Button>{" "}
            </a>
          </div>
        </div>
        <div id="about-section">
        <div className="cs-about-section d-flex flex-column justfiy-content-center align-items-center">
          <div
            className="cs-about-section-txt mt-5"
            style={{ borderBottom: "5px solid #0ab2cc", width: "200px" }}
          >
            About Me
          </div>
          <div className="cs-about-wrapper d-flex ] justify-content-center align-items-center flex-wrap mt-5">
            <img src={me} alt="" />
            <div className="cs-about-info  d-flex flex-column  justify-content-center  mt-5">
              <div className="cs-about-info-txt mb-4">
                {" "}
                I'm a Front-End Developer for ChowNow in Los Angeles, CA.
              </div>
              <div className="cs-about-info-txt mb-4">
                {" "}
                I have serious passion for UI effects, animations and creating
                intuitive
              </div>
              <div className="cs-about-info-txt mb-4">
                {" "}
                Seeking a position as a web developer where I can improve
                company business productivity
              </div>
              <div className="cs-about-info-txt">
                Coding is like a hubby for me in my free time to update my
                knowledge with new one
              </div>
            </div>
          </div>
        </div>
        </div>
        <div id="skills-section">
        <div className="cs-skills-section d-flex flex-column justfiy-content-center align-items-center">
          <div
            className="cs-about-section-txt "
            style={{
              borderBottom: "5px solid #0ab2cc",
              width: "200px",
              marginTop: "100px",
            }}
          >
            Skills
          </div>
          <div className="your-skills d-flex justify-content-center mt-5 flex-wrap">
            <div className="cs-skill1  d-flex flex-column  align-items-center">
              {/* <img src={photo} style={{ width: "20%" }} alt="" /> */}
              <div className="cs-skills-num">React.js</div>
              <div className="skills-desc mt-5 ms-3 ">
                React JS is its potential to reuse components. It saves time for
                developers as they don't have to write various codes for the
                same features.
              </div>

              <div className="cs-skills-num mt-5">SKILLS</div>
              <div className="skills-desc">
              JavaScript + ES6, HTML, CSS,
              </div>
              <div className="cs-skills-num mt-5">FUTURE THING TO LEARN</div>
              <div className="skills-desc mt-3 text-center">
                To apply creativity to the websites
              </div>
            </div>
            <div className="cs-skill1  d-flex flex-column  align-items-center">
              {/* <img src={adobe} style={{ width: "20%" }} alt="" /> */}
              <div className="cs-skills-num">Node.js</div>
              <div className="skills-desc mt-5 ms-3 text-center">
              Node. js is a great option for developers who like to get their apps into production as fast as possible.
              </div>
              <div className="cs-skills-num mt-5">SKILLS</div>
              <div className="skills-desc">Databases,MYSQL,Rest APIs</div>
              <div className="cs-skills-num mt-5">FUTURE THING TO LEARN</div>
              <div className="skills-desc mt-3 text-center">
                Increase the performance more and more 
              </div>
            </div>
          </div>
        </div>
        </div>
        <div id="work-section">
        <div className="cs-work-section d-flex flex-column justfiy-content-center align-items-center">
          <div
            className="cs-about-section-txt "
            style={{
              borderBottom: "5px solid #0ab2cc",
              width: "200px",
              marginTop: "100px",
            }}
          >
            Work
          </div>
          <div className="work-wrapper d-flex justify-content-center align-items-center flex-wrap">
          <div className="cs-work1">
            <div className="cs-header-wrapper">
              <div className="header-txt pt-4">Team Leader</div>
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
              Team leader for Soulmed Healthcare website
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
              #LeaderShip #TeamWork 
            </div>
            <Button className="visit-btn" style={{background:"black"}}>VISIT</Button>
          </div>
          <div className="cs-work1">
            <div className="cs-header-wrapper">
              <div className="header-txt pt-4">Assistant</div>
            </div>
            <div className="skills-desc mt-3 text-center ">
              Help junior students in understanding the basics of react
            </div>
          
            <div className="skills-desc mt-3 px-2 text-center">
              #react #js
            </div>
            <Button className="visit-btn" style={{background:"black"}}>VISIT</Button>
          </div>
        </div>
        </div>
        </div>
        <div id="projects-section">
        <div className="cs-projects-section d-flex flex-column justfiy-content-center align-items-center">
          <div
            className="cs-about-section-txt "
            style={{
              borderBottom: "5px solid #0ab2cc",
              width: "200px",
              marginTop: "100px",
            }}
          >
            Projects
          </div>
          <div className="work-wrapper d-flex justify-content-center align-items-center mt-5 flex-wrap">
          <a href="https://www.google.com/" style={{textDecoration:"none"}}>
          <div className="proj1 ">
            <div className="proj-wrapper">
              <div className="header-txt">
                <img src={proj1} style={{height:"200px",width:"400px"}} alt="" />
              </div>
            </div>
            <div className="skills-desc mt-3 px-2 text-center " style={{fontSize:"25px"}}>
           Furniture Website
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
            #html , #css , angular
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
            13, May 2021
            </div>
            
          </div>
          </a>
          <a href="https://www.google.com/" style={{textDecoration:"none"}}>
          <div className="proj1 ">
            <div className="proj-wrapper">
              <div className="header-txt">
                <img src={proj2} style={{height:"200px",width:"400px"}} alt="" />
              </div>
            </div>
            <div className="skills-desc mt-3 px-2 text-center " style={{fontSize:"25px"}}>
            Jigar Website
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
            #html , #css , js, node.js
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
            13, May 2021
            </div>
            
          </div>
          </a>
          <a href="https://www.google.com/" style={{textDecoration:"none"}}>
          <div className="proj1 ">
            <div className="proj-wrapper">
              <div className="header-txt">
                <img src={proj3} style={{height:"200px",width:"400px"}} alt="" />
              </div>
            </div>
            <div className="skills-desc mt-3 px-2 text-center " style={{fontSize:"25px"}}>
          Portfolio Design
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
            #html , #css , react
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
            13, May 2021
            </div>
            
          </div>
          </a>
          <a href="https://www.google.com/" style={{textDecoration:"none"}}>
          <div className="proj1 ">
            <div className="proj-wrapper">
              <div className="header-txt">
                <img src={proj4} style={{height:"200px",width:"400px"}} alt="" />
              </div>
            </div>
            <div className="skills-desc mt-3 px-2 text-center " style={{fontSize:"25px"}}>
          School Website
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
              #html , #css , js
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
            13, May 2021
            </div>
            
          </div>
          </a>
          </div>
        </div>
        </div>
        <div id="contact-section">
        <footer className="cs-footer">
          <div id="contact-section">
            <div className="contact d-flex flex-column justify-content-center align-items-center">
              <div className="contact-form mt-5 w-100">
                <Form style={{ background: "none" }} className="form">
                  <div
                    className="contact-txt mb-5"
                    style={{ borderBottom: "2px solid black", color: "black" }}
                  >
                    Contact Me
                  </div>
                  <Form.Group className="mb-3" style={{ width: "500px" }}>
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ width: "500px" }}>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    style={{ width: "500px" }}
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Message"
                      style={{ height: "200px" }}
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    style={{ background: "black" }}
                    className="mb-3"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>

          <p>Vicky © 2022 | All Rights Reserved </p>
          <p>
            <a
              href="mailto:someone@example.com"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              MatthewWilliams@hotmail.com
            </a>
          </p>
        </footer>
      </div>
      </div>
    </div>
  );
}
