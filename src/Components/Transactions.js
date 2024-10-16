import React, { useEffect } from 'react'
import { Transaction } from './Transaction'
import styles from './Transactions.module.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from 'react';
import { AddExpenseModel } from './AddExpenseModel'
import { enqueueSnackbar } from 'notistack'

export const Transactions = ({expenses,balance,updateBalance,setExpenses}) => {

  const [isOpen,setIsOpen] = useState(false)
  const [updateId,setUpdateId] = useState(null)
  const [currentPage,setCurrentPage] = useState(0)
  const [pages,setPages] = useState(1);
  const limit = 3;
  const [liveExpenses,setLiveExpenses] = useState([]);

  const isEnd = currentPage+1===pages;
  const isFirst = currentPage===0;
  


  const handleEdit = (id)=>{
    setUpdateId(id)
    setIsOpen(true)
  }

  const handleDlt = (id)=>{

    const editExpense = expenses.find(expense=>expense.id===id);
    setExpenses(expenses.filter(expense=>expense.id!=id))
    updateBalance(prev=>prev+Number(editExpense.price))
    enqueueSnackbar('Expense Deleted Successfully',{variant:"success"})
  }

  const handleNext = ()=>{ 
    setCurrentPage(prev=>prev+1); 
    
  }

  useEffect(()=>{
    const start = currentPage*3; 
    console.log("start is "+start)
    
    const end = Math.min(start+3,expenses.length) 
    console.log("end is "+end)
    setLiveExpenses(expenses.slice(start,end)) 
    console.log(expenses.slice(start,end))

  },[currentPage])

  const handlePrev = ()=>{
    setCurrentPage(prev=>prev-1);
  }

  useEffect(()=>{

    const pages = Math.ceil(expenses.length/3) 
    setPages(pages); 
    setCurrentPage(0); 
    setLiveExpenses(expenses.slice(0,3)) 

  },[expenses])
  
  return (
    <div className={styles.container}>
    <div>
      {
        expenses.length===0?"No Items":liveExpenses.map((transaction=>(<Transaction key={transaction.id} data={transaction} handleEdit ={()=>handleEdit(transaction.id)} handleDlt={()=>handleDlt(transaction.id)} />)))
      }
        

    </div>
    {pages>1&&(<div className={styles.pagination}>
        <button disabled={isFirst} onClick={handlePrev} className={styles.arrow}><FaArrowLeft/></button>
        <button className={styles.digitButton}>{currentPage+1}</button>
        <button disabled={isEnd} onClick={handleNext} className={styles.arrow}><FaArrowRight/></button>
    </div>)}
    

    <AddExpenseModel id={updateId} isOpen={isOpen} setIsOpen={setIsOpen} balance={balance} updateBalance={updateBalance} setExpenses={setExpenses} expenses={expenses} type='edit'/>
    </div>
  )
}
