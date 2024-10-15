import React,{useState} from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpens from './components/NewExpens/NewExpens';

const Dummy_expense = [
  {
    id: 'e1',
    title: 'School fee',
    amount: 250,
    date: new Date(2020, 5, 4),
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 80,
    date: new Date(2020, 2, 1),
  },
  {
    id: 'e3',
    title: 'House Rent',
    amount: 650,
    date: new Date(2020, 4, 8),
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 450,
    date: new Date(2020, 10, 10),
  },
];

const App = () => {
  
  const [expenses, setExpenses]=useState(Dummy_expense );

  const   addExpHandler = (expense)=>{
      const updatedExpense = [expense, ...expenses]
      setExpenses(updatedExpense  )
    }

  return (
    <div>
        <NewExpens onAddExpense={addExpHandler}/>
       <Expenses items={expenses} />
    </div>
  );
};

export default App;
