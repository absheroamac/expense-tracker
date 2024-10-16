import React from 'react'
import style from './MetricsCard.module.css'
import { AddExpenseModel } from './AddExpenseModel'
import { useState } from 'react'

export const MetricsCard = ({type, balance,expense,setIsOpen}) => {

  return (
    <div className={style.container}>
        {type==="wallet"?(
            <div className={style.card}>
            <h3 className={style.h3}>Wallet Balance :<span className={style.Walletamount}>₹{balance}</span></h3>
            <button className={style.walletButton +" "+ style.button } onClick={()=>setIsOpen(true)}>+ Add Income</button>
            </div>
        ):( <div  className={style.card}>
             <h3>Expenses :<span className={style.expenseAmount}>₹{expense}</span></h3>
            <button className={style.expenseButton +" "+ style.button} onClick={()=>setIsOpen(true)}>+ Add Expense</button>
            </div>
        )}

    </div>
  )
}
