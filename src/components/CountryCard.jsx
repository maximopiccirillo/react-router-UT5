import { Link } from 'react-router-dom'

// esta funcion muestra el nombre y la bandera del pais
// que al hacer click navega a countries/pais en este caso con el alpa2code

function CountryCard({ country }) {
  return (
    <Link to={`/countries/${country.alpha2Code}`} className="country-card">
      <img
        src={country.flags?.svg || country.flags?.png}
        alt={`Bandera de ${country.name}`}
        className="country-flag"
      />
      <span>{country.name}</span>
    </Link>
  )
}

export default CountryCard
