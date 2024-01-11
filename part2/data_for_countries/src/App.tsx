/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import { getCountries } from './services/countryService';
import { useState } from 'react';
import { Filter } from './components/Filter';

function App() {
  const { data: countries, isPending } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
  });
  console.log('🚀 ~ App ~ countries:', countries);
  const [filter, setFilter] = useState<string>('');
  const filteredCountries = countries?.filter((country: unknown) =>
    country.name.official.toLowerCase().includes(filter.toLowerCase())
  );

  if (isPending) {
    return <div>Loading countries...</div>;
  }

  if (filter === '') {
    return (
      <div>
        <Filter filter={filter} setFilter={setFilter} />
        Type a country name to start searching.
      </div>
    );
  }

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      {filteredCountries.length > 10 ? (
        <div>Too many matches, please be more specific</div>
      ) : filteredCountries.length < 10 ? (
        filteredCountries.map((country) => <div>{country.name.official}</div>)
      ) : (
        filteredCountries[0]
      )}
    </div>
  );
}

export default App;
