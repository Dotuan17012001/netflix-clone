import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import Header from "../components/Header";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {firebaseAuth} from "../utils/firebase-config"
import {useNavigate} from "react-router-dom";

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSign = async() => {
      try {
        const {email,password} = formValues;
        await createUserWithEmailAndPassword(firebaseAuth,email,password)
      } catch (error) {
        console.log(error)
      }
  }

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/")
  })

  return (
    <Container showPassword = {showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login={true} />
        <div className="body flex colum a-center j-center">
          <div className="text flex colum">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
          </div>
          <div className="form">
            <input 
                type="email" 
                placeholder="Email Address" 
                name="email" 
                value={formValues.email} 
                onChange={(event)=> 
                    setFormValues({...formValues,[event.target.name]:event.target.value})}/>
            {
               showPassword && <input  
                type="password"
                placeholder="Password" 
                name="password" 
                value={formValues.password} 
                onChange={(event)=>
                  setFormValues({...formValues,[event.target.name]:event.target.value})}/>
            }
            {
              !showPassword &&  <button onClick={()=>setShowPassword(true)}>Get Started</button>
            }
          </div>
          <button onClick={()=>handleSign()}>Sign Up</button>
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
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        width: 60%;
        grid-template-columns:${({showPassword}) => showPassword ? "1fr 1fr":"2fr 1fr"};
        input {
          color: black;
          font-size: 1.2rem;
          padding: 1.5rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-size: 1.05rem;
          font-weight: bolder;
        }
      }
      button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          border-radius: 0.2rem;
          font-size: 1.05rem;
          font-weight: bolder;
        }
    }
  }
`;
