import React from 'react';
import logo from './logo.png';

function Header() {
  return (
    <>
    <header id="header">
    <div class="container">
         <div class="kiri">
           <img class="logo" alt="logo"src={logo}/>
         </div>
         <div class="kanan">
           <a href="#kuantatif">Kuantatif</a>
           <a href="#kualitatif">Kualitatif</a>
           <a href="#tentang">Tentang</a>
         </div>
       </div>
    </header>
    </>
  )
}

export default Header;