import { MdEditNote, MdDelete } from "react-icons/md";

export const ExpenseItem = ({ expense, handleEdit, handleRemove }) => {
  const { id, charge, amount } = expense;

  return (
    <li>
      <div>
        <span>{charge} </span>
        <span>€{amount}</span>
      </div>
      <div>
        <button onClick={() => handleEdit(id)}>
          <MdEditNote />
        </button>
        <button onClick={() => handleRemove(id)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
