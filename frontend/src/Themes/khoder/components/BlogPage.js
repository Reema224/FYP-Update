import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import LogoComponent from '../subComponent/LogoComponent';
import SocialIcons from '../subComponent/Socialicons';
import PowerButton from '../subComponent/PowerButtons';
import axios from 'axios';
import { Blogs } from '../data/BlogData';
import BlogComponent from './BlogComponent';
import AnchorComponent from '../subComponent/Anchor';
import BigTitle from '../subComponent/BigTitle';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

// Framer-motion config
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

const BlogPage = () => {
  const { id } = useParams();
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);
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
      .get(`http://localhost:4000/api/project/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    
    return data;
  };
  useEffect(() => {
  
    sendRequest().then((data) => setproject(data.project.projectdetails));

  }, []);
  
  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
      {perosnalsx &&
            perosnalsx.map((personal, index) => (
              <div>
                
        <LogoComponent name={personal.firstname}   />
          </div>
            ))}
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers} />
        <Center>
          <Grid>
            {project && project.map((blog) => {
              return <BlogComponent key={blog.id} title={blog.Title} Description={blog.Description} Link={blog.Link}  Tags={blog.Tags} />;
            })}
          </Grid>
        </Center>
        <BigTitle text="BLOG" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
