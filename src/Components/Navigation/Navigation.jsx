import React from 'react'
import styles from './Navigation.module.css'
import { FaPlus, FaUserCircle,FaMoneyBill } from 'react-icons/fa';

function Navigation({setLazyComponent}) {
  return (
    <nav className={`${styles.navigation} border-radius`}>
        <ul>
            <li onClick={() => setLazyComponent('profile')}>
            <span><FaUserCircle className={styles.icon}/></span>
              <span>Profile</span>
            </li>
            <li onClick={() => setLazyComponent('form')}>
              <span><FaPlus className={styles.icon}/></span>
              <span>Add Expenses</span>
            </li>
            <li onClick={() => setLazyComponent('expenses')}>
              <span><FaMoneyBill className={styles.icon}/></span>
              <span>All Expenses</span>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation