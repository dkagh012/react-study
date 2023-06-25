import React from 'react';
import Expenses from './components/Expenses/Expenses';
import './App.css';
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
      <Expenses item={expenses} />
    </div>
  );
}
