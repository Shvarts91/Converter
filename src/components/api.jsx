const ROOT_URL = 'https://api.exchangerate.host/'
export function getSymbols() {
  return fetch(`${ROOT_URL}symbols`)
    .then((res) => res.json())
    .then((result) => {
      return Object.values(result.symbols)
    })
}

export function getResult({ valueFrom, valueTo, sum, date }) {
  return fetch(
    `${ROOT_URL}convert?from=${valueFrom}&to=${valueTo}&amount=${sum}&places=2&date=${date}`
  ).then((res) => res.json())
}
