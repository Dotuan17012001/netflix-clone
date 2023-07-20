import styled from "styled-components"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import {FaSearch,FaPowerOff} from "react-icons/fa"
import { useState } from "react";
import {firebaseAuth} from "../utils/firebase-config"
const Navbar = (props) => {
    const {isScrolled} = props;
    const links = [
        {name:"Home", link:"/"}, 
        {name:"TV Shows", link:"/tv"}, 
        {name:"Movies", link:"/movies"}, 
        {name:"My List", link:"/mylist"}, 
    ];

    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);

    const signOut = () => {

    }

    return ( 
        <Container>
            <nav className={`flex ${isScrolled ? "scrolled":""}`}>
                <div className="left flex a-center">

                    <div className="brand flex a-center j-center">
                        <img src={logo} alt="logo" />
                    </div>

                    <ul className="links flex">
                        {
                            links.map((item,linkItem) => {
                                return (
                                    <li key={item.name}>
                                        <Link to={linkItem.link}>{item.name}</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>

                </div>

                <div className="right flex a-center">
                    <div className={`search ${showSearch?"show-search":""}`}>
                       <button onFocus={()=>setShowSearch(true)} 
                       onBlur={ () => {
                           if(!inputHover) setShowSearch(false)
                        }}
                        > 
                        <FaSearch/>
                        </button>
                        <input type="text" placeholder="Search"
                        onMouseEnter={()=>{setInputHover(true)}}
                        onMouseLeave={()=>{setInputHover(false)}}
                        onBlur={()=>{
                            setShowSearch(false)
                            setInputHover(false)
                        }}
                        />
                    </div>
                    <button onClick={()=>signOut(firebaseAuth)}>
                      <FaPowerOff/>
                    </button>
                </div>
            </nav>
        </Container>
     );
}
 
export default Navbar;

const Container = styled.div`
    .scrolled{
       background-color: black;
    }
    nav{
        position: sticky;
        top: 0;
        height: 6.5rem;
        width: 100%;
        justify-content: space-between;
        position: fixed;
        z-index: 2;
        padding: 0 4rem;
        align-items: center;
        transition: 0.3s ease-in-out;
        .left{
            gap: 2rem;
            .brand{
                img{
                    height: 4rem;
                }
            }

            .links{
                list-style: none;
                gap: 2rem;
                li{
                    a{
                        text-decoration: none;
                        color: white;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        font-size: 1.2rem;
                    }
                }
            }
        }
        .right{
            gap: 1rem;
            button{
                background-color: transparent;
                border: none;
                cursor: pointer;
                &:focus{
                    outline: none;
                }
                svg{
                    color: red;
                    font-size: 1.2rem;
                }
            }
            .search{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.4rem;
                padding: 0.2rem;
                button{
                    background-color: transparent;
                    svg{
                        color: white;
                    }
                }
                input{
                    width: 0;
                    opacity: 0;
                    visibility: hidden;
                    transition: 0.3s ease-in-out;
                    background-color: transparent;
                    border: none;
                    color: white;
                    &:focus{
                        outline: none;
                    }
                }
            }
            .show-search{
                border: 1px solid white;
                background-color: rgba(0,0,0,0.6);
                input{
                    width: 100%;
                    opacity: 1;
                    visibility: visible;
                    padding: 0.3rem;
                }
            }
        }
    }
`