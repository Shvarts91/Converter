function Amount({ sum, getSum }) {
  const onNumberChange = (e) => {
    getSum(e.target.value)
  }

  return (
    <div className="inputBlock">
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
