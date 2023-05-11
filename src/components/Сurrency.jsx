import React, { useEffect, useState } from 'react'

const Currency = ({ inputName, getValue, data }) => {
  const [selected, setSelected] = useState()
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  const onSelectedChange = (e) => {
    setSelected(e.target.value)
    getValue(e.target.value)
    console.log(e.target.value)
  }

  useEffect(() => {
    setIsLoaded(true)

    setItems(data)
    setIsLoaded(false)
  }, [data])

  if (isLoaded) {
    return <div>Загрузка...</div>
  } else {
    return (
      <div>
        <label htmlFor={inputName}>{inputName}</label>
        <select id={inputName} value={selected} onChange={onSelectedChange}>
          {items.map((item) => (
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
