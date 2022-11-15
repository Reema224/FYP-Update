import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import photo from "../images/photo.png";
import adobe from "../images/adobe.png";
import ux from "../images/ux.png";
import "./Rima.css";
import web from "../images/website.jpeg";
import book from "../images/book.jpeg";
import brand from "../images/brand1.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import graphic from "../images/graphic.PNG";
import proj1 from "../images/product1.webp"
import proj2 from "../images/logo.webp"
import proj3 from "../images/proj2.png"
import proj4 from "../images/proj4.jpg"
import { useState } from "react";

export default function Portfolio() {
 
  return (
    <div id="home-section">
    
      <div className="home">
      {/* <Navbar style={{ marginRight: "50px" }} className="navbar-wrapper">
        <Container fluid>
          <Navbar.Brand
            href="#home-section"
            style={{
              fontWeight: "bold",
              letterSpacing: ".14rem",
              color: "#e6ab1f",
              marginLeft: "30px",
            }}
          >
            ViCKY
          </Navbar.Brand>

          <Nav
            style={{
              fontWeight: "bold",
              letterSpacing: ".14rem",
              color: "white",
            }}
            className=" nav-item"
          >
           
            <Nav.Link
             href="#home-section"
              style={{ color: "white", color: "#e6ab1f", marginRight: "30px" }}
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
        </Container>
      </Navbar> */}
      <Navbar className="navbar-wrapper me-auto" expand="lg"  style={{ marginRight: "50px" }} >

      <Navbar.Brand
            href="#home-section"
            style={{
              fontWeight: "bold",
              letterSpacing: ".14rem",
              color: "#e6ab1f",
              marginLeft: "30px",
            }}
          >
            ViCKY
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
              style={{ color: "white", color: "#e6ab1f", marginRight: "30px" }}
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
      <div className="header-info d-flex justify-content-center">
        <img src={graphic} className="" alt="" />
        <div className="header-txt d-flex flex-column justify-content-center align-items-center mt-5 ">
          <h2 className="mt-4" style={{color:"black"}}> Hi, my name is Vicky Smith</h2>
          <h2 className="mt-4" style={{color:"black"}}>I'm Graphic Designer</h2>
          <h2 className="mt-4" style={{color:"black"}}>Ambitious, self learner, diligent and organized. </h2>
          {/* <h1>Thoughtful Brand Design</h1>
          <p>for independent creatives</p> */}
          <a href="#about-section">
            {" "}
            <Button
              style={{
                backgroundColor: "#e6ab1f",
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
       <div className="about d-flex  justify-content-center align-items-center flex-wrap ">
        <div className="title me-5">About Me</div>
        <div className="about-info mt-5 d-flex flex-column justify-content-center ms-5">
          <div className="about-parag ">
            I'm an award-winning Graphic Designer With agency experience
          </div>
          <div className="about-parag  ">
            I'm well-versed in digital branding, and print design
          </div>
          <div className="about-parag  ">
            {" "}
            knows how to work at a brisk pace
          </div>
          <div className="about-parag  ">
            Also, I'm an avid reader has even designed a few books cover to
            cover.
          </div>
        </div>
      </div>
      </div>
      <div id="skills-section">
      <div className="skills d-flex flex-column justify-content-center align-items-center">
        <div
          className="skills-title"
          style={{ borderBottom: "2px solid #e6ab1f" }}
        >
          Skills
        </div>
        <div className="your-skills d-flex justify-content-center mt-5 flex-wrap">
          <div className="skill1  d-flex flex-column  align-items-center">
            <img src={photo} style={{ width: "20%" }} alt="" />
            <div className="skills-num">Photoshop</div>
            <div className="skills-desc mt-5 ms-3 ">
              My impression of this software is very good. It's a great tool
              that helps me develop my imagination and my graphic design skills.
            </div>

            <div className="experience mt-5">SKILLS</div>
            <div className="skills-desc">
              Photo Editing, Typography , Color Theory
            </div>
            <div className="experience mt-5">FUTURE THING TO LEARN</div>
            <div className="skills-desc mt-3 text-center">
              To apply creativity to images on an editing software
            </div>
          </div>
          <div className="skill1  d-flex flex-column  align-items-center">
            <img src={adobe} style={{ width: "20%" }} alt="" />
            <div className="skills-num">Adobe premier</div>
            <div className="skills-desc mt-5 ms-3 text-center">
              It's a massive program with an enormous set of capabilities that
              even a lengthy review like this can hardly do justice.
            </div>
            <div className="experience mt-5">SKILLS</div>
            <div className="skills-desc">Keyframe and Speed Ramping</div>
            <div className="experience mt-5">FUTURE THING TO LEARN</div>
            <div className="skills-desc mt-3 text-center">
              increase my versatility by learning Adobe Premiere Pro as well
            </div>
          </div>
          <div className="skill1 d-flex flex-column  align-items-center">
            <img src={ux} style={{ width: "35%" }} alt="" />
            <div className="skills-num">UI/UX Designer</div>
            <div className="skills-desc  mt-5 ms-3">
              People who work in UI can help businesses improve their digital
              products and increase customer satisfaction.
            </div>
            <div className="experience mt-5">SKILLS</div>
            <div className="skills-desc">Prototyping, Visual Communication</div>
            <div className="experience mt-5">FUTURE THING TO LEARN</div>
            <div className="skills-desc mt-3 text-center">
              Learning to code, brushing up on design strategy and team
              leadership
            </div>
          </div>
        </div>
      </div>
      </div>
      <div id="work-section">
     <div className="work d-flex justify-content-center align-items-center flex-column ">
        <div
          className="work-title"
          style={{ borderBottom: "2px solid #e6ab1f" }}
        >
          Work
        </div>
        <div className="work-wrapper d-flex justify-content-center align-items-center flex-wrap">
          <div className="work1">
            <div className="header-wrapper">
              <div className="header-txt pt-4">Team Leader</div>
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
              Team leader for Trifold Brochures for Business in Beirut
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
              #LeaderShip #TeamWork 
            </div>
            <Button className="visit-btn" style={{background:"black"}}>VISIT</Button>
          </div>
          <div className="work1">
            <div className="header-wrapper">
              <div className="header-txt pt-4">Assistant</div>
            </div>
            <div className="skills-desc mt-3 text-center ">
              Help junior students in understanding the basics of design brands
            </div>
          
            <div className="skills-desc mt-3 px-2 text-center">
              #photoshop #adobe 
            </div>
            <Button className="visit-btn" style={{background:"black"}}>VISIT</Button>
          </div>
        </div>
      </div>
      </div>
      
      <div id="projects-section">
  <div className="work d-flex justify-content-center align-items-center flex-column ">
        <div
          className="work-title"
          style={{ borderBottom: "2px solid #e6ab1f" }}
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
            Product Packaging Design
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
              #photoshop , #adobe , premier
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
            13, May 2021
            </div>
            
          </div>
          </a>
          <a href="https://www.google.com/" style={{textDecoration:"none"}}>
          <div className="proj1">
            <div className="proj-wrapper">
              <div className="header-txt "><img src={proj2} alt="" style={{height:"200px",width:"400px"}}/></div>
            </div>
            <div className="skills-desc mt-3 px-2 text-center " style={{fontSize:"25px"}}>
            Brand and Logo Design
            </div>
          
            <div className="skills-desc mt-3 px-2 text-center">
              #UI/UX Design , #Figma
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
             6, July 2021
            </div>
           
          </div>
          </a>
          <a href="https://www.google.com/" style={{textDecoration:"none"}}>
          <div className="proj1">
            <div className="proj-wrapper">
              <div className="header-txt "><img src={proj3} alt="" style={{height:"200px",width:"400px"}}/></div>
            </div>
            <div className="skills-desc mt-3 px-2 text-center " style={{fontSize:"25px"}}>
         Website Design
            </div>
          
            <div className="skills-desc mt-3 px-2 text-center">
              #UI/UX Design , #Figma
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
             6, March 2021
            </div>
           
          </div>
          </a>
          <a href="https://www.google.com/" style={{textDecoration:"none"}}>
          <div className="proj1">
            <div className="proj-wrapper">
              <div className="header-txt "><img src={proj4} alt="" style={{height:"200px",width:"400px"}}/></div>
            </div>
            <div className="skills-desc mt-3 px-2 text-center " style={{fontSize:"25px"}}>
            Website Design for the royal caterers
            </div>
          
            <div className="skills-desc mt-3 px-2 text-center">
              #UI/UX Design , #Figma
            </div>
            <div className="skills-desc mt-3 px-2 text-center">
             6, July 2021
            </div>
           
          </div>
          </a>
        </div>
      </div>
</div>
<footer className="footer">
<div id="contact-section">
   <div className="contact d-flex flex-column justify-content-center align-items-center">
        
        <div className="contact-form mt-5 w-100">
        <Form style={{background:"none"}} className="form"   >
        <div className="contact-txt mb-5"
        style={{ borderBottom: "2px solid black",color:"black"}}>Contact Me</div>
          <Form.Group className="mb-3" style={{width:"500px"}}>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3"  style={{width:"500px"}}>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"  style={{width:"500px"}}>
            <Form.Control as="textarea" rows={3} placeholder="Message" style={{height:"200px"}} />
          </Form.Group>
          <Button type="submit" style={{background:"black"}} className="mb-3">
            Submit
          </Button>
        </Form>
        </div>
      </div>
       </div>
  
        <p>Vicky © 2022 | All Rights Reserved </p>
        <p><a href="mailto:someone@example.com" style={{textDecoration:"none",color:"white"}}>vicky@hotmail.com</a></p>
      </footer> 
    </div>
     
    </div>
   
    
  );
}
