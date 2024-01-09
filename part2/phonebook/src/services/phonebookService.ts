import axios from 'axios';
import { Person } from '../App';

const getPersons = (): Promise<Person[]> => {
  return axios.get('http://localhost:3001/persons').then((res) => res.data);
};

const addPerson = (body: Person) => {
  return axios
    .post('http://localhost:3001/persons', body)
    .then((res) => res.data);
};

export { getPersons, addPerson };
