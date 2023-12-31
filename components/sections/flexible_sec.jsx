import React from 'react'
import '../../assets/css/flexible_sec.css';
import $ from "jquery";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect , useRef} from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import combination from '../../assets/img/Combination_of _forced.jpg'
import tempControlled from '../../assets/img/Temperature_controlled.jpg'
import roofWall from '../../assets/img/Roof_wall.jpg'
import complexUtility from '../../assets/img/Complex_utility.jpg'
import customisedStructural from '../../assets/img/customised_structural.jpg'


export default function Flexible_sec() {
    const SliderComponent = typeof window === 'undefined' ? Slider.default : Slider;

    // gloabl line GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Heading text animation variable
    const txt_flexe = useRef(null);

    const flex_fade = useRef(null);

    useEffect(() => {

        // Heading text animation code
        gsap.to("#txt_flexe", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_flexe",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#flex_fade", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#flex_fade",
                markers: false
            }
        });

    }, []);


    const flex_slider = {
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1

              }
            },
            {
                breakpoint: 835,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1

                }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <>

         <section className="flexible_sec snap_sec">
            <div className='row no_LR_margin'>
                <div className='col-12 no_padding flex_hd_col'>
                    <div className="animate_txt ">
                        <h2 ref={txt_flexe} className='section_sub_heading ambition_hd flex_hd' id='txt_flexe'>Flexible spaces customized for your unique requirement</h2>
                    </div>
                </div>
            </div>

            <div className='row no_LR_margin'>
                <div className='col-12 p_opacity no_padding' ref={flex_fade} id='flex_fade'>
                    <SliderComponent {...flex_slider} className='park_main_slider other_park_slider ahmedabad_oth_slider flex_main_slider horz_sld'>

                        <div className='flex_sld_outer'>
                            <div className='flex_sld_inner'>
                                <img className='flex_bg_img' src={customisedStructural}></img>
                                <div className='flex_content'>
                                    <p className='flex_sld_p'>Customized structural upgrades and PEB features for industrial purposes</p>
                                </div>
                                <div className='flx_ovberlay'></div>
                            </div>
                        </div>
                        <div className='flex_sld_outer'>
                            <div className='flex_sld_inner'>
                                <img className='flex_bg_img' src={complexUtility}></img>
                                <div className='flex_content'>
                                    <p className='flex_sld_p'>Complex utility requirements for process industries </p>
                                </div>
                                <div className='flx_ovberlay'></div>
                            </div>
                        </div>
                        <div className='flex_sld_outer'>
                            <div className='flex_sld_inner'>
                                <img className='flex_bg_img' src={roofWall}></img>
                                <div className='flex_content'>
                                    <p className='flex_sld_p'>Roof and wall insulations</p>
                                </div>
                                <div className='flx_ovberlay'></div>
                            </div>
                        </div>
                        <div className='flex_sld_outer'>
                            <div className='flex_sld_inner'>
                                <img className='flex_bg_img' src={tempControlled}></img>
                                <div className='flex_content'>
                                    <p className='flex_sld_p'>Temperature controlled areas</p>
                                </div>
                                <div className='flx_ovberlay'></div>
                            </div>
                        </div>
                        <div className='flex_sld_outer'>
                            <div className='flex_sld_inner'>
                                <img className='flex_bg_img' src={combination}></img>
                                <div className='flex_content'>
                                    <p className='flex_sld_p'>Combination of forced and natural ventilation systems</p>
                                </div>
                                <div className='flx_ovberlay'></div>
                            </div>
                        </div>
                    </SliderComponent>
                </div>
            </div>
        </section>


        </>
    )
}
