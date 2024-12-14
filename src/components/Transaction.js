import React from "react";

/**
 * A Transaction component to render a single transaction
 * @param {transaction} prop - an object with a 'text' and 'amount' property
 * @returns a JSX element with a list item containing the  specific transaction text and the amount
 */

export const Transaction = ({transaction}) => {
    return <div>
        <li className= 'minus'>
            {Transaction.text} <span>{Transaction.amount}</span><button className="delete-btn">x</button>
        </li>

        {/* <li className="plus">
            {Transaction.text} <span>{Transaction.amount}</span><button className="delete-btn">x</button>
        </li> */}
    </div>;
};
