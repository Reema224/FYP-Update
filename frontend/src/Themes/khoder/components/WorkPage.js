import React, { useEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';
import { motion } from 'framer-motion';
import LogoComponent from '../subComponent/LogoComponent';
import SocialIcons from '../subComponent/Socialicons';
import PowerButton from '../subComponent/PowerButtons';
import axios from 'axios';
import { Work } from '../data/WorkData';
import Card from '../subComponent/Card';
import { YinYang } from './AllSvg';
import BigTitlte from '../subComponent/BigTitle';
import { useParams } from 'react-router-dom';
//import BigTitlte from '../subComponent/BigTitlte';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 500vh;
  position: relative;
  display: flex;
  align-items: center;
  padding:2rem;
`;
const Down = styled.div `
position:absolute;
top:rem;
`
const Main = styled(motion.ul)`
  position: fixed;
  @media only screen and (max-width:415px){
  top:6rem
  }
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 70vh;
  display: flex;
  color: white;
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;
// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const { id } = useParams();

  const [perosnalsx, setperosnals] = useState();
  console.log(perosnalsx);
  const sendRequestname = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/personal/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
  };
  useEffect(() => {
    sendRequestname().then((data) => setperosnals(data.personals.personals));
  }, []);
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        'rotate(' + -window.pageYOffset + 'deg)');
    };

    window.addEventListener('scroll', rotate);
    return () => {
      window.removeEventListener('scroll', rotate);
    };
  }, []);
  const [experience, setexperience] = useState();

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/experience/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
  };
  useEffect(() => {
  
    sendRequest().then((data) => setexperience(data.project.expereincedetails));

  }, []);
  
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
      {perosnalsx &&
            perosnalsx.map((personal, index) => (
              <div>
        <LogoComponent  name={personal.firstname}  theme="dark" />
        </div>
            ))}
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {experience && experience.map((d) => (
            <Card key={d.id} org={d.organization} Link={d.Link} Desc={d.Description} posit={d.Position} skill={d.Skill} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
<BigTitlte text="Work" top='10%' right="20%" />
       
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
