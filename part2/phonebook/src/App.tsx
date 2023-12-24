import { ChangeEvent, FormEvent, useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-1234567' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const handleFormSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already in the phonebook`);
      return;
    }

    setPersons(persons.concat({ name: newName, phoneNumber: newPhoneNumber }));
    setNewName('');
    setNewPhoneNumber('');
  };

  const handleNameInput = (ev: ChangeEvent<HTMLInputElement>) => {
    setNewName(ev.target.value);
  };

  const handlePhoneNumberInput = (ev: ChangeEvent<HTMLInputElement>) => {
    setNewPhoneNumber(ev.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.phoneNumber}
        </p>
      ))}
    </div>
  );
};

export default App;
