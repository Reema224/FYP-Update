import React from 'react';
import styled from 'styled-components';
import Mainvideo from '../assets/video2-2 (1).mp4';
import { motion } from 'framer-motion';
import Menu from './Menu';
const VideoContainerx = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 3,
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0)`};
`;
const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
    z-index:5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom:0px;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
    font-family: 'Montserrat', sans-serif;

    .spaceperm{
      padding-right: 2.2rem;
    }
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 7em;
    font-weight:400;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }
  h2{ 
    font-family: 'Montserrat', sans-serif;
    font-weight:200;


  }
`;
const CoverVideo = () => {
  return (
    <VideoContainerx>
      <DarkOverlay />

      <Title variants={container} initial="hidden" animate="show">
        <div>
          <div className='spaceperm'>
          <motion.h1  variants ={ item } data-scroll data-scroll-delay="0.13" data-scroll-speed="4 ">
         Port
          </motion.h1>
          <motion.h1  variants ={ item} data-scroll data-scroll-delay="0.09" data-scroll-speed="4 ">
          folio
          </motion.h1>
          </div>
          <motion.h1 variants ={ item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4 ">
            Buil
          </motion.h1>
          <motion.h1 variants ={ item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4 ">
            der
          </motion.h1>
        </div>
        <motion.h2 variants ={ item } data-scroll data-scroll-delay="0.04" data-scroll-speed="2 ">
        Because You’re Worth It
        </motion.h2>
      </Title>
    
      <video src={Mainvideo} type="video/mp4" autoPlay muted loop></video>

    </VideoContainerx>
  );
};

export default CoverVideo;
