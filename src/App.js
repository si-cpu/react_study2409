import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { id: 1, title: '냠냠치킨', price: 19000, date: new Date(2023, 6, 19) },
    { id: 2, title: '양파', price: 5000, date: new Date(2023, 6, 20) },
    { id: 3, title: '도미노피자', price: 34000, date: new Date(2024, 6, 19) },
    { id: 4, title: '노랑통닭', price: 18000, date: new Date(2021, 6, 20) },
  ];

  // 지출 객체 배열을 상태변수로 관리
  const [expenseList, setExpenseList] = useState([]);

  // ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (newEx) => {
    const modifyEx = {
      ...newEx,
      id: expenseList[expenseList.length - 1].id + 1,
    };
    setExpenseList([...expenseList, modifyEx]);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenseList} />
    </>
  );
}

export default App;
