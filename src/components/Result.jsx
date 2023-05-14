import React from 'react'
import '../styles/app.css'
import Amount from './Amount'
import Currency from './Сurrency'
import DatePicker from './DatePicker'
import { useState, useEffect } from 'react'
import { getResult } from '../api/api'
import { getSymbols } from '../api/api'

function Result() {
  const [finResult, setFinResult] = useState({})
  const [sum, setSum] = useState('100')
  const [valueFrom, setValueFrom] = useState('EUR')
  const [valueTo, setValueTo] = useState('USD')
  const [currencies, setCurrencies] = useState([])
  const [date, setDate] = useState(new Date())

  const getSum = (result) => {
    setSum(result)
  }

  const getValueFrom = (result) => {
    setValueFrom(result)
  }

  const getValueTo = (result) => {
    setValueTo(result)
  }

  const getDate = (result) => {
    setDate(result)
  }

  useEffect(() => {
    getSymbols().then((result) => {
      setCurrencies(result)
    })
  }, [])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const formattedDate = new Date(date).toISOString().slice(0, 10)

    getResult({ valueFrom, valueTo, sum, date: formattedDate }).then(
      ({ result, query }) => {
        setFinResult({
          finishedValue: result,
          finishedValueTo: query.to,
        })
      }
    )
  }
  const convertedBody = `${finResult.finishedValue || ''}  ${
    finResult.finishedValueTo || ''
  }`
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="headerBlock">
          <h1>Curency converter</h1>
          <DatePicker date={date} getDate={getDate} />
        </div>
        <div className="bodyForm">
          <Amount sum={sum} getSum={getSum} />
          <Currency
            value={valueFrom}
            currencies={currencies}
            inputName="From"
            getValue={getValueFrom}
          />
          <Currency
            value={valueTo}
            currencies={currencies}
            inputName="To"
            getValue={getValueTo}
          />
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
