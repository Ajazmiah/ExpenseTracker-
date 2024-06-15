import React, { useState } from "react";
const useExpenses = () => {
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );

  

  const handleExpenses = (updatedExpenses) => {
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  }

  return [expenses, setExpenses, handleExpenses];
};

export default useExpenses;
