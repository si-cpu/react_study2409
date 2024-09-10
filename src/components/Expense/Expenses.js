import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = ({ expenses }) => {
  // 선택된 연도값상태관리
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString(),
  );
  //자식컴포넌트인 expenseFilter에게 내려줄함수
  const filtterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className='expenses'>
      <ExpenseFilter onChangeFilter={filtterChangeHandler} />
      {expenses
        .filter((item) => item.date.getFullYear().toString() === filteredYear)
        .map((item) => (
          <ExpenseItem
            key={item.id} // 반복문을 통해 같은 컴포넌트를 표현할 때, 각각을 구분할 수 있게 해 주는 prop
            title={item.title}
            price={item.price}
            date={item.date}
          />
        ))}
    </div>
  );
};

export default Expenses;
