import React, {useState} from 'react'
import styles from './Form.module.css'
function Form({expenses, setExpenses}) {

  const generateTempId = () => Math.random().toString(36).substr(2, 9);

    const [formData, setFormData] = useState({
        id: generateTempId(),
        description: '',
        date: '',
        amount: '',
        category: ''
      });

    



    const handleSubmit = (e) => {
      e.preventDefault()
      setExpenses(prev => [...prev , formData])
    }

    


      // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  return (
  <div>
  <form onSubmit={handleSubmit}>

    <legend className={styles['legend']}>Add an expense</legend>

    <div className={styles['form-group']}>
      <label htmlFor="description" className={styles['label']}>Description</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className={styles['input']}
      />
    </div>

    <div className={styles['form-group']}>
      <label htmlFor="date" className={styles['label']}>Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className={styles['input']}
      />
    </div>

    <div className={styles['form-group']}>
      <label htmlFor="amount" className={styles['label']}>Amount</label>
      <input
        type="number"
        id="amount"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className={styles['input']}
      />
    </div>

    <div className={styles['form-group']}>
      <label htmlFor="category" className={styles['label']}>Category</label>
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className={styles['input']}
      />
    </div>

    <div className={styles['form-group']}>
      <button type="submit" className={styles['button']}>Submit</button>
    </div>

  </form>
</div>
  )
}

export default Form