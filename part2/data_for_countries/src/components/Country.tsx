import { useQuery } from '@tanstack/react-query';
import { getCountryWeather } from '../services/countryService';

export function Country({ country }: { country: unknown }) {
  const { data: weather, isFetching } = useQuery({
    queryKey: [country.name.common],
    queryFn: () => getCountryWeather(country.latlng[0], country.latlng[1]),
  });
  console.log('🚀 ~ Country ~ data:', weather);

  if (isFetching) return null;

  return (
    <div>
      <h1>{country.name.official}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <p>
        <strong>languages:</strong>
      </p>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <h2>Weather in {country.capital}</h2>
      <p>temperature: {weather.main.temp} Celcius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={`Flag of ${country.flags.alt}`}
      />
      <p>wind: {weather.wind.speed} m/s</p>
    </div>
  );
}
