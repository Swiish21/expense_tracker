import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Component that renders a list of transactions. It also renders a summary of
 * income and expense.
 * @return {ReactElement} The TransactionList component.
 */
/******  a312dfd5-a9eb-4d90-92dc-bbae7350f0e1  *******/
export const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);

  return (
    <div>
            <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <li key={transaction.id}>
            <span>{transaction.text}</span>
            <span className={transaction.amount > 0 ? 'plus' : 'minus'}>
              {transaction.amount}
            </span>
            <button className="delete-btn">x</button>
          </li>
        ))}
        <li className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p className="money plus">+$0.00</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p className="money minus">-$0.00</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default TransactionList
