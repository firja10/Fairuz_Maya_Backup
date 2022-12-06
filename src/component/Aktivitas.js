import logo from '../logo.svg';
import love from '../img/love.png';


import car_img_1 from '../img/aktivitas/car_img_1.jpeg'
import car_img_2 from '../img/aktivitas/car_img_2.png'


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
        <header className="App-header-aktivitas">

<Carousel fade={true}>
      <Carousel.Item>
        <img
          className="d-block w-100 gambar_carousel"
          src={car_img_2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Selalu Berjuang bersama</h3>
          <p>Kita selalu berjuang bersama dalam kondisi apapun</p>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car_img_1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </header>


    )


}


export default Aktivitas;