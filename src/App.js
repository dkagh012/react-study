import React from 'react';
import ExpensItem from './components/ExpenseItem';

export default function App() {
  const expenses = [
    { id: 'e1', title: 'test1', amount: 123, date: new Date(2021, 2, 28) },
    { id: 'e2', title: 'test2', amount: 456, date: new Date(2021, 2, 28) },
    { id: 'e3', title: 'test3', amount: 789, date: new Date(2021, 2, 28) },
    { id: 'e4', title: 'test4', amount: 101, date: new Date(2021, 2, 28) },
  ];

  return (
    <div>
      <p>React 연습 중...</p>
      <h1>연습 완료!</h1>
      <ExpensItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpensItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpensItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpensItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}
