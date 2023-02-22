import React from 'react'
import styles from "./Top.module.css"
import logo from "./chata.jpg"

function Top() {
  return (
    <img src={logo} className={styles.logo} alt="logo" />
  )
}

export default Top