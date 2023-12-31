import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bilaspur_eoc from '../ease_of_connect_elsc/bilaspur_eoc';


import maximizeBtn from '../../../../assets/img/svg/elsc_landing/maximize_btn.svg'
import cancel from '../../../../assets/img/elsc_landing_pg/cancel.png'

import blockA from '../../../../assets/img/elsc_landing_pg/Bilaspur_II_map/thumb/Bilaspur_II_Block_A.png'
import blockB from '../../../../assets/img/elsc_landing_pg/Bilaspur_II_map/thumb/Bilaspur_II_Block_B.png'
import block1 from '../../../../assets/img/elsc_landing_pg/Bilaspur_II_map/popup_img/Block_1.jpg'
import block2 from '../../../../assets/img/elsc_landing_pg/Bilaspur_II_map/popup_img/Block_2.jpg'

export default function Bilaspur_slider_elsc() {
    const SliderComponent = typeof window === 'undefined' ? Slider.default : Slider;

    const elsc_prk_sld = {
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800
    };



  return (
    <>
      <SliderComponent {...elsc_prk_sld} className='elsc_prk_sld'>

        {/*------------ Slide 1     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>

                <div className='block_name_dv'>
                    <h2>Block 1</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={blockA}></img>
                        <div className='max_btn' target="9">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.11 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>-</p>
                        </div> */}
                        {/* <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Mar 2024</p>
                        </div> */}
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Bilaspur_eoc/>
                    <a className="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={blockA}></img>
                    <div className='maximize_btn' target="9">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 2     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>

                <div className='block_name_dv'>
                    <h2>Block 2</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={blockB}></img>
                        <div className='max_btn' target="10">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.09 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>-</p>
                        </div> */}
                        {/* <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Mar 2024</p>
                        </div> */}
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>
                    <Bilaspur_eoc/>
                    <a className="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={blockB}></img>
                    <div className='maximize_btn' target="10">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

      </SliderComponent>

      {/* ------------------------------ Parks Image popup code ------------------------------ */}

      <div className='prk_img_popup' id='div9'>
        <a className='prk_img_popup_close'>
            <img src={cancel}></img>
        </a>
        <img className='elsc_park_map_img ' src={block1}></img>
      </div>

      <div className='prk_img_popup' id='div10'>
        <a className='prk_img_popup_close'>
            <img src={cancel}></img>
        </a>
        <img className='elsc_park_map_img ' src={block2}></img>
      </div>

      <div className='prk_img_popup_overlay'></div>



    </>
  )
}
