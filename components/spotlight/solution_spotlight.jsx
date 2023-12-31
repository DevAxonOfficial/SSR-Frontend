import React from 'react'
import '../../assets/css/park_inside_spotlight.css';

import homeSlrArrow from '../../assets/img/home_sldr_arrow.png'
import solutionsSpotlight from '../../assets/img/solutions_spotlight.jpg'

export default function Solution_spotlight() {
  return (
    <>
        <div className='park_inside_spotlight_sec'>

            <img src={solutionsSpotlight} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={homeSlrArrow}></img>

            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  /  Solutions</h3>
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
                                    <h1 className='spotlight_pg_title bg_size_ttl'>SOLUTIONS TO CONSISTENTLY DELIVER THE BEST</h1>
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
