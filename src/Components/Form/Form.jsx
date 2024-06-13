import React, { useState, useRef, useEffect } from "react";
import styles from "./Form.module.css";
import useExpenses from "../../Hooks/useExpenses";

function Form({ id }) {
  const generateTempId = () => Math.random().toString(36).substr(2, 9);

  const [expenses, setExpenses] = useExpenses();

  const edit = expenses.filter((ex) => ex.id === id)[0];

  const [formData, setFormData] = useState(
    id
      ? edit
      : {
          id: generateTempId(),
          description: "",
          date: "",
          amount: "",
          category: "",
        }
  );
  console.log("ID", id);

  const refDescription = useRef(null);
  const refDate = useRef(null);
  const refAmount = useRef(null);
  const refCategory = useRef(null);

  const categories = [
    "Food & Dining",
    "Utilities",
    "Transportation",
    "Housing",
    "Health & Fitness",
    "Entertainment",
    "Personal Care",
    "Travel",
    "Education",
    "Family & Friends",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses((prev) => [...prev, formData]);

    setFormData({
      id: generateTempId(),
      description: "",
      date: "",
      amount: "",
      category: "",
    });

    //localStorage.setItem('expenses', JSON.stringify(expenses))
  };

  useEffect(() => {
    // console.log('ex', JSON.parse(localStorage.getItem('items')) || [])
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    let { name, value } = e.target;

    if (value === "Other") name = "otherCategory";

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <legend className={styles["legend"]}>Add an expense</legend>

        <div className={styles["form-group"]}>
          <label htmlFor="description" className={styles["label"]}>
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            ref={refDescription}
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className={styles["input"]}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="date" className={styles["label"]}>
            Date
          </label>
          <input
            type="date"
            id="date"
            ref={refDate}
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={styles["input"]}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="amount" className={styles["label"]}>
            Amount
          </label>
          <input
            type="number"
            ref={refAmount}
            id="amount"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className={styles["input"]}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="category" className={styles["label"]}>
            Category
          </label>
          <select
            id="category"
            name="category"
            ref={refCategory}
            className={styles["input"]}
            onChange={handleChange}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          {formData["otherCategory"] === "Other" ? (
            <input
              type="text"
              id="category"
              name="category"
              ref={refCategory}
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              className={styles["input"]}
            />
          ) : null}
        </div>

        <div className={styles["form-group"]}>
          <button type="submit" className={styles["button"]}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
