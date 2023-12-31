import React from 'react'
import '../../../../assets/css/solution_inside.css';

import communityInfo from '../../../../assets/img/solutions_inside/proprty_mang/svg/community-icon.svg'
import medicalIcon from '../../../../assets/img/solutions_inside/proprty_mang/svg/medical-icon.svg'
import green from '../../../../assets/img/solutions_inside/proprty_mang/svg/green-icon.svg'
import twentyfour from '../../../../assets/img/solutions_inside/proprty_mang/svg/24x7-icon.svg'
import emergyicon from '../../../../assets/img/solutions_inside/proprty_mang/svg/emergy-icon.svg'
import saftyicon from '../../../../assets/img/solutions_inside/proprty_mang/svg/safty-icon.svg'

export default function Solution_inside_sec2() {
  return (
    <>
      <div className='sol_inside_sec2 mob_pd_LR tab_pd_LR'>
        <div className='cstm_container'>

            <div className='row'>
                <div className='col-12 sol_icon_col'>
                   <div className='row'>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Safety and Security Services' src={saftyicon}></img>
                          <h3 className=''>Safety and Security Services</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Emergency Preparedness' src={emergyicon}></img>
                          <h3 className=''>Emergency Preparedness</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='24*7 Uninterrupted Operations' src={twentyfour}></img>
                          <h3 className=''>24*7 Uninterrupted Operations</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Green Landscapes' src={green}></img>
                          <h3 className=''>Green Landscapes</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='First-aid and Ambulance Services' src={medicalIcon}></img>
                          <h3 className=''>First-aid and Ambulance Services</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Community Building Initiatives' src={communityInfo}></img>
                          <h3 className=''>Community Building Initiatives</h3>
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
