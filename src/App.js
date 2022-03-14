import './App.scss';
import { Alert } from "./components/AddExpenseAlert/Alert";
import { ExpenseForm } from "./components/ExpenseForm/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList/ExpenseList";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";

// const InitialExpenses = [
//   { id: uuidv4(), charge: 'Dog Food', amount: 40 },
//   { id: uuidv4(), charge: 'Bills', amount: 200 },
//   { id: uuidv4(), charge: 'Gas', amount: 50 },
//   { id: uuidv4(), charge: 'Food', amount: 80 },
// ];

const InitialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];

//TODO: add style to components

function App() {
  const [expenses, setExpenses] = useState(InitialExpenses);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false })
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      if (edit) {
        let expenseToEdit = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item
        })
        setExpenses(expenseToEdit);
        setEdit(false);
        handleAlert({ type: 'success', text: 'Edit completed!' });
      }
      else {
        const addExpense = { id: uuidv4(), charge, amount };
        setExpenses([...expenses, addExpense]);
        handleAlert({ type: 'success', text: 'Your expense has been successfully added!' });
      }
      setCharge('');
      setAmount('');
    } else {
      handleAlert({ type: 'danger', text: 'You have to enter a charge and a valid amount!' });
    }
  };

  const clearExpensesList = () => {
    setExpenses([]);
    handleAlert({ type: 'danger', text: "You've removed all your expenses" });

  };

  const handleEdit = (id) => {
    let expenseToEdit = expenses.find(item => item.id === id);
    let { charge, amount } = expenseToEdit;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  const handleRemove = (id) => {
    let expenseToRemove = expenses.filter(item => item.id !== id);
    setExpenses(expenseToRemove);
    handleAlert({ type: 'danger', text: 'This expense has been removed from your list' });
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Your expenses</h1>
      <main>
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
          clearExpensesList={clearExpensesList}
        />
      </main>
      <h2>Total spending: <span>€ {expenses.reduce((acc, curr) => {
        return (acc += parseInt(curr.amount));
      }, 0)}</span></h2>
    </>
  );
}

export default App;
