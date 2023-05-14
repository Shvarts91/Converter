import React, { useEffect, useState } from 'react'

const Currency = ({ value, inputName, getValue, currencies }) => {
  const [isLoaded, setIsLoaded] = useState(true)

  const onSelectedChange = (e) => {
    getValue(e.target.value)
  }

  useEffect(() => {
    setIsLoaded(false)
  }, [currencies])

  if (isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="selectBlock">
        <label htmlFor={inputName}>{inputName}</label>
        <select id={inputName} value={value} onChange={onSelectedChange}>
          {currencies.map((item) => (
            <option value={item.code} key={`${inputName}-${item.code}`}>
              {item.code} ({item.description})
            </option>
          ))}
        </select>
      </div>
    )
  }
}
export default Currency
