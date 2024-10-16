import React, { useState } from 'react'
import Model from 'react-modal'
import styles from './Model.module.css'
import { enqueueSnackbar } from 'notistack'

export const AddIncomeModel = ({isOpen,type="edit",id,setIsOpen, updateBalance}) => {


  const [income,setIncome] = useState(null);

  const handleInput = (e)=>{
    setIncome(e.target.value)
  }


  const handleSubmit = (event)=>{

    event.preventDefault();
    const price = Number(income);

    if(price<0){
      enqueueSnackbar('Enter a Positive Number in Amount',{variant:"warning"})
    }
    else{
      updateBalance(prev=>prev+price)
      enqueueSnackbar('Income Added Successfully',{variant:"success"})
      handleClose()
    }


  }

  const handleClose = ()=>{
    setIsOpen(false)
  }


  return (
    <Model isOpen={isOpen} onRequestClose={handleClose} className={styles.model}>
      <div className={styles.container}>

      
        <h2 className={styles.title}>
        Add Balance
        </h2>

        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <div className={styles.inputSet}>
                <input type="number" onChange={handleInput} className={styles.input} placeholder='Income Amount' name='title'></input>
                <button type="submit" className={styles.submitButton+" "+styles.button}>Add Balance</button>
                <button onClick={handleClose} className={styles.closeButton+" "+styles.button}>close</button>
                
          </div>
        </div>      
        
            
        </form>
        </div>
    </Model>
  )
}
