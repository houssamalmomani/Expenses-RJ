import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'New mobile',
    amount: 900,
    date: new Date(2019, 10, 5),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 264.67,
    date: new Date(2022, 1, 1),
  },
  {
    id: 'e3',
    title: 'T-shirt',
    amount: 5,
    date: new Date(2022, 10, 28),
  },
  {
    id: 'e4',
    title: 'TV',
    amount: 200.77,
    date: new Date(2022, 11, 1),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <h1>Let's get started!</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
