import { ComponentPropsWithoutRef } from 'react';
import { Person } from './Person';

export const People = ({
  people,
  onClick,
}: {
  people: ComponentPropsWithoutRef<typeof Person>['person'][];
  onClick: (id: number) => void;
}) => {
  return people.map((person) => (
    <Person key={person.id} person={person} onClick={onClick} />
  ));
};
