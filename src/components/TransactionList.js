import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction} from './Transaction';

// Below is a React functional component named `TransactionList`. It uses the `useContext` hook to access the `transactions` data from the `GlobalContext`. The component then renders a list of transactions, where each transaction is represented by a `Transaction` component, and the list is preceded by an `<h3>` heading that says "History".

export const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);

  return (
    <>
            <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}

export default TransactionList
