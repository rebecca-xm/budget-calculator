import { MdSend } from "react-icons/md";

export const ExpenseForm = () => {
  return (
    <form>
      <div>
        <div>
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            id="charge"
            name="charge"
            placeholder="e.g. bills"
          />
        </div>
        <div>
          <label htmlFor="amount">amount (€)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="e.g. 250"
          />
        </div>
      </div>
      <button type="submit">Add expense to your list <MdSend /></button>
    </form>
  );
};
