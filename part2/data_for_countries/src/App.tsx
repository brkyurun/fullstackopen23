/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import { getCountries } from './services/countryService';
import { useState } from 'react';
import { Filter } from './components/Filter';
import { Country } from './components/Country';

function App() {
  const { data: countries, isPending } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
  });
  console.log('🚀 ~ App ~ countries:', countries);
  const [filter, setFilter] = useState<string>('');
  const filteredCountries = countries?.filter((country: unknown) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  const handleShowClick = (countryName: string) => {
    setFilter(countryName);
  };

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
      {filteredCountries.length > 10 && (
        <div>Too many matches, please be more specific</div>
      )}
      {filteredCountries.length < 10 &&
        filteredCountries.length !== 1 &&
        filteredCountries.map((country) => (
          <div>
            {country.name.common}
            <button onClick={() => handleShowClick(country.name.common)}>
              show
            </button>
          </div>
        ))}
      {filteredCountries.length === 1 && (
        <Country country={filteredCountries[0]} />
      )}
    </div>
  );
}

export default App;
