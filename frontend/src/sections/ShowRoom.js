import React, { useRef } from 'react';
import '../index.css';
import styled, { keyframes } from 'styled-components';
import img from '../assets/Images/one.png';
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: #202020;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 1s;
  }
  & > *:last-child {
    animation-duration: 10s;
  }
`;
const move = keyframes`
0%{ transform: translateX(50%) };
100%{ transform: translateX(-10%)}

`;

const Row = styled.div`
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move} linear  alternate  infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  margin-right: 3rem;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;

  img {
    background-size: cover;
    width: 100%;
    height: auto;
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: #202020;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: 0.875em;
    color: #fff;
    font-weight: 600;
    line-height: 1.5rem;
  }
  h1 {
    font-size: 2em;
    color: #fff;
    font-weight: 600;
  }
`;
const Product = ({ img, name, role, chara, x, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  };
  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      {/* <img src={img} alt="no-img" />
      <Details>
        <div>
          <span>
            {' '}
            <h1>{name} </h1>
          </span>{' '}
          <br />
          <h1>{chara}</h1>
        </div>
        <div>
          <span>
            {' '}
            <h1>{role} </h1>
          </span>{' '}
          <br />
          <h1>{x}</h1>
        </div>
      </Details> */}
      <article class="review">
        <div class="img-container">
          <img
            src="https://images.unsplash.com/photo-1568044852337-9bcc3378fc3c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4Nzc4OA&ixlib=rb-1.2.1&q=85"
            id="person-img"
            alt=""
          />
        </div>
        <h4 className="author">Robin Frost</h4>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste,
          doloremque nihil?
        </p>
      </article>
    </ImgContainer>
  );
};
const ShowRoom = (img, name, role, chara, x, passRef) => {
  const Row1ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <Section>
      <div class="title">
        <h2 className="reviewheading">Our Reviews</h2>
        <div class="underline"></div>
      </div>
      <Row direction="none" ref={Row1ref}>
        <Product
          img={img}
          name={'Professionality'}
          role={'Credibility'}
          chara={'Gatanteed'}
          x={'Quality'}
          passRef={Row1ref}
        />
        <Product
          img={img}
          name={'Professionality'}
          role={'Credibility'}
          chara={'Gatanteed'}
          x={'Quality'}
          passRef={Row1ref}
        />{' '}
        <Product
          img={img}
          name={'Professionality'}
          role={'Credibility'}
          chara={'Gatanteed'}
          x={'Quality'}
          passRef={Row1ref}
        />{' '}
        <Product
          img={img}
          name={'Professionality'}
          role={'Credibility'}
          chara={'Gatanteed'}
          x={'Quality'}
          passRef={Row1ref}
        />
        {/* <article class="review">
          <div class="img-container">
            <img
              src="https://images.unsplash.com/photo-1568044852337-9bcc3378fc3c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4Nzc4OA&ixlib=rb-1.2.1&q=85"
              id="person-img"
              alt=""
            />
          </div>
          <h4 className="author">Robin Frost</h4>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            asperiores debitis incidunt, eius earum ipsam cupiditate libero?
            Iste, doloremque nihil?
          </p>
        </article> */}
      </Row>
      
    </Section>
  );
};

export default ShowRoom;
