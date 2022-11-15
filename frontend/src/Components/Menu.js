import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MessageIcon from '@mui/icons-material/Message';
import { useNavigate } from 'react-router-dom';
const Nav = styled.nav`
background:#202020;
width: max-content;
display:block;
padding: 0.7rem 1rem;
z-index:2;
position:absolute;
left:40%;
top:40rem;
display:flex;
gap:0.8rem;
border-radius:3rem;
backdrop-filter: blur(15px);

a{
    z-index:-1;
    background: #fff;
    padding:0.4em;
    border-radius:50%;
    display:flex;
    color: #202020;
    font-size:0.2rem;
    cursor: pointer;
}

`
const Menu = () => {
    const navigate = useNavigate();
    const about = () =>{
        navigate('#about')
        window.location.reload()  
      }
  return (
  <Nav>
    <a  > <HomeIcon/></a>
    <a onClick={about}> <InfoIcon/></a>
    <a href="#service"> <VolunteerActivismIcon/></a>
    <a href="#sign"> <AccountCircleIcon/></a>
    <a href="#"> <MessageIcon/></a>


    </Nav>
  )
}

export default Menu