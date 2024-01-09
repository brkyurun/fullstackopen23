import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Filter } from './components/Filter';
import { Form } from './components/Form';
import { People } from './components/People';
import {
  addEntry,
  deleteEntry,
  getEntries,
  updateEntry,
} from './services/phonebookService';
import { PhonebookEntry } from './types';
import { Notification } from './components/Notification';
import './styles.css';

const NOTIFICATION_TIMEOUT = 2000;

const App = () => {
  const [persons, setPersons] = useState<PhonebookEntry[]>([]);
  const [newName, setNewName] = useState<string>('');
  const [newPhoneNumber, setNewPhoneNumber] = useState<string>('');
  const [filterQuery, setFilterQuery] = useState<string>('');
  const [notificationOptions, setNotificationOptions] = useState<{
    message: string | null;
    status?: 'notification' | 'error';
  }>({
    message: null,
    status: 'notification',
  });
  const peopleToRender = filterQuery
    ? persons.filter((person) =>
        person.name.toLowerCase().startsWith(filterQuery)
      )
    : persons;

  useEffect(() => {
    getEntries().then((people) => setPersons(people as PhonebookEntry[]));
  }, []);

  const handleFormSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const existingPerson =
      persons.find((person) => person.name === newName) ?? null;

    if (existingPerson) {
      updateEntry(existingPerson.id, {
        ...existingPerson,
        phoneNumber: newPhoneNumber,
      })
        .then(() =>
          setPersons(
            persons.map((person) =>
              person.id !== existingPerson.id
                ? person
                : { ...existingPerson, phoneNumber: newPhoneNumber }
            )
          )
        )
        .catch(() => {
          setNotificationOptions({
            message: `${existingPerson.name} does not exist anymore.`,
            status: 'error',
          });
          setTimeout(
            () =>
              setNotificationOptions({ message: null, status: 'notification' }),
            NOTIFICATION_TIMEOUT
          );

          setPersons(
            persons.filter((person) => existingPerson.id !== person.id)
          );
        });

      setNotificationOptions({
        message: `Updated phone number for ${newName}.`,
      });
      setTimeout(
        () => setNotificationOptions({ message: null }),
        NOTIFICATION_TIMEOUT
      );

      setNewName('');
      setNewPhoneNumber('');

      return;
    }

    setNotificationOptions({ message: `Added ${newName} to the phonebook.` });
    setTimeout(
      () => setNotificationOptions({ message: null }),
      NOTIFICATION_TIMEOUT
    );

    addEntry({
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

  const handleDelete = (id: number) => {
    if (
      !window.confirm(
        `Are you sure you want to delete ${
          persons.find((person) => person.id === id)?.name
        }?`
      )
    )
      return;

    deleteEntry(id).then(() => {
      const updatedPersons = persons.filter((person) => person.id !== id);
      setPersons(updatedPersons);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification {...notificationOptions} />
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
      <People people={peopleToRender} onClick={handleDelete} />
    </div>
  );
};

export default App;
