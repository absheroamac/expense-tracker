import React from 'react'
import PieChartComponent from './PieChart'
import styles from './PieChartContainer.module.css'

export const PieChartContainer = (data) => {
  return (
    <div className={styles.pieChartContainer}>
        <PieChartComponent data={data}/>
        <div className={styles.indicatorContainer}>
            <div className={styles.indicatorSet}>
                <div className={styles.foodIndicator + " "+ styles.indicator}>

                </div>
                <div>
                Food
                </div>
            </div>

            <div className={styles.indicatorSet}>
                <div className={styles.entertainmentIndicator + " "+ styles.indicator}>

                </div>
                <div>
                Entertainment
                </div>
            </div>

            <div className={styles.indicatorSet}>
                <div className={styles.travelIndicator + " "+ styles.indicator}>

                </div>
                <div>
                Travel
                </div>
            </div>

        </div>
    </div>
  )
}
