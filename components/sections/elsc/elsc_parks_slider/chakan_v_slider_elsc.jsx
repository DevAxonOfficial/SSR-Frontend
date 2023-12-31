import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Chakan_V_eoc from '../ease_of_connect_elsc/chakan_V_eoc';

import cancel from '../../../../assets/img/elsc_landing_pg/cancel.png'
import maximizeBtn from '../../../../assets/img/svg/elsc_landing/maximize_btn.svg'

import block5 from '../../../../assets/img/elsc_landing_pg/chakan_v_map/thumb/Chakan_V_Block_5.png'
import block4 from '../../../../assets/img/elsc_landing_pg/chakan_v_map/thumb/Chakan_V_Block_4.png'
import block3 from '../../../../assets/img/elsc_landing_pg/chakan_v_map/thumb/Chakan_V_Block_3.png'
import block2 from '../../../../assets/img/elsc_landing_pg/chakan_v_map/thumb/Chakan_V_Block_2.png'
import block1 from '../../../../assets/img/elsc_landing_pg/chakan_v_map/thumb/Chakan_V_Block_1.png'

import popupBlock1 from '../../../../assets/img/elsc_landing_pg/chakan_v_map/popup_img/Block_1.jpg'
import popupBlock2 from '../../../../assets/img/elsc_landing_pg/chakan_v_map/popup_img/Block_2.jpg'
import popupBlock3 from '../../../../assets/img/elsc_landing_pg/chakan_v_map/popup_img/Block_3.jpg'
import popupBlock4 from '../../../../assets/img/elsc_landing_pg/chakan_v_map/popup_img/Block_4.jpg'
import popupBlock5 from '../../../../assets/img/elsc_landing_pg/chakan_v_map/popup_img/Block_5.jpg'

export default function Chakan_v_slider_elsc() {
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

        {/*------------ Slide 1   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block 1</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={block1}></img>
                        <div className=' max_btn' target="22">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.41 MSFT</p>
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
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>-</p>
                        </div> */}
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Chakan_V_eoc/>
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={block1}></img>
                    <div className='maximize_btn' target="22">
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
                        <img src={block2}></img>
                        <div className=' max_btn' target="23">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.34 MSFT</p>
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
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>-</p>
                        </div> */}
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Chakan_V_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={block2}></img>
                    <div className='maximize_btn' target="23">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 3     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block 3</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={block3}></img>
                        <div className=' max_btn' target="24">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.25 MSFT</p>
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
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>-</p>
                        </div> */}
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Chakan_V_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={block3}></img>
                    <div className='maximize_btn' target="24">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 4     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block 4</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={block4}></img>
                        <div className=' max_btn' target="25">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.19 MSFT</p>
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
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>-</p>
                        </div> */}
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Chakan_V_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={block4}></img>
                    <div className='maximize_btn' target="25">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 5     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block 5</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={block5}></img>
                        <div className=' max_btn' target="26">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.16 MSFT</p>
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
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>-</p>
                        </div> */}
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Chakan_V_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={block5}></img>
                    <div className='maximize_btn' target="26">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

      </SliderComponent>



      {/* ------------------------------ Parks Image popup code ------------------------------ */}

        <div className='prk_img_popup' id='div22'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popupBlock1}></img>
        </div>

        <div className='prk_img_popup' id='div23'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popupBlock2}></img>
        </div>

        <div className='prk_img_popup' id='div24'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popupBlock3}></img>
        </div>

        <div className='prk_img_popup' id='div25'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popupBlock4}></img>
        </div>

        <div className='prk_img_popup' id='div26'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popupBlock5}></img>
        </div>

      <div className='prk_img_popup_overlay'></div>



    </>
  )
}
