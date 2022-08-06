import "../components/styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [isEditingtate, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);

    setIsEditing(false)

  };

  const startEditing = ()=>{
    setIsEditing(true); 
  }

  
  const stopEditingHandler = ()=>{
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditingtate?(<button onClick={startEditing}>Add New Expense</button>):<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelEditing = {stopEditingHandler}/>}
      
    </div>
  );
};

export default NewExpense;
