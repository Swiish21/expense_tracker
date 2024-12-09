import React from "react";

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