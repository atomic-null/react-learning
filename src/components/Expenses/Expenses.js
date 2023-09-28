import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredItems = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expense={filteredItems}/>
        <ExpensesList items={filteredItems}/>
      </Card>
    </div>
  );
}

export default Expenses;
