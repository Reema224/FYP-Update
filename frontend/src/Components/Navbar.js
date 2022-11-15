import React, { useState } from 'react'
import styled from 'styled-components';
import logox from '../assets/Icons/logo (2).png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Section = styled.div`
color: white;
 position:fixed;
 top:0rem;
 right:0;
 left:0;
 z-index: 999;
 background-color:#202020;

 img{
  cursor:pointer;
 }


`;
const OverLay = styled.div`

`;
const Container = styled.div`
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
   width:80px;
    margin-right: 40px;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 20px;
    cursor: pointer;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 20px;
    cursor: pointer;
  }
`;
const textVariant = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x:-5,
    
    transition: {
      duration: 2,
      delay:0.5,
      ease: 'easeInOut',
    }
  },
}

const Navbar = () => {
  const[isscrolled, setisscolled] = useState(false);
  window.onscroll=()=>{
      console.log(window.pageYOffset)
      setisscolled(window.pageYOffset===0?false:true);
      return()=>(window.onscroll=null);
  }
  const navigate  = useNavigate();  
  const dashnav =()=>{
      navigate('.About')
    }
    const regisnav = ()=>{
      navigate('/Registiration-Form')
    }
    const home = () =>{
      navigate('/')
    }
  return (
    <OverLay>
    <Section className={isscrolled ? "scrolling":"noscrolling"} >
      <Container>
        <Left>
          <motion.img  onClick={home} variants={textVariant} initial="hidden" animate="visible"
            src={logox}
            alt="Logo"
          ></motion.img>
          <motion.span  onClick={regisnav} variants={textVariant} initial="hidden" animate="visible" >About-Us</motion.span>
          <motion.span  variants={textVariant} initial="hidden" animate="visible">Clients-Page</motion.span>
        </Left>
        <Right>
<motion.span variants={textVariant} initial="hidden" animate="visible"> SignIN-SignUp</motion.span>
          
        </Right>
      </Container>
    </Section>
    </OverLay>
  )
  }

export default Navbar