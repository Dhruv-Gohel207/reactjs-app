import React from 'react'
import './ExpensDate.css'

const ExpensDate =(props) => {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US',  {day: '2-digit'});
  
    return (  
    <div className='expens-date'>
        <div className='expens-date__month'>{month}</div>
        <div className='expens-date__year'>{year}</div>
        <div className='expens-date__day'>{day}</div>
    </div>
  )
}

export default ExpensDate