import { ApiKey } from './ApiKey'

export const fetchWeather = () => {
  return fetch(`https://api.darksky.net/forecast/${ApiKey}/39.751048,-104.996659`)
  .then(res => res.json())
  .then(res => res)
  .catch(error => error.message)
}