import React, { Suspense, lazy, useState } from "react";
import styles from "./MainContent.module.css";
import Expenses from "../Expenses/Expenses";


const Form = lazy(() => import("../Form/Form"));

function MainContent({ LazyComponent, handleLazyComponent }) {

  const [id, setId] = useState(null);

  const handleEditExpense = (com, id) => {
    handleLazyComponent(com);
    setId(id);
  };

  const LazyLoadComponent = {
    form: <Form id={id} />,
    expenses: <Expenses handleEditExpense={handleEditExpense} />,
  };

  const Styles = `${styles.mainContent} border-radius`;

  return (
    <main className={Styles}>
      <Suspense fallback="Loading">{LazyLoadComponent[LazyComponent]}</Suspense>
    </main>
  );
}

export default MainContent;
