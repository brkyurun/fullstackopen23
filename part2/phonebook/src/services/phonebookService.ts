import axios from 'axios';
import { PhonebookEntry } from '../types';

const getEntries = (): Promise<PhonebookEntry[]> => {
  return axios.get('http://localhost:3001/persons').then((res) => res.data);
};

const addEntry = (body: PhonebookEntry) => {
  return axios
    .post('http://localhost:3001/persons', body)
    .then((res) => res.data);
};

const deleteEntry = (id: number) => {
  return axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then((res) => res.data);
};

export { getEntries, addEntry, deleteEntry };
