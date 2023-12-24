type PersonProps = {
  person: {
    name: string;
    phoneNumber: string;
    id: number;
  };
};

export const Person = ({ person }: PersonProps) => {
  return (
    <p key={person.id}>
      {person.name} {person.phoneNumber}
    </p>
  );
};
