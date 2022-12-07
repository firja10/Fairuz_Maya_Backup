import logo from '../logo.svg';
import love from '../img/love.png';


import car_img_1 from '../img/aktivitas/car_img_1.png'
import car_img_2 from '../img/aktivitas/car_img_2.png'
import car_img_3 from '../img/aktivitas/car_img_3.png'

import fairuz from '../img/pesan/fairuz.jpg';



import Carousel from 'react-bootstrap/Carousel';


import '../App.css';

import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


function Aktivitas() {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    

    return (
      <header className="App-header-pesan">

        <div className="container">
            <div className="content">
                <div className="row">
                    <div className='col-4'>

                    <img
          className="d-block w-75 rounded"
          src={fairuz}
          alt="Fairuz Firjatullah"
        />

                    </div>

                    <div className='col-8'>

                            <h2>Pesan Untuk Maya dari Fairuz</h2>
                            <p>adasdsadsadddasdadasdaassad</p>


                    </div>
                </div>
            </div>
        </div>





      </header>


    )


}


export default Aktivitas;