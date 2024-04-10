import React from "react";
import { useGlobalState } from "../../context/GlobalState";
function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();
  return (
    <li
      className="bg-zinc-600 text-white  px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center"
      key={transaction.id}
    >
      <div>
        <p className="text-sm px-2">{transaction.description}</p>
      </div>
      <div>
        <span>${transaction.amount}</span>

        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          x
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
