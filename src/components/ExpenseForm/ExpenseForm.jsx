import { MdSend } from "react-icons/md";

export const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            id="charge"
            name="charge"
            placeholder="e.g. bills"
            min="0"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div>
          <label htmlFor="amount">amount (€)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="e.g. 250"
            value={amount}
            min="0"
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit">
        {edit ? "Edit " : "Add expense to your list"}
        <MdSend />
      </button>
    </form>
  );
};
