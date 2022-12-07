import logo from '../logo.svg';
import love from '../img/love.png';


import car_img_1 from '../img/aktivitas/car_img_1.png'
import car_img_2 from '../img/aktivitas/car_img_2.png'
import car_img_3 from '../img/aktivitas/car_img_3.png'


import Carousel from 'react-bootstrap/Carousel';


import '../App.css';

import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


function Achievement() {


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
          src={car_img_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Selalu Berjuang bersama</h3>
          <p>Kita selalu berjuang bersama dalam kondisi apapun, bersuka cita dan berduka cita bersama</p>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car_img_2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Saling Support 1 Sama Lain</h3>
          <p>Selalu saling mendukung 1 sama lain, karena dari hubungan inilah kami bisa menggapai cita - cita kita masing - masing dan bersama</p>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car_img_3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Saling Mencintai dan Menyayangi </h3>
          <p>
            Saling mencintai dan menyayangi adalah aktivitas kami yang menunjang kehidupan kami agar hidup kami menjadi lebih bahagia dan berwarna
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </header>


    )


}


export default Achievement;