import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import Header from "../components/Header";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      const { email, password } = formValues;
      console.log(formValues)
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex colum a-center j-center">
          <div className="form flex colum a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex colum">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formValues.email}
                  onChange={(event) =>
                    setFormValues({
                      ...formValues,
                      [event.target.name]: event.target.value,
                    })
                  }
                />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formValues.password}
                    onChange={(event) =>
                      setFormValues({
                        ...formValues,
                        [event.target.name]: event.target.value,
                      })
                    }
                  />
                  <button onClick={handleLogIn}> Log In</button>
             
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Login;
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
    .form-container{
      gap: 2rem;
      height: 85vh;
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      .form{
        padding: 2rem;
        background-color: #000000b0;
        width: 27vw;
        height: 45vh;
        gap: 2rem;
        color: white;
        .container{
          gap:2rem;
          margin-top: 0.1rem;
          input{
            padding: 0.8rem 1rem; 
            width: 18rem;

          }
          button{
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
    }
  }
`;
