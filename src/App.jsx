//context
import { GlobalProvider } from "./context/GlobalState";
//components
import Header from "./components/Header";
import TransactionForm from "./components/transactions/TransactionForm";
import Balance from "./components/balances/Balance";
import "./index.css";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/transactions/transaccionSuma/IncomeExpenses";
import ExpenseChart from "./components/transactions/graph/ExpenseChart";

//App
function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-5/6 ">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-3 ">
            <div className=" mx-2 ml-2 ">
              <h1 className="text-3xl font-bold">
                Seguidor de gastos e ingresos
              </h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col">
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
