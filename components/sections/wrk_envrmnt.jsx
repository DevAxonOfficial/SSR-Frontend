import React from 'react'
import '../../assets/css/wrk_envrmnt.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import wrkenv from '../../assets/img/wrk_envr.jpg'
import ev from '../../assets/img/svg/work/EV.svg'
import gym from '../../assets/img/svg/work/GYM.svg'
import zengarden from '../../assets/img/svg/work/zen garden.svg'
import toilets from '../../assets/img/svg/work/Toilets.svg'
import ambulance from '../../assets/img/svg/work/ambulance.svg'
import smartleydesigned from '../../assets/img/svg/work/Smartly designed.svg'
import exit from '../../assets/img/svg/work/Exit.svg'
import convenience from '../../assets/img/svg/work/Conveniences.svg'
import greenCover from '../../assets/img/svg/work/Green cover.svg'
import barrierfreeDesign from '../../assets/img/svg/work/Barrier free design.svg'

export default function Wrk_envrmnt() {
    const SliderComponent = typeof window === 'undefined' ? Slider.default : Slider;

    const work_slider = {
        arrows: true,
        infinite: false,
        slidesToShow:5,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,

            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll:1,
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        }
        ]
    };


    // gloabl line GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Heading text animation variable
    const txt_animate_p4 = useRef(null);
    const work_fade = useRef(null);

    useEffect(() => {

        // Heading text animation code
        gsap.to("#txt_animate_p4", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_animate_p4",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#work_fade", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#work_fade",
                markers: false
            }
        });


    }, []);

    return (
        <>
            <div className='wrk_sec snap_sec'>
                <div className='cstm_container mob_pd_LR tab_pd_LR'>

                    <div className='row' >
                        <div className='col-12'>
                            {/* <p className='section_sub_heading wrk_sub_hd'>A humanistic work environment</p> */}
                            <div className="animate_txt ">
                                <h2 ref={txt_animate_p4} className='section_sub_heading wrk_sub_hd' id='txt_animate_p4'>An Ergonomic work environment</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row' >

                        <div className='col-12 p_opacity' ref={work_fade} id='work_fade'>

                            <SliderComponent {...work_slider} className='work_slider'>

                                <div className='wrk_sld ws_1'>
                                    <div className='wrk_content'>
                                        <img className='' src={barrierfreeDesign}></img>
                                        <p className=''>Barrier free design for building access to the differently abled</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_2'>
                                    <div className='wrk_content'>
                                        <img className='' src={greenCover}></img>
                                        <p className=''>Miyawaki urban forests, green cover around the perimeter and in common areas</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_3'>
                                    <div className='wrk_content'>
                                        <img className='' src={convenience}></img>
                                        <p className=''>Conveniences including refreshment on meals and ATM</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_4'>
                                    <div className='wrk_content'>
                                        <img className='' src={exit}></img>
                                        <p className=''>Signage for regulatory information, safety and emergency guidelines</p>
                                    </div>
                                </div>

                                <div className='wrk_sld ws_5'>
                                    <div className='wrk_content'>
                                        <img className='' src={smartleydesigned}></img>
                                        <p className=''>Smartly designed and well-located signage for easy navigation</p>
                                    </div>
                                </div>

                                <div className='wrk_sld ws_6'>
                                    <div className='wrk_content'>
                                        <img className='' src={ambulance}></img>
                                        <p className=''>First-aid center with an ambulance facility</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_7'>
                                    <div className='wrk_content'>
                                        <img className='' src={toilets}></img>
                                        <p className=''>Toilets in common areas and rest rooms for drivers</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_8'>
                                    <div className='wrk_content'>
                                        <img className='' src={zengarden}></img>
                                        <p className=''>Water body with garden</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_9'>
                                    <div className='wrk_content'>
                                        <img className='' src={gym}></img>
                                        <p className=''>Open gymnasium and netted box</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_10'>
                                    <div className='wrk_content'>
                                        <img className='' src={ev}></img>
                                        <p className=''>Pavegen areas and EV plug points</p>
                                    </div>
                                </div>

                            </SliderComponent>

                        </div>

                    </div>


                </div>

                <div className='wrk_img_dv p_opacity' ref={work_fade} id='work_fade'>
                    <img className='wrk_img' src={wrkenv} ></img>
                </div>

            </div>

            {/* <div className='work_img_div'>

            </div> */}

        </>
    )
}
