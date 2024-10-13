import React from 'react'
import { CiGift,CiPizza,CiRollingSuitcase,CiCircleRemove, CiEdit } from "react-icons/ci";
import styles from "./Transaction.module.css"


export const Transaction = ({type,item,date,rate,setIsOpen}) => {
    var icon;
    if(type==="food"){
        icon = <CiPizza/>;
    }

    else if(type==="entertainment"){
        icon = <CiGift/>;
    }

    else if(type==="travel"){
        icon = <CiRollingSuitcase/>;
    }

  return (
    <div className={styles.container}>
        <div className={styles.firstContainer}>
            <div className={styles.icon}>
                {icon}
            </div>

            <div>
            <div className={`${styles.item}`}>{item}</div>
            <div className={`${styles.date}`}>{date}</div>

            </div>
            
            
        
        </div>
        <div className={styles.secondContainer}>
            <div className={`${styles.amount}`}>
            ₹{rate}
            </div>
            
            <div className={`${styles.buttonContainer}`}>
                <button onClick={()=> setIsOpen(true)}className={`${styles.button} ${styles.buttonClose}`}><CiCircleRemove/></button>
                <button className={`${styles.button} ${styles.buttonEdit}`}><CiEdit/></button>
            </div>
            
        </div>

    </div>
  )
}
