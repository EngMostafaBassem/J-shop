import React from 'react'
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import styles from './index.module.scss'
const Footer=()=>{
    return(
        <div className={styles['jew_footer']}>
          <div className={styles['jew_footer-content']}>
             <div className={styles['jew_footer-content-links']}>
              <p  className={styles['jew_footer-content-links-title']}>Product</p> 
              <ul  className={styles['jew_footer-content-links-wrapper']}>
                 <li className={styles['jew_footer-content-links-wrapper-item']}><a href='#'>Email Row</a></li>
                 <li className={styles['jew_footer-content-links-wrapper-item']}><a href='#'>Free Tools</a></li>
                 <li className={styles['jew_footer-content-links-wrapper-item']}><a href='#'>Agent</a></li>
                 <li className={styles['jew_footer-content-links-wrapper-item']}><a href='#'>Blog</a></li>
              </ul>
             </div>
             <div className={styles['jew_footer-content-links']}>
              <p  className={styles['jew_footer-content-links-title']}>Resources</p> 
              <ul  className={styles['jew_footer-content-links-wrapper']}>
                 <li className={styles['jew_footer-content-links-wrapper-item']}><a href='#'>Our Agents</a></li>
                 <li className={styles['jew_footer-content-links-wrapper-item']}><a href='#'>Member Storie</a></li>
                 <li className={styles['jew_footer-content-links-wrapper-item']}><a href='#'>Video</a></li>
                 <li className={styles['jew_footer-content-links-wrapper-item']}><a href='#'>Free trial</a></li>
              </ul>
            </div>
             <div className={styles['jew_footer-content-links']}>
              <p  className={styles['jew_footer-content-links-title']}>Company</p> 
              <ul  className={styles['jew_footer-content-links-wrapper']}>
                 <li className={styles['jew_footer-content-links-wrapper-item']}><a href='#'>Patnership</a></li>
                 <li className={styles['jew_footer-content-links-wrapper-item']}><a href='#'>Terms of use</a></li>
                 <li className={styles['jew_footer-content-links-wrapper-item']}><a href='#'>Privacy</a></li>
                 <li className={styles['jew_footer-content-links-wrapper-item']}><a href='#'>Sitemap</a></li>
              </ul>
             </div>
             <div className={styles['jew_footer-content-links-contacts']}>
              <p  className={styles['jew_footer-content-links-contacts-title']}>Get in touch</p> 
              <p className={styles['jew_footer-content-links-contacts-subtitle']}>You’ll find your next Marketing value you prefer</p>
              <div className={styles['jew_footer-content-links-contacts-social-links']}>
                <IoLogoTwitter    className={styles['icon']}/>
                <IoLogoInstagram  className={styles['icon']}/>
                <IoLogoLinkedin  className={styles['icon']}/>
              </div>
             </div>
         </div>  
         {
             /*
              <div className={styles['jew_footer-cpyright']}>
            <p className={styles['jew_footer-cpyright-label']}>Copyright 2021 j-shop.com, All rights reserved</p>
          </div>
              */
         }
         
       
        </div>
    )

}
export default Footer