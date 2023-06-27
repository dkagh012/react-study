import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NexExpense = (props) => {
  const onSaveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString
    };
    props.onAddExpense(expenseData);
  }
  return <div className="new-expense">
    <ExpenseForm onSaveExpenseDate={onSaveExpenseDateHandler} />
  </div>

}

export default NexExpense;