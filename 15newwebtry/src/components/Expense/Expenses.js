import React from 'react';
import './Expenses.css';
import ExpensItem from './ExpensItem';
import './ExpensItem.css';
import Card from '../UI/Card';

const Expenses = (props) => {
  // Check if props.items is defined and has elements
  if (!props.items || props.items.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <Card className='expenses'>
      {props.items.map((expense) => (
        <ExpensItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
