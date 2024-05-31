import React, { useState } from "react";
import styles from "./Expenses.module.css";

function Expenses({ expenses }) {
  const [query, setQuery] = useState("");
  const [filterExpenses, setFilteredExpenses] = useState(expenses);

  const handleChange = (e) => setQuery(e.target.value.toLowerCase());

  React.useEffect(() => {
    setFilteredExpenses(
     expenses.filter((ex) => ex.description.toLowerCase().includes(query))
    );

  }, [query]);

  const MSG = (expenses.length > 0 && filterExpenses.length < 1 ) ? 'No match' : 'No Expenses Added '

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        placeholder="search.."
        className={styles["search-input"]}
        onChange={handleChange}
      />
      {filterExpenses.length < 1 ? (
        <p>{MSG}</p>
      ) : (
        filterExpenses.map((transaction, index) => (
          <div key={transaction.id} className={styles.transaction}>
            <div className={styles.description}>{transaction.description}</div>
            <div className={styles.date}>{transaction.date}</div>
            <div className={styles.amount}>{transaction.amount}</div>
            <div className={styles.category}>{transaction.category}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default Expenses;
