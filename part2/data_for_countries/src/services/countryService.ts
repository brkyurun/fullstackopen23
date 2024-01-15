import axios from 'axios';

export const getCountries = async () => {
  return axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then((res) => res.data);
};

export const getCountryWeather = (lat: number, lon: number) => {
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${
    import.meta.env.VITE_WEATHER_API_KEY
  }`;

  return axios.get(requestUrl).then((res) => res.data);
};
