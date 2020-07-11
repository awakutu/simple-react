import React from 'react';
import Section from './section';
import Biodata from './biodata';
import Kuantatif from './kuantatif';
import Kualitatif from './kualitatif';

function Main(){
    return (

      <body id="section"><br/><br/>
        <Section judul="Penilaian" text="Berikan Penilaian Kualitatif dan kuantatif sesuai keinginan kamu" />
        <Biodata/>
        <Kuantatif/>
        <Kualitatif/>
       </body>
    )
  }

  export default Main;