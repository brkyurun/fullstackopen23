import { Dispatch, SetStateAction } from 'react';

type FilterProps = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

export function Filter({ filter, setFilter }: FilterProps) {
  return (
    <div>
      <label htmlFor="filterCountries">find countries</label>
      <input
        type="text"
        name="filterCountries"
        id="filterCountries"
        value={filter}
        onChange={(ev) => setFilter(ev.target.value)}
      />
    </div>
  );
}
