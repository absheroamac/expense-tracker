import React from 'react'
import style from './MetricsCard.module.css'

export const MetricsCard = ({type, amount=200}) => {
  return (
    <div className={style.container}>
        {type==="wallet"?(
            <div className={style.card}>
            <h3>Wallet Balance :<span className={style.Walletamount}>₹{amount}</span></h3>
            <button className={style.walletButton +" "+ style.button }>+ Add Income</button>
            </div>
        ):( <div  className={style.card}>
             <h3>Expenses :<span className={style.expenseAmount}>₹{amount}</span></h3>
            <button className={style.expenseButton +" "+ style.button}>+ Add Expense</button>
            </div>
        )}
    </div>
  )
}
