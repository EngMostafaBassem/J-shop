import React, { useState } from 'react'
import styles from './index.module.scss'
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
const Nav=()=>{
    const [toggle,setToggle]=useState(false)
    console.log('toggle',toggle)
    return(
        <div className={styles['jew_nav']}>
            <div className={styles['jew_nav-logo']}>
              <img src={require('../../../../../assets/images/logo.png')} alt='logo'/>
            </div>
            <ul className={styles['jew_nav-links']}>
               <li><a  href='#'>Categories</a></li>
               <li><a  href='#'>About</a></li>
               <li><a  href='#'>Shop</a></li>
               <li><a  href='#'>Contact</a></li>
            </ul>
            <div className={styles['jew_nav-btns']}>
               <IoSearch       className={styles['icon']}/>
               <IoCartOutline  className={styles['icon']}/>
                    <div className={styles['jew_nav-btns-menu']} onClick={()=>setToggle(toggle=>!toggle)}>
                    <IoMenuOutline  className={styles['icon']}/>
                    {toggle&&(
                    <ul className={styles['jew_nav-btns-menu-list']}>
                       <li><a  href='#'>Categories</a></li>
                       <li><a  href='#'>About</a></li>
                       <li><a  href='#'>Shop</a></li>
                       <li><a  href='#'>Contact</a></li>
                    </ul>
                         )
                        }
                 </div>
              
             
            </div> 
            <div  className={styles['jew_nav-social-links']}>
                <IoLogoTwitter    className={styles['icon']}/>
                <IoLogoInstagram  className={styles['icon']}/>
                <IoLogoLinkedin  className={styles['icon']}/>
            </div>
        </div>
    )

}
export default Nav