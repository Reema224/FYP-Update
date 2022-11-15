import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import logox from '../assets/Icons/logo (2).png';

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 3rem;
  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;
  .img{
    margin-right:3rem;
  }
  a{
    display:flex;
    align-items:flex-end;
  }

  svg {
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
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
    delay:2,
    ease: 'easeInOut',
  }
},
}
const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  
  transition: {
    duration: 7,
    ease: 'easeInOut',
  }
},
}
const Text = styled(motion.span)`
font-size:${props => props.theme.fontlg};
color:${props => props.theme.text};
padding-bottom: 0.5rem;
margin-left:4.7rem;
`
const Logo = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <Container>
      <Link to="/">
      <motion.path variants={textVariant} initial="hidden" animate="visible"/>

        <motion.img className="img" variants={textVariant} initial="hidden" animate="visible" src={logox}
          width="80px"
       
    alt="das"
        >

   
        </motion.img>
        <Text variants={textVariant} initial="hidden" animate="visible">
    
        </Text>
      </Link>

     
    </Container>
  );
};

export default Logo;
