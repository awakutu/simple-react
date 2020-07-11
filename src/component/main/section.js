import React from 'react';
import {
  BrowserRouter as Router} from 'react-router-dom';

function Section(props) {
  return (
    <>
      <Router>
        <div className="section" id="section">
         <center> 
         <h1> {props.judul} </h1>
          <h2> {props.text} </h2>
          </center>
        </div>
      </Router>
    </>
  )
}

export default Section;