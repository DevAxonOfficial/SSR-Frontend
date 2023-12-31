import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import spotLight from '../../assets/img/explore_spotlight.jpg';
import sldArrow from '../../assets/img/home_sldr_arrow.png';

export default function Explore_spotlight() {

    // gloabl line GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Heading text animation variable
    const spot_hd_anmt_exp = useRef(null);

    useEffect(() => {

        // Heading text animation code
        gsap.to("#spot_hd_anmt_exp", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.7,
            scrollTrigger: {
                trigger: "#spot_hd_anmt_exp",
                markers: false
            }
        });

}, []);


  return (
    <>
        <div className='park_inside_spotlight_sec'>

            <img src={spotLight} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={sldArrow}></img>

            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  /  Explore</h3>
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
                                    <h1 className='spotlight_pg_title bg_size_ttl'>Grade A industrial {'&'} logistics parks</h1>
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
