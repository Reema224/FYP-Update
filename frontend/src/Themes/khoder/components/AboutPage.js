import React, { useEffect, useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';
import LogoComponent from '../subComponent/LogoComponent';
import SocialIcons from '../subComponent/Socialicons';
import PowerButton from '../subComponent/PowerButtons';
//import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png';
import BigTitlte from '../subComponent/BigTitle';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//<br />
//I'm also a Desktop Developer Using C# to benefit the compant by a good System.          
//<br />
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 54vw;
  height: 68vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
 margin-top:-4rem;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;

const AboutPage = () => {
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


  const [project, setproject] = useState();
  console.log(project);
  

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/skill/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
  };
  useEffect(() => {
  
    sendRequest().then((data) => setproject(data.project.skilldetails));

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

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
        {project &&
            project.map((personal, index) => (
              <div>
        {personal.biography}
          <br />  <br />
          {personal.seeking}
          <br /> <br />
          {personal.hubby}          <br/>
          <br/>
          {personal.love}          </div>
            ))}
        </Main>
        <BigTitlte text="ABOUT" top="-2%" left="5%" />

      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
