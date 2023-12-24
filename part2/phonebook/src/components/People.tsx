import { ComponentPropsWithoutRef } from 'react';
import { Person } from './Person';

export const People = ({
  people,
}: {
  people: ComponentPropsWithoutRef<typeof Person>['person'][];
}) => {
  return people.map((person) => <Person key={person.id} person={person} />);
};
