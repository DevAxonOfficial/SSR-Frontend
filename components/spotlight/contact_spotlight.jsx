import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import { useEffect, useRef } from "react";

import spotlight from '../../assets/img/contact_spotlight.jpg'
import arrow from '../../assets/img/home_sldr_arrow.png'

export default function Contact_spotlight() {
    // gloabl line GSAP
    const spot_hd_anmt_cont = useRef(null);

    // Heading text animation variable
    let gsap;
    useEffect(() => {
        import("gsap/dist/gsap").then(modules => {
            gsap = modules.gsap;

            new Promise((res) => res(import('gsap/dist/ScrollTrigger'))).then(scrollModule => gsap.registerPlugin(scrollModule.ScrollTrigger))
            gsap.to("#spot_hd_anmt_cont", {
                y:0,
                duration: 1.3,
                ease: "power4.out",
                delay: 0.7,
                scrollTrigger: {
                    trigger: "#spot_hd_anmt_cont",
                    markers: false
                }
            });
        })

        // Heading text animation code

    }, []);

  return (
    <>
        <div className='park_inside_spotlight_sec'>

            <img src={spotlight} className='park_inside_bg_img contact_spotlight_img'></img>
            <img className='inside_spotlight_arrow' src={arrow}></img>

            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  /  Contact</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='spotlight_content_dv'>
            <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12 '>
                        <div className='spotlight_content_box'>
                            <div className='spotlight_inner_content'>
                                <div className='prk_dtl_line2'>
                                    <h1 className='spotlight_pg_title'>Contact</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
