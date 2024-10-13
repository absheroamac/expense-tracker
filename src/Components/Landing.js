import React, { useState } from 'react'
import styles from './Landing.module.css'
import { MetricsCard } from './MetricsCard'
import { PieChartContainer } from './PieChartContainer'
import { Transactions } from './Transactions'
import BarChartContainer from './BarChart'
import { AddExpenseModel } from './AddExpenseModel'


export const Landing = () => {

  const [isOpen, setIsOpen] = useState(false)

  const data = [
    { name: "Food", pv: 240 },
    { name: "Entertainment", pv: 2210 },
    { name: "Travel", pv: 2300 },
  ];

  return (
    <div>
      <h1 className={styles.title}>Expense Tracker</h1>
      <div>
        <div className={styles.firstSection}> {/* First Section */}
          <div className={styles.walletContainer}>
            <MetricsCard type="wallet" />
          </div>

          <div className={styles.walletContainer}>
            <MetricsCard type="expense" />

          </div>
            
            
  
          <div className={styles.pieChartContainer}> {/* Pie Chart */}
            <PieChartContainer/>
          </div>

        </div>
        <div className={styles.secondSection}> {/* Second Section */}

          <div className={styles.transactionsContainer}>
            <h2 className={styles.title}>Recent Transactions</h2>
            <Transactions method={setIsOpen}/>

          </div>

          <div className={styles.barChartContainer}>
            <h2 className={styles.title}>Top Expenses</h2>
            <BarChartContainer/>

          </div>

        </div>

        <AddExpenseModel isOpen={isOpen}/>
      </div>




    </div>
  )
}
