import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./styles/ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length == 0) {
    return (
      <h2 className="expenses-list__fallback">No Matching Expenses Found</h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((arrayElement) => (
        <ExpenseItem
          key={arrayElement.id}
          title={arrayElement.title}
          amount={arrayElement.amount}
          date={arrayElement.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
