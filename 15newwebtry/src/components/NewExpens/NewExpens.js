import React from 'react'
import './NewExpens.css';
import ExpensForm from './ExpensForm';


const NewExpens = (props) => {

  const saveExpDataHandler = (enteredExpenseData) =>{
      const expenseData = {
        ...enteredExpenseData,
        id:Math.random().toString()

      }
      props.onAddExpense(expenseData);
      console.log(expenseData);
  }
  return (
    <div className='new-expense'>
        <ExpensForm onSaveExpData={saveExpDataHandler}/>
    </div>
  )
}

export default NewExpens