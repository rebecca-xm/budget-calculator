import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import { MdDelete } from "react-icons/md";

export const ExpenseList = ({
  expenses,
  handleEdit,
  handleRemove,
  clearExpensesList,
}) => {
  return (
    <>
      <ul>
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleEdit={handleEdit}
              handleRemove={handleRemove}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button onClick={clearExpensesList}>
          Clear Expenses <MdDelete />
        </button>
      )}
    </>
  );
};
