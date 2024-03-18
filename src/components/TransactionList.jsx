import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions }) {
  const list = transactions.map((item) => {
    return (
      <Transaction
        key={item.id}
        date={item.date}
        description={item.description}
        category={item.category}
        amount={item.amount}
      />
    );
  });
  return (
    <table className="border-collapse border border-slate-500 flex-1">
      <tbody>
        <tr>
          <th>
            <h3 className="">Date</h3>
          </th>
          <th>
            <h3 className="">Description</h3>
          </th>
          <th>
            <h3 className="">Category</h3>
          </th>
          <th>
            <h3 className="">Amount</h3>
          </th>
        </tr>

        {list}
      </tbody>
    </table>
  );
}

export default TransactionsList;
