import logo from './logo.svg';
import './App.css';


import love from './img/love.png';

import fairuz_maya from './img/fairuz_maya.jpeg';


import './App.css';

import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';



import Header from './component/Header';
import Pesan from './component/Pesan';
import Konten1 from './component/Konten1';
import Achievement from './component/Achievement';

import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';


// import moduleName from '';

// import moduleName from 'bootstrap';

// import Nav from 'bootstrap';

function App() {
  return (

    <Router>
    <div className="App">
    {/* <Konten1/> */}
       <Header/>
       {/* <Home/> */}
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/achievement" element={<Achievement/>} />
              <Route exact path="/pesan" element={<Pesan/>} />
          </Routes>
    </div>
    </Router>
  );
}



const Home = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    

    return (
        <header className="App-header">

      {/* <div id='perkenalan_1'> */}
        <div className="row header_bawah  d-flex justify-content-around">
  
         <div className="col-4 logo-kiri" data-aos="fade-left"   data-aos-duration="1000">
         <img src={love} className="App-logo" alt="logo" />
         </div>


         <div className="col-4 logo-tengah" data-aos="fade-up"  data-aos-duration="1000" >
          <center>
          <img src={fairuz_maya} className="App-logo-tengah" alt="logo_fm" />
          </center>
         </div>


         <div className="col-4 logo-kanan"  data-aos="fade-right"  data-aos-duration="1000">
         <img src={love} className="App-logo-dua" alt="logo" />
         </div>



        </div>

        
      
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}



        <div data-aos="zoom-in" data-aos-duration="1000">
        {'\n'}
        <h1 className='mt-3' >Selamat Anniversary Untuk Fairuz Firjatullah dan Maya Kencana Wulandari !</h1>


        <p className='paragraf_biasa'>
          Setiap tanggal 6 merupakan Anniversary antara Fairuz dan Maya, dimana 6 November 2022 merupakan hari terbentuknya hubungan kami dalam ikatan yang lebih dalam hingga menjadi supporting system satu sama lain yang begitu penting
        </p>

        <a className='btn btn-danger' href="/achievement" >Achievement Kita</a>

        </div>

   


      
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}


        {/* </div> */}



      



      </header>


    )






}

export default App;
