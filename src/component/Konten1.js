import logo from '../logo.svg';

import love from '../img/love.png';

import fairuz_maya from '../img/fairuz_maya.jpeg';


import '../App.css';

import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


function Konten1() {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    

    return (
        <header className="App-header">

      {/* <div id='perkenalan_1'> */}
        <div className="row header_bawah  d-flex justify-content-around">
  
         <div className="col-4 logo-kiri" data-aos="fade-left" >
         <img src={love} className="App-logo" alt="logo" />
         </div>


         <div className="col-4 logo-tengah" data-aos="fade-up" >
          <center>
          <img src={fairuz_maya} className="App-logo-tengah" alt="logo_fm" />
          </center>
         </div>


         <div className="col-4 logo-kanan"  data-aos="fade-right">
         <img src={love} className="App-logo-dua" alt="logo" />
         </div>



        </div>

        
      
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}



        <div data-aos="zoom-in">
        {'\n'}
        <h1 className='mt-3' >Selamat Anniversary Untuk Kita !</h1>


        <p className='paragraf_biasa'>
          Setiap tanggal 6 merupakan Anniversary antara Fairuz dan Maya, dimana 6 November 2022 merupakan hari terbentuknya hubungan kami dalam ikatan yang lebih dalam hingga menjadi supporting system satu sama lain yang begitu penting
        </p>

        <a className='btn btn-danger' href="serviskita.com" >Achievement Kita</a>

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


export default Konten1;