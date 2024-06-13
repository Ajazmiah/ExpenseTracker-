import React, { useState } from "react";
import styles from "./Expenses.module.css";
import { FaEdit } from "react-icons/fa";
import useExpenses from "../../Hooks/useExpenses";

function Expenses({ handleEditExpense }) {
  const [query, setQuery] = useState("");
  const [expenses , setExpenses] = useExpenses()
  const [filterExpenses, setFilteredExpenses] = useState(expenses);

  const handleChange = (e) => setQuery(e.target.value.toLowerCase());

  React.useEffect(() => {
    setFilteredExpenses(
      expenses.filter((ex) => ex.description.toLowerCase().includes(query))
    );
  }, [query]);

  const MSG =
    expenses.length > 0 && filterExpenses.length < 1
      ? "No match"
      : "No Expenses Added ";

  const TOTAL_EXPENSE = expenses.reduce((acc, { amount }) => {
    console.log("amount", amount);
    return acc + +amount;
  }, 0);

  console.log("TOT", TOTAL_EXPENSE);

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
        filterExpenses.map((transaction, index) => {
          return (
            <div key={transaction.id} className={styles.transaction}>
              <div className={styles.description}>
                {transaction.description}
              </div>
              <div className={styles.date}>{transaction.date}</div>
              <div className={styles.amount}>${transaction.amount}</div>
              <div className={styles.category}>{transaction.category}</div>
              <>
                <FaEdit
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEditExpense('form', transaction.id)}
                />
              </>
            </div>
          );
        })
      )}
      <span>Total Expenses: ${TOTAL_EXPENSE}</span>
    </div>
  );
}

export default Expenses;
