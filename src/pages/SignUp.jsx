import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import Header from "../components/Header";
const SignUp = () => {
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login={true}/>
        <div className="body flex colum a-center j-center">
          <div className="text flex colum">
            <h1>Unlimited movies, TV show and more</h1>
            <h4>Watch anywhere,. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create</h6>
          </div>
          <div className="form">
            <input type="email" placeholder="Email Address" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button>Get Started</button>
          </div>
          <button>Login</button>
        </div>
      </div>
    </Container>
  );
};
export default SignUp;
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-rows: 15vh 85vh;
  }
`;
