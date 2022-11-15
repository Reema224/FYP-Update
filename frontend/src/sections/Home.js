import React from 'react';
import styled from 'styled-components';
import CoverVideo from '../Components/CoverVideo';
import Logo from '../Components/Logo';
import Menu from '../Components/Menu';
import Navbar from '../Components/Navbar';
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  
`;
const Home = () => {
  return (
    <Section>
      <CoverVideo />
      <Logo />

    </Section>
  );
};

export default Home;
