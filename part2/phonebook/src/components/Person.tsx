import type { PhonebookEntry } from '../types';

type PersonProps = {
  person: PhonebookEntry;
  onClick: (id: number) => void;
};

export const Person = ({ person, onClick }: PersonProps) => {
  return (
    <>
      <p key={person.id}>
        {person.name} {person.phoneNumber}
      </p>
      <button type="button" onClick={() => onClick(person.id)}>
        Delete {person.name}
      </button>
    </>
  );
};
