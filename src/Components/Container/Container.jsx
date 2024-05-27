import React from 'react'
import styles from './Container.module.css'
import Navigation from '../Navigation/Navigation'
import MainContent from '../MainContent/MainContent'

function Container({children}) {
    const [LazyComponent , setLazyComponent] = React.useState('form')
    const [expenses , setExpenses] = React.useState([])
  return (
    <div className={styles.container}>
        <Navigation setLazyComponent={setLazyComponent} LazyComponent={LazyComponent}/>
        <MainContent setLazyComponent={setLazyComponent} setExpenses={setExpenses} expenses={expenses}LazyComponent={LazyComponent}/>
    </div>
  )
}

export default Container