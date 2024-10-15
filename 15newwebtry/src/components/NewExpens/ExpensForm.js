import React,{useState} from 'react'
import './ExpensForm.css'

const ExpensForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState(); 
    const [enteredAmount, setEnteredAmount] = useState(); 
    const [enteredDate, setEnteredDate] = useState(); 

  
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);

    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);

    }
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpData(expenseData);
        console.log(expenseData);
        setEnteredDate("");
        setEnteredTitle("");
        setEnteredAmount    ("");

    }
    return (
    
    <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>               
            <input type='text' value={enteredTitle} placeholder='Enter New Text' onChange={titleChangeHandler}/>
        </div>

        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' value={enteredAmount} placeholder='Enter New Amount' min="0.01" step={"0.01"} onChange={amountChangeHandler}/>
        </div>

        <div className='new-expense__control'>
            <label>Date</label>
            <input type='Date' value={enteredDate} onChange={dateChangeHandler}/>
        </div>

        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
        
     </div>
    
    </form>
  )
}

export default ExpensForm 