import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Filter } from './components/Filter';
import { Form } from './components/Form';
import { People } from './components/People';
import { addPerson, getPersons } from './services/phonebookService';

export type Person = {
  name: string;
  phoneNumber: string;
  id: number;
};

const App = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [newName, setNewName] = useState<string>('');
  const [newPhoneNumber, setNewPhoneNumber] = useState<string>('');
  const [filterQuery, setFilterQuery] = useState<string>('');
  const peopleToRender = filterQuery
    ? persons.filter((person) =>
        person.name.toLowerCase().startsWith(filterQuery)
      )
    : persons;

  useEffect(() => {
    getPersons().then((persons) => setPersons(persons as Person[]));
  }, []);

  const handleFormSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already in the phonebook`);
      return;
    }

    addPerson({
      name: newName,
      phoneNumber: newPhoneNumber,
      id: persons.length + 1,
    }).then((person) => {
      const newPersons = persons.concat(person);
      setPersons(newPersons);
    });

    setNewName('');
    setNewPhoneNumber('');
  };

  const handleNameInput = (ev: ChangeEvent<HTMLInputElement>) => {
    setNewName(ev.target.value);
  };

  const handlePhoneNumberInput = (ev: ChangeEvent<HTMLInputElement>) => {
    setNewPhoneNumber(ev.target.value);
  };

  const handleFilterQueryInput = (ev: ChangeEvent<HTMLInputElement>) => {
    setFilterQuery(ev.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filterQuery={filterQuery} onChange={handleFilterQueryInput} />
      <h2>Add new</h2>
      <Form
        handleFormSubmit={handleFormSubmit}
        name={newName}
        phoneNumber={newPhoneNumber}
        handleNameInput={handleNameInput}
        handlePhoneNumberInput={handlePhoneNumberInput}
      />
      <h2>Numbers</h2>
      <People people={peopleToRender} />
    </div>
  );
};

export default App;
