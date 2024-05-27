import React from 'react'
import styles from './Expenses.module.css'

function Expenses({expenses}) {
  return (
     <div className={styles.container}>
      {expenses.map((transaction, index) => (
        <div key={transaction.id} className={styles.transaction}>
          <div className={styles.description}>{transaction.description}</div>
          <div className={styles.date}>{transaction.date}</div>
          <div className={styles.amount}>{transaction.amount}</div>
          <div className={styles.category}>{transaction.category}</div>
        </div>
      ))}
    </div>
  )
}

export default Expenses