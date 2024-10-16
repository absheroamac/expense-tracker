import React, { useEffect, useState } from 'react'
import Model from 'react-modal'
import styles from './Model.module.css'
import { enqueueSnackbar } from 'notistack'
import { FaLessThan } from 'react-icons/fa6'

export const AddExpenseModel = ({isOpen,type="edit",id,setIsOpen,balance,expenses,updateBalance, setExpenses}) => {

  

  const [formData,setFormData] = useState({
    title:"",
    price:"",
    category:"",
    date:""
  })

  const [editExpense, setEditExpense] = useState({})

  // # handleForm Data
  // # handleSubmit
  // # Give required Messages

  const handleChange = (e) => {
    const name = e.target.name
    setFormData(prev => ({ ...prev, [name]: e.target.value }))
}

const getId = () =>{
  if(expenses.length===0){
    return 0;
  }
  else{
    return expenses[0].id + 1;
  }
}

const handleSubmit = (event)=>{

  
  event.preventDefault();
  const price = Number(formData.price);
  if(price<0){
    enqueueSnackbar('Enter a Positive Number in Amount',{variant:"warning"})
  }
  else if(price>balance){
    enqueueSnackbar('Enter expense less than Balance',{variant:"warning"})
  }
  else{
    setExpenses((prev)=>[{...formData,id:getId()},...prev]);
    enqueueSnackbar('Expense added Successfully',{variant:"success"})
    updateBalance(prev=>prev-price)
  }

  handleClose()

}

const handleEdit = (event)=>{
  event.preventDefault();
  // price should be more than 0
  // price should be withing range

  const price = formData.price;
  const prevPrice = editExpense.price;
  const newBalance = balance - prevPrice;

  if(price<0){
    enqueueSnackbar('Enter a Positive Number in Amount',{variant:"warning"})
  }
  else if(price>newBalance){
    enqueueSnackbar('Enter expense less than Balance',{variant:"warning"})
  }
  else{
    setExpenses((prev)=>[{...formData,id:getId()},...prev]);
    const newList = expenses.map((obj)=>{
      if(obj.id===id){
        obj.price = price;
        obj.title = formData.title;
        obj.category = formData.category;
        obj.date = formData.date;

        console.log(obj)

        return obj
      }
      else{
        return obj
      }
    })

    setExpenses(newList)
    updateBalance(newBalance-price);
    handleClose()
    enqueueSnackbar('Expense Editted Successfully',{variant:"success"})

  }

 



}




  const handleClose = ()=>{
    setIsOpen(false)
  }


  useEffect(()=>{
    console.log(id)
    if(id){
      const obj = expenses.find(element=>element.id===id);
      setEditExpense(obj)
      setFormData({title:obj.title,
        price:obj.price,
        category:obj.category,
        date:obj.date})
      
    }
  },[id])

  
    
 


  return (
    <Model isOpen={isOpen} onRequestClose={handleClose} className={styles.model}>
      <div className={styles.container}>

      
        <h2 className={styles.title}>
          {type==="edit"?"Edit Expenses":"Add Expenses"}
        </h2>

        <form className={styles.form} onSubmit={id? handleEdit :handleSubmit}>
        <div className={styles.inputContainer}>
          <div className={styles.inputSet}>
                <input value={formData.title} required type="text" className={styles.input} placeholder='Title' onChange={handleChange} name='title'></input>
                <input value={formData.price} required type="number" className={styles.input} placeholder='Price' onChange={handleChange} name='price'></input>
          </div>

          <div className={styles.inputSet}>
                <select value={formData.category} required className={styles.input} onChange={handleChange} name='category'>
                  <option value={""} disabled>Select Category</option>
                  <option value={"food"}>Food</option>
                  <option value={"entertainment"}>Entertainment</option>
                  <option value={"travel"}>Travel</option>
                </select>
                <input value={formData.date} required type="date" className={styles.input} placeholder='dd/mm/yyyy' onChange={handleChange} name='date'></input>
          </div>
                
        </div>
        <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitButton+" "+styles.button}>{id? "Edit Expense":"Add Expense"}</button>
            <button onClick={handleClose} className={styles.closeButton+" "+styles.button}>close</button>
        </div>
        </form>
        </div>
    </Model>
  )
}
