import React, { useEffect } from "react";
import { useGlobalState } from "../../../context/GlobalState";
import { VictoryPie, VictoryLabel } from "victory";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  // Calcula los totales dentro del componente ExpenseChart
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const total = totalIncome + totalExpenses;

  const totalExpensesPercentage = Math.round(
    (totalExpenses / totalIncome) * 100
  );
  const totalIncomePercentage = 100 - totalExpensesPercentage;

  useEffect(() => {
    // Esto asegura que el componente se vuelva a renderizar cada vez que cambie la lista de transacciones
  }, [transactions]);

  // Si no hay transacciones, mostrar el gráfico completamente en azul
  if (transactions.length === 0) {
    return (
      <VictoryPie
        colorScale={["#3498db"]}
        data={[{ x: "Ingresos", y: 100 }]}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={
          <VictoryLabel angle={45} style={{ fill: "white", fontSize: 20 }} />
        }
      />
    );
  }

  return (
    <VictoryPie
      colorScale={["#ef3838", "#2ecc71"]}
      data={[
        { x: "Gastos", y: totalExpensesPercentage },
        { x: "Ingresos", y: totalIncomePercentage },
      ]}
      animate={{
        duration: 400,
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
    />
  );
}

export default ExpenseChart;
