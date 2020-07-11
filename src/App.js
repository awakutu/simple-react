import React from 'react';
import Header from './component/header/header';
import Main from './component/main/main';
import Footer from './component/footer/footer';
import './App.css';
import {
  BrowserRouter as Router,
  Route} from 'react-router-dom';
function Homepage(){
  return(
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}
function AppRouter(){
  return(
    <Router>
      <Route path="/" exact component={Homepage} />
      {/* <Route path="/more" component={Main} /> */}
    </Router>
  )
}
export default AppRouter;



// function App() {
//   return (
//     <>
//    <header>
//       <div class="container">
//         <div class="kiri">
//           <img class="logo" src={logo}/>
//         </div>
//         <div class="kanan">
//           <a href="#kuantatif">Kuantatif</a>
//           <a href="#kualitatif">Kualitatif</a>
//           <a href="#tentang">Tentang</a>
//         </div>
//       </div>
//     </header>
//     <main>
//     <div class="top-wrapper">
//       <div class="container">
//         <h1>Penilaian</h1>
//         <h2>Berikan Penilaian Kualitatif dan kuantatif sesuai keinginan kamu</h2>
//       </div>
//     </div>

//     <h1 id="kuantatif">Penilaian Kuantatif</h1>
//     <h4>Berilah penilaian dari form yang telah disediakan</h4>
  
//     <h1 id="kualitatif">Penilaian Kualitatif</h1>
//     <h4>Berilah penilaian dari form yang telah disediakan</h4>
//     </main>
//     <footer>
//     <p> &#169; 2020, Rizky Tri Sulistyo</p>	
//     </footer>
//     </>
//   );
// }





// export default App;
