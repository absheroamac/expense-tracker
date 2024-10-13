import React from 'react'
import { Transaction } from './Transaction'
import styles from './Transactions.module.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export const Transactions = ({method}) => {
  return (
    <div className={styles.container}>
    <div>
        <Transaction type="food" item="Samoosa" date="March 20, 2024" rate={200} setIsOpen = {method}/>
        <Transaction type="entertainment" item="Movie" date="March 20, 2024" rate={200} setIsOpen = {method}/>
        <Transaction type="travel" item="Auto" date="March 20, 2024" rate={200} setIsOpen = {method}/>
    </div>
    <div className={styles.pagination}>
        <button className={styles.arrow}><FaArrowLeft/></button>
        <button className={styles.digitButton}>1</button>
        <button className={styles.arrow}><FaArrowRight/></button>
    </div>
    </div>
  )
}
