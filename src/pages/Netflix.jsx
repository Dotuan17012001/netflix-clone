import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () =>{
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
  
    <div>
      <Navbar isScrolled = {isScrolled}/>
    </div>
  )
}
