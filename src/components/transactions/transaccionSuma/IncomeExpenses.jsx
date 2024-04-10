import React from "react";
import { useGlobalState } from "../../../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();
  const amounts = transactions.map((transaction) => transaction.amount);

  //ingresos
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc, item), 0)
    .toFixed(2);
  const expense =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc -= item), 0)
      .toFixed(2) * -1;
  return (
    <>
      <div className="flex justify-between my-2">
        <h1>Ingresos</h1>
        <p> {income} </p>
      </div>
      <div className="flex justify-between my-2">
        <h1>Perdidas</h1>
        <p className="text-red-400">{expense}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
