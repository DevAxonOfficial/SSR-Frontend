import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Helmet } from 'react-helmet';

import parkSpotlight from '../../assets/img/park_spotlight.jpg';
import homeSliderArrow from '../../assets/img/home_sldr_arrow.png';

export default function Park_spotlight() {

    // gloabl line GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Heading text animation variable
    const spot_hd_anmt = useRef(null);

    useEffect(() => {

        // Heading text animation code
        gsap.to("#spot_hd_anmt", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.7,
            scrollTrigger: {
                trigger: "#spot_hd_anmt",
                markers: false
            }
        });

}, []);

  return (
    <>

        <Helmet>
            <title>Grade A Industrial and Logistics Park in India</title>
            <meta name="description" content="Horizon Industrial Parks boasts India's top-tier Grade A portfolio of 17 modern industrial and logistics parks with 25 million sq ft development potential across 8 key markets." />
        </Helmet>

        <div className='park_inside_spotlight_sec snap_sec'>

            <img src={parkSpotlight} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={homeSliderArrow}></img>

            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  /  INDUSTRIAL AND WAREHOUSING PARKS</h3>
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
                                <div className='prk_dtl_line1'>
                                    <h1 className='new_h1'>Grade A Industrial and Logistics Park in India</h1>
                                </div>
                                <div className='prk_dtl_line2'>
                                    <h1 className='spotlight_pg_title bg_size_ttl'>Reimagining parks as social cohorts</h1>
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
