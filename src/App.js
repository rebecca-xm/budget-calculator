import { Alert } from "./components/AddExpenseAlert/Alert";
import { ExpenseForm } from "./components/ExpenseForm/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList/ExpenseList";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

const InitialExpenses = [
  { id: uuidv4(), charge: 'dog food', amount: 40 },
  { id: uuidv4(), charge: 'bills', amount: 200 },
  { id: uuidv4(), charge: 'gas', amount: 50 },
  { id: uuidv4(), charge: 'food', amount: 80 },
];

// console.log(InitialExpenses);

function App() {
  const [expenses, setExpenses] = useState(InitialExpenses);

  return (
    <>
      <Alert />
      <h1>Keep track of your expenses</h1>
      <main>
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h2>total spending: <span>€ {expenses.reduce((acc, curr) => {
        return (acc += curr.amount);
      }, 0)}</span></h2>
    </>
  );
}

export default App;
