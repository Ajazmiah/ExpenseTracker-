import React, { useState } from "react";
const useExpenses = () => {
  const [expenses, setExpenses] = useState(
    JSON.parse(window.localStorage.getItem("expenses")) || []
  );

  const handleSetExpenses = () => {
    try {
      window.localStorage.setItem("expenses", JSON.stringify(expenses));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return [expenses, setExpenses, handleSetExpenses];
};

export default useExpenses;
