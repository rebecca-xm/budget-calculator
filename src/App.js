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

function App() {
  const [expenses, setExpenses] = useState(InitialExpenses);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      const addExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, addExpense]);
      setCharge('');
      setAmount('');
    } else {
      // call alert here
    }
  };

  return (
    <>
      <Alert />
      <h1>Keep track of your expenses</h1>
      <main>
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h2>total spending: <span>€ {expenses.reduce((acc, curr) => {
        return (acc += parseInt(curr.amount));
      }, 0)}</span></h2>
    </>
  );
}

export default App;
