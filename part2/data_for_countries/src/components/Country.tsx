export function Country({ country }: { country: unknown }) {
  return (
    <div>
      <h1>{country.name.official}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <p>
        <strong>languages:</strong>
      </p>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.flags.alt}`} />
    </div>
  );
}
