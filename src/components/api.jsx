export function getSymbols() {
  return fetch('https://api.exchangerate.host/symbols')
    .then((res) => res.json())
    .then((result) => {
      return Object.values(result.symbols)
    })
}

export function getResult({ valueFrom, valueTo, sum }) {
  return fetch(
    `https://api.exchangerate.host/convert?from=${valueFrom}&to=${valueTo}&amount=${sum}&places=2`
  )
    .then((res) => res.json())
    .then((result) => {
      return result
    })
}
