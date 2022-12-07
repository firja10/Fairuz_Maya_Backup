import logo from '../logo.svg';
import love from '../img/love.png';


import car_img_1 from '../img/aktivitas/car_img_1.png'
import car_img_2 from '../img/aktivitas/car_img_2.png'
import car_img_3 from '../img/aktivitas/car_img_3.png'

import fairuz from '../img/pesan/fairuz.jpg';
import maya from '../img/pesan/maya.jpeg';


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

        <div className="card bg-danger" id="pesanFairuz" data-aos="fade-left"  data-aos-duration="1000">
            <div className="content">
                
                <div className="row mb-4">
                    <div className='col-4'>

        <img
          className="d-block w-75 rounded"
          src={fairuz}
          alt="Fairuz Firjatullah"
        />
                    </div>
                    <div className='col-8'>

                            <h2>Pesan Untuk Maya dari Fairuz</h2>
                            <p>Terima kasih atas semua support dan dukungan yang telah engkau berikan. Aku seneng banget bisa ketemu orang 
                                yang tepat buat aku setelah akhirnya trust issue terhadap perempuanku muncul bertahun - tahun. Entah kenapa aku merasa aku menemukan 
                                orang yang betul - betul tepat dan mau terbuka sama aku. Meskipun terkadang keterbukaan itu pahit, tapi aku apresiasi 
                                itu dan belajar untuk menghargai itu, karena keterbukaan itu mahal dan terbukanya kita berarti kita menghormati satu sama lain sebagai pasangan
                                dan telah percaya terhadap pasangan kita. Semoga setelah ini, kita bisa saling memahami satu sama lain dan tetaplah pertahankan saling perhatian 
                                kita. Semoga kita bisa menua bersama dan menggapai cita - cita yang ingin kita gapai di masa depan. Dan selama 1 bulan ini, 
                                aku betul - betul mencintai Maya Kencana Wulandari, karena dia telah memberikan yang terbaik buat aku, perhatian buat aku, mempercayaiku 
                                seutuhnya, dan selalu bersabar untuk menasihatiku. Semoga kita bisa selalu berjuang bersama meskipun keadaan suka dan duka, dan aku bisa menemanimu 
                                dan mencintaimu unconditionally. I LOVE YOU MAYA ❤️❤️. LDRan semoga membuat kita jadi semakin rekat hubungannya dan semakin termotivasi !

                    
                            </p>
                    </div>
                </div>







            </div>
        </div>

















        <div className="card bg-white text-danger" id="pesanMaya" data-aos="fade-right" data-aos-duration="1000">
            <div className="content">
                
            
                <div className="row mt-4">
                    <div className='col-8'>

                    <h2>Pesan Untuk Fairuz dari Maya</h2>
                            <p>Semoga setelah ini bisa lebih saling belajar lagi, It's first time I have relationship with person who have same life phase with me. Jadi aku berharap bisa lebih saling   menghargai nantinya. Semoga bisa saling terbuka lagi, jadi bisa saling paham. Semoga bisa sama² terus sampai akhir hayat❤️. Kamu udah ngelakuin yg terbaik sebulan ini, aku berharap nanti iyus yg aku kenal tetep iyus yang aku kenal. Dan aku bisa nemenin setiap step gagal atau berhasil kamu seterusnyaa. I LOVE U
                            </p>

                    </div>
                    <div className='col-4'>


                    <img
          className="d-block w-75 rounded"
          src={maya}
          alt="Maya Kencana W"
        />

                    </div>
                </div>







            </div>
        </div>

























      </header>


    )


}


export default Aktivitas;