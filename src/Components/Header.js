import React from 'react'
import logo from '../Images/logo.png'
import styles from "./all.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt ={'a todo jet'} className='image'/>
    </div>
  )
}

export default Header
