import axios from 'axios';

export const getCountries = async () => {
  return axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then((res) => res.data);
};
