import React from 'react'
import styles from './Navigation.module.css'
import { FaPlus, FaUserCircle,FaMoneyBill } from 'react-icons/fa';

function Navigation({handleLazyComponent}) {
  return (
    <nav className={`${styles.navigation} border-radius`}>
        <ul>
            <li onClick={() => handleLazyComponent('profile')}>
            <span><FaUserCircle className={styles.icon}/></span>
              <span>Profile</span>
            </li>
            <li onClick={() => handleLazyComponent('form')}>
              <span><FaPlus className={styles.icon}/></span>
              <span>Add Expenses</span>
            </li>
            <li onClick={() => handleLazyComponent('expenses')}>
              <span><FaMoneyBill className={styles.icon}/></span>
              <span>All Expenses</span>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation