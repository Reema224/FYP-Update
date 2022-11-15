import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled(motion.a)`
  width: 26rem;
  text-decoration: none;
  height: 26rem;
  padding: 1rem;
  color: ${(props) => props.theme.body};
  border: 2px solid #202030;
  border-radius: 20px;
  backdrop-filter: blur(2px);
  background-color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;
  &:hover {
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    transition: all 0.3s ease;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 1);
    transform: translate(5%,-5%);
    background-color: #00000070;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  border-radius: 20px;

  width: 100%;
  height: 80%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
  font-family: 'Montserrat', sans-serif;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
  font-family: 'Montserrat', sans-serif;
`;
const Date = styled.span`
  padding: 0.5rem 0;
  font-family: 'Montserrat', sans-serif;
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

const Theme = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  var id = '';
  return (
    <Container variants={Item}>
      <Box href={link + id}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </HashTags>
        <Date>{}</Date>
      </Box>
    </Container>
  );
};

export default Theme;
