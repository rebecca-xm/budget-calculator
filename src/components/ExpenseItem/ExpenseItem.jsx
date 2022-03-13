import { MdEditNote, MdDelete } from "react-icons/md";

export const ExpenseItem = ({ expense }) => {
  const { id, charge, amount } = expense;

  return (
    <li>
      <div>
        <span>{charge} </span>
        <span>€{amount}</span>
      </div>
      <div>
        <button>
          <MdEditNote />
        </button>
        <button>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
