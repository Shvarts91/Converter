function Amount({ sum, getSum }) {
  const onNumberChange = (e) => {
    getSum(e.target.value)
  }

  return (
    <div>
      <label htmlFor="amount">Amount</label>
      <input
        value={sum}
        onChange={onNumberChange}
        type="number"
        placeholder="Enter value"
        id="amount"
      />
    </div>
  )
}

export default Amount
