import { useParams, Link } from 'react-router-dom'
import { useFetchJSON } from '../hooks/useFetchJSON'
import EstadoCarga from '../components/EstadoCarga'

function CountryDetail() {

  const { cca2 } = useParams()

  const { data: country, isLoading, error } = useFetchJSON(
    `https://countries.dev/alpha/${cca2}`
  )

  // crea el detalle del pais, muestra nombre, bandera, codigo, capital, region y subregion, poblacion y timezone

  return (
    <div>
      <Link to="/countries">← Volver a la lista</Link>
      <EstadoCarga isLoading={isLoading} error={error}>
        {country && (
          <div className="country-detail">
            <h1>{country.name}</h1>
            <img
              src={country.flags?.svg || country.flags?.png}
              alt={`Bandera de ${country.name}`}
              className="country-flag-grande"
            />
            <ul>
              <li><strong>Código:</strong> {country.alpha2Code}</li>
              <li><strong>Capital:</strong> {country.capital}</li>
              <li><strong>Región:</strong> {country.region} ({country.subregion})</li>
              <li><strong>Población:</strong> {country.population?.toLocaleString()}</li>
              <li><strong>Zona horaria:</strong> {country.timezones?.join(', ')}</li>
            </ul>
          </div>
        )}
      </EstadoCarga>
    </div>
  )
}

export default CountryDetail
