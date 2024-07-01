import React, { useState, useRef, useEffect } from "react";
import styles from "./Form.module.css";
import useExpenses from "../../Hooks/useExpenses";

function Form({ id }) {
  const generateTempId = () => Math.random().toString(36).substr(2, 9);
  const EXPENSE_KEY = 'expenses'

  const [expenses, setExpenses, handleSetExpenses] = useExpenses(EXPENSE_KEY);

  const edit = expenses.filter((ex) => ex.id === id)[0];
  console.log(edit)



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
  const newExpenses = expenses.filter((ex) => {
    if(ex?.id === edit?.id) {
      return edit
    }
  })

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

  const CATEGORY_OTHER = "Other";

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!edit){
    setExpenses((prev) => [...prev, formData]);

    setFormData({
      id: generateTempId(),
      description: "",
      date: "",
      amount: "",
      category: "",
    });
  }
  else {
    setExpenses([formData])
  }
  };

  useEffect(() => {
    handleSetExpenses();
  }, [expenses]);

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log('value', value)

    if (value === CATEGORY_OTHER) name = "otherCategory";

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
