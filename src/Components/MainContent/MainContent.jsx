import React, {Suspense, lazy} from 'react'
import styles from './MainContent.module.css'
import Expenses from '../Expenses/Expenses'

const Form = lazy(() => import('../Form/Form'))


function MainContent({setLazyComponent , LazyComponent, expenses, setExpenses}) {

    const LazyLoadComponent = {
        form: <Form setExpenses={setExpenses} expenses={expenses}/>,
        expenses: <Expenses setExpenses={setExpenses} expenses={expenses} />
        

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