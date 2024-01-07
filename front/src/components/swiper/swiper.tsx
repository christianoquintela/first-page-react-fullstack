import React from 'react';

//Css
import classes from './swiper.module.css';

//Imgs
import logo_html5 from '../../assets/logo_HTML5.png';
import logo_css from '../../assets/logo_css.png';
import logo_js from '../../assets/logo_js.png';
import logo_react from '../../assets/logo_react.png';
import logo_node from '../../assets/logo_node.png';
import logo_ts from '../../assets/logo_ts.png';
import logo_mysql from '../../assets/logo_mysql.png';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

const images = [
  { id: 1, img: logo_html5 },
  { id: 2, img: logo_css },
  { id: 3, img: logo_js },
  { id: 4, img: logo_react },
  { id: 5, img: logo_node },
  { id: 6, img: logo_ts },
  { id: 7, img: logo_mysql },
];

const Carrossel = () => {
  return (
    <div>
      {/* Carrossel com swiper */}
      <div>
        <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img src={img.img} alt='Slides' className={classes.slides} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carrossel;
