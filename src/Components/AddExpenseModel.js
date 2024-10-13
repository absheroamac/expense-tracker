import React from 'react'
import Model from 'react-modal'

export const AddExpenseModel = ({isOpen}) => {
  return (
    <Model isOpen={isOpen}>
        <h1>
            Its a model
        </h1>
    </Model>
  )
}
