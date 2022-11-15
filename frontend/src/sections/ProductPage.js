import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import img from '../assets/Images/back.jpg';
import { Blogs } from '../data/BlogData';
import AnchorComponent from '../Components/Anchor';
import { motion } from 'framer-motion';
import Theme from './Theme';
import ProductPageTheme from './ProductPageTheme';

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  background-color: rgba(32, 32, 32,0.8);
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
const Title = styled(motion.div)`
  position: absolute;
  top: 2%;
  left: 14%;
  color: #fff;
  z-index:5;



  padding-bottom:0px;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
   
    
  }
  h1 {
    font-size: 6em;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin-right:2%;
  }
  h2{ 

  }
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
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}
const ProductPage = () => {
    const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
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
  
      <Center>
            <Grid>
              {Blogs.map((blog) => {
                return <ProductPageTheme key={blog.id} blog={blog} />;
              })}
            </Grid>
          </Center>
        <AnchorComponent number={numbers} />
      </Container>
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1  variants ={ item } data-scroll data-scroll-delay="0.13" data-scroll-speed="4 ">
           FIND
          </motion.h1>
          <motion.h1  variants ={ item} data-scroll data-scroll-delay="0.09" data-scroll-speed="4 ">
            YOUR
          </motion.h1>
     
          <motion.h1 variants ={ item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4 ">
            PORT
          </motion.h1>
          
          <motion.h1 variants ={ item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4 ">
            FOLIO
          </motion.h1>
        </div>
      
      </Title> 
    </MainContainer>
  );
};

export default ProductPage;
