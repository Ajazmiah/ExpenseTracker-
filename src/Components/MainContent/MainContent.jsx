import React, {Suspense, lazy, useState} from 'react'
import styles from './MainContent.module.css'
import Expenses from '../Expenses/Expenses'
import useExpenses from '../../Hooks/useExpenses'

const Form = lazy(() => import('../Form/Form'))




function MainContent({LazyComponent ,handleLazyComponent}) {
  const [expenses , setExpenses] = useExpenses()

  const [id , setId] = useState(null)

  const handleEditExpense = (com ,id) => {
    console.log('com', com)
    handleLazyComponent(com)
    setId(id)
  }

    const LazyLoadComponent = {
        form: <Form setExpenses={setExpenses} expenses={expenses} id={id}/>,
        expenses: <Expenses handleEditExpense={handleEditExpense} expenses={expenses} />
      
    }


 
 
  const Styles = `${styles.mainContent} border-radius`

  return (
    <main className={Styles}>
     <Suspense fallback='Loading'>
      {LazyLoadComponent[LazyComponent]}
     </Suspense>
    </main>
  )
}

export default MainContent