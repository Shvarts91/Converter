import React from 'react'
import '../App.css'
import Amount from './Amount'
import Currency from './Сurrency'
import { useState, useEffect } from 'react'
import { getResult } from './api'
import { getSymbols } from './api'

function Result() {
  const [finResult, setFinResult] = useState({})
  const [sum, setSum] = useState()
  const [valueFrom, setValueFrom] = useState()
  const [valueTo, setValueTo] = useState('')
  const [data, setData] = useState([])

  const getSum = (result) => {
    setSum(result)
  }

  const getValueFrom = (result) => {
    setValueFrom(result)
  }

  const getValueTo = (result) => {
    setValueTo(result)
  }

  useEffect(() => {
    getSymbols().then((result) => {
      setData(result)
    })
  }, [])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    getResult({ valueFrom, valueTo, sum }).then((result) => {
      let sumResult = result.result
      setFinResult({
        finishedValue: sumResult,
        finishedValueTo: result.query.to,
      })
    })
  }
  const convertedBody = `${finResult.finishedValue || ''}  ${
    finResult.finishedValueTo || ''
  }`
  return (
    <div>
      <form onSubmit={onSubmitHandler} className="App">
        <div className="bodyForm">
          <Amount getSum={getSum} />
          <Currency data={data} inputName="From" getValue={getValueFrom} />
          <Currency data={data} inputName="To" getValue={getValueTo} />
        </div>
        <button>Convert</button>
      </form>
      <div className="result">
        {finResult.finishedValue === null
          ? 'Currecny is not supported'
          : convertedBody}
      </div>
    </div>
  )
}

export default Result
