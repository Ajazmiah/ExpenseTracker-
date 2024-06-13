import React, {useState} from "react"
const useExpenses = () => {
    const [expenses , setExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) || [])

    return [expenses , setExpenses]
}

export default useExpenses