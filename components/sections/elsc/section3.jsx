import React from "react";
import "../../../assets/css/section3.css";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCreative, EffectFade, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";
import 'swiper/css/effect-fade';

import Amazon from '../../../assets/img/clients/Amazon_.png'
import BlinkIt from '../../../assets/img/clients/BlinkIt.png'
import FlipKart from '../../../assets/img/clients/Flipkart.png'
import Myntra from '../../../assets/img/clients/Myntra.png'
import Reliance from '../../../assets/img/clients/Reliance-retail.png'
import Dealshare from '../../../assets/img/clients/dealshare.png'
import decathlon from '../../../assets/img/clients/decathlon.png'
import firstCry from '../../../assets/img/clients/firstcry.png'
import instaCart from '../../../assets/img/clients/instacart.png'

export default function Section3() {


  return (
    <>
      <div className="elsc_section3 mob_pd_LR tab_pd_LR">
        <div className="cstm_container">


          {/* Header Row   */}
          <div className="row no_LR_margin">
            <div className="col-12">

              <div className="elsc_client_dv">
              <h2 className="section_heading txt_wht">Our Clients</h2>
                <Swiper
                  slidesPerView={4}
                  breakpoints={{
                      320: {
                      slidesPerView: 2
                      },
                      600: {
                      slidesPerView: 3
                      },
                      850: {
                      slidesPerView: 3
                      },
                      1024: {
                      slidesPerView: 4
                      },
                      1440: {
                      slidesPerView: 4
                      },
                  }}
                  spaceBetween={0}
                  speed={500}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper elsc_client_logo_slider"
                >

                  <SwiperSlide>
                    <div className="elsc_client sld">
                      <img src={Amazon}></img>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="elsc_client sld">
                      <img src={BlinkIt}></img>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="elsc_client sld">
                      <img src={FlipKart}></img>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="elsc_client sld">
                      <img src={Myntra}></img>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="elsc_client sld">
                      <img src={Reliance}></img>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="elsc_client sld">
                      <img src={Dealshare}></img>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="elsc_client sld">
                      <img src={decathlon}></img>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="elsc_client sld">
                      <img src={firstCry}></img>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="elsc_client sld">
                      <img src={instaCart}></img>
                    </div>
                  </SwiperSlide>


                </Swiper>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
