import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpeneDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAddNewExpense(false);
  };

  const [isNewExpense, setIsAddNewExpense] = useState(false);

  return (
    <div className="new-expense">
      <ExpenseForm
        isAddNewExpense={setIsAddNewExpense}
        isNewExpense={isNewExpense}
        onSaveExpenseData={saveExpeneDataHandler}
      />
    </div>
  );
};

export default NewExpense;
