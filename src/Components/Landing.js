import React, { useEffect, useState } from 'react'
import styles from './Landing.module.css'
import { MetricsCard } from './MetricsCard'
import { PieChartContainer } from './PieChartContainer'
import { Transactions } from './Transactions'
import BarChartContainer from './BarChart'
import { AddExpenseModel } from './AddExpenseModel'
import { AddIncomeModel } from './AddIncomeModel'



export const Landing = () => {

  const [balance,setBalance] = useState(0);
  const [expense,setExpense] = useState(0);
  const [expenseList,setExpenseList] = useState([]);
  const [isMounted,setIsMounted] = useState(false)

  const [isOpen,setIsOpen] = useState(false);
  const [openIncomeModel, setOpenIncomeModel] = useState(false)

  const [pieChartData,setPieChartData] = useState({
    food:0, entertainment:0, travel:0
  })
  const [expenseCount, setExpenseCount] = useState({
    food:0, entertainment:0, travel:0
  })

  const populateData = () => {
    // Temporary variables to accumulate data
    let updatedPieChartData = { food: 0, entertainment: 0, travel: 0 };
    let updatedExpenseCount = { food: 0, entertainment: 0, travel: 0 };
    let totalExpense = 0;
  
    // Loop through the expenseList and accumulate the values
    for (let i = 0; i < expenseList.length; i++) {
      const item = expenseList[i];
      const price = Number(item.price);
  
      if (item.category === "food") {
        updatedPieChartData.food += price;
        updatedExpenseCount.food += 1;
      } else if (item.category === "entertainment") {
        updatedPieChartData.entertainment += price;
        updatedExpenseCount.entertainment += 1;
      } else if (item.category === "travel") {
        updatedPieChartData.travel += price;
        updatedExpenseCount.travel += 1;
      }
  
      totalExpense += price; // Accumulate the total expense
    }
  
    // Update the state once with the accumulated values
    setPieChartData(updatedPieChartData);
    setExpenseCount(updatedExpenseCount);
    setExpense(totalExpense); // Update the total expense
  };

  const updateBalance = (val)=>{
    setBalance(val)
  }

  const data = [
    { name: "Food", value: pieChartData.food },
    { name: "Entertainment", value: pieChartData.entertainment },
    { name: "Travel", value: pieChartData.travel },
  ];

  const barChartData = [
    { name: "Entertainment", uv: expenseCount.entertainment },
    { name: "Food", uv: expenseCount.food },
    { name: "Travel", uv: expenseCount.travel }
  ];

  

  useEffect(() => {

    const storedBalance = localStorage.getItem('balance');
    const storedExpenses = localStorage.getItem('expenses');

    if (storedBalance === null) {
      const initialBalance = 5000;
      setBalance(initialBalance);
      localStorage.setItem('balance', initialBalance);
      localStorage.setItem('expenses', JSON.stringify([]));
    } else {
      setBalance(Number(storedBalance));
      const expensesFromStorage = storedExpenses ? JSON.parse(storedExpenses) : [];
      setExpenseList(expensesFromStorage);
    }
    setIsMounted(true)
  }, []);

  // Update localStorage when balance or expenseList changes
  useEffect(() => {
    if(isMounted){

    localStorage.setItem('balance', balance);
    localStorage.setItem('expenses', JSON.stringify(expenseList));

    }

    populateData()
    
  }, [balance, expenseList]); // Only run when balance or expenseList changes

  return (
    <div>
      <h1 className={styles.title}>Expense Tracker</h1>
      <div>
        <div className={styles.firstSection}> {/* First Section */}
          <div className={styles.walletContainer}>
            <MetricsCard type="wallet" balance={balance} setBalance={setBalance} setIsOpen={setOpenIncomeModel}/>
          </div>

          <div className={styles.walletContainer}>
            <MetricsCard type="expense" expense={expense} setIsOpen={setIsOpen}/>

          </div>
            
            
  
          <div className={styles.pieChartContainer}> {/* Pie Chart */}
            <PieChartContainer data={data}/>
          </div>

        </div>
        <div className={styles.secondSection}> {/* Second Section */}

          <div className={styles.transactionsContainer}>
            <h2 className={styles.title}>Recent Transactions</h2>
            <Transactions balance={balance} expenses={expenseList} updateBalance={updateBalance} setExpenses={setExpenseList}/>

          </div>

          <div className={styles.barChartContainer}>
            <h2 className={styles.title}>Top Expenses</h2>
            <BarChartContainer data={barChartData}/>

          </div>

        </div>

        
      </div>

      <AddExpenseModel expenses={expenseList} updateBalance= {setBalance} setExpenses={setExpenseList} isOpen={isOpen} setIsOpen={setIsOpen} type='add'/>
      <AddIncomeModel isOpen={openIncomeModel} setIsOpen={setOpenIncomeModel} updateBalance={setBalance}/>



    </div>
  )
}
