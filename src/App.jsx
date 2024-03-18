import { useState, useEffect } from "react";
import Search from "./components/Search";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";

export default function App() {
  const [transaction, setTransaction] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchTransaction() {
      const res = await fetch("http://localhost:3000/transactions");
      const data = await res.json();
      setTransaction(data);
    }

    fetchTransaction();
  }, []);

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <TransactionForm />
      <TransactionList transactions={transaction} />
    </div>
  );
}
