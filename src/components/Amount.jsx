import React, { useState } from 'react'

function Amount({ getSum }) {
  const [number, setNumber] = useState('')

  const onNumberChange = (e) => {
    setNumber(e.target.value)
    getSum(e.target.value)
  }

  return (
    <div>
      <label htmlFor="amount">Amount</label>
      <input
        value={number}
        onChange={onNumberChange}
        type="number"
        placeholder="Enter value"
        id="amount"
      />
    </div>
  )
}

export default Amount
