import React from 'react'
import styles from './Container.module.css'
import Navigation from '../Navigation/Navigation'
import MainContent from '../MainContent/MainContent'

function Container({children}) {
    const [LazyComponent , setLazyComponent] = React.useState('form')
    const [expenses , setExpenses] = React.useState(JSON.parse(localStorage.getItem('expenses')) || [])

  
  const handleLazyComponent = (com) => setLazyComponent(com)

  return (
    <div className={styles.container}>
        <Navigation setLazyComponent={setLazyComponent} handleLazyComponent={handleLazyComponent}/>
        <MainContent handleLazyComponent={handleLazyComponent}  setExpenses={setExpenses} expenses={expenses} LazyComponent={LazyComponent}/>
    </div>
  )
}

export default Container