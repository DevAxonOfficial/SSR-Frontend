import React from 'react'
import '../../../assets/css/park_inside_spotlight.css';
import { Helmet } from 'react-helmet';

import homeSldArrwo from '../../../assets/img/home_sldr_arrow.png'
import landSpotlight from '../../../assets/img/solutions_inside/Strategic_land/Strategic_land_spotlight.jpg'

export default function Strat_land_acq_spotlight() {
  return (
    <>
        <div className='park_inside_spotlight_sec '>

            <Helmet>
                <title>Land Acquistion for Industrial and Logistics Industrial Park | Horizon Industrial Park</title>
                <meta name="description" content="At Horizon Industrial Parks, we invest substantial resources in finding the right locations to proactively expand in regions where our customers aspire to grow." />
                <meta name="keyword" content="Land Acquisition for Industrial Park" />

                <meta property="og:title" content="Land Acquistion for Industrial and Logistics Industrial Park | Horizon Industrial Park" />
                <meta property="og:description" content="At Horizon Industrial Parks, we invest substantial resources in finding the right locations to proactively expand in regions where our customers aspire to grow." />
                <meta property="og:image" content="" />

                <meta name="twitter:title" content="Land Acquistion for Industrial and Logistics Industrial Park | Horizon Industrial Park" />
                <meta name="twitter:description" content="At Horizon Industrial Parks, we invest substantial resources in finding the right locations to proactively expand in regions where our customers aspire to grow." />
                <meta name="twitter:image" content="" />
            </Helmet>

            <img src={landSpotlight} alt='Horizon Land Acquisition for Industrial Park' className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={homeSldArrwo}></img>

            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  /  <a href='/solutions'> Solutions</a> / STRATEGIC LAND ACQUISITION</h3>
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
                                    <h1 className='spotlight_pg_title bg_size_ttl'>STRATEGIC LAND ACQUISITION</h1>
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
