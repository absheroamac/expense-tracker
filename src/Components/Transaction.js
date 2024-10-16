import React from 'react'
import { CiGift,CiPizza,CiRollingSuitcase,CiCircleRemove, CiEdit } from "react-icons/ci";
import styles from "./Transaction.module.css"
import { AddExpenseModel } from './AddExpenseModel'



export const Transaction = ({data,handleEdit, handleDlt}) => {
    
    

    var icon;
    if(data.category==="food"){
        icon = <CiPizza/>;
    }

    else if(data.category==="entertainment"){
        icon = <CiGift/>;
    }

    else if(data.category==="travel"){
        icon = <CiRollingSuitcase/>;
    }

  return (
    <div className={styles.container}>
        <div className={styles.firstContainer}>
            <div className={styles.icon}>
                {icon}
            </div>

            <div>
            <div className={`${styles.item}`}>{data.title}</div>
            <div className={`${styles.date}`}>{data.date}</div>

            </div>
            
            
        
        </div>
        <div className={styles.secondContainer}>
            <div className={`${styles.amount}`}>
            ₹{data.price}
            </div>
            
            <div className={`${styles.buttonContainer}`}>
                <button onClick={handleDlt} className={`${styles.button} ${styles.buttonClose}`}><CiCircleRemove/></button>
                <button onClick={handleEdit} className={`${styles.button} ${styles.buttonEdit}`}><CiEdit/></button>
            </div>
            
        </div>

    </div>
  )
}
