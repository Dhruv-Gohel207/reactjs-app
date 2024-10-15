import React from 'react';
import './ExpensItem.css';
import ExpensDate from './ExpensDate';
import Card from '../UI/Card';

const ExpensItem =(props) => {
            
    return(
        <Card className='expens-item'>
                <ExpensDate date={new Date(props.date)}/>
            <div className='expens-item__description'>
                <h2 > { props.title } </h2>
                  
                <div className='expens-item__price'>   ${props.amount} </div>
            </div>
           
        </Card>
    );
}

export default ExpensItem