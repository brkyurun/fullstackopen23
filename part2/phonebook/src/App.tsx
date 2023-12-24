import { ChangeEvent, FormEvent, useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [filterQuery, setFilterQuery] = useState('');
  const peopleToRender = filterQuery
    ? persons.filter((person) =>
        person.name.toLowerCase().startsWith(filterQuery)
      )
    : persons;

  const handleFormSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already in the phonebook`);
      return;
    }

    setPersons(
      persons.concat({
        name: newName,
        phoneNumber: newPhoneNumber,
        id: persons.length + 1,
      })
    );
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
      <div>
        filter shown with:{' '}
        <input
          type="text"
          value={filterQuery}
          onChange={handleFilterQueryInput}
        />
      </div>
      <h2>Add new</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input type="text" onChange={handleNameInput} value={newName} />
        </div>
        <div>
          phone:{' '}
          <input
            type="text"
            onChange={handlePhoneNumberInput}
            value={newPhoneNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {peopleToRender.map((person) => (
        <p key={person.name}>
          {person.name} {person.phoneNumber}
        </p>
      ))}
    </div>
  );
};

export default App;
