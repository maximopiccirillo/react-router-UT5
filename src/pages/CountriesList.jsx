import { useFetchJSON } from '../hooks/useFetchJSON'
import EstadoCarga from '../components/EstadoCarga'
import CountryCard from '../components/CountryCard'

// funcion que trae la lista de paises y renderiza una CountryCard por cada uno.

function CountriesList() {
  
  const { data: countries, isLoading, error } = useFetchJSON(
    'https://countries.dev/countries?fields=name,alpha2Code,flags'
  )

  return (
    <div>
      <h1>Países</h1>
      <EstadoCarga isLoading={isLoading} error={error}>
        <div className="country-grid">
          {countries?.map((country) => (
            <CountryCard key={country.alpha2Code} country={country} />
          ))}
        </div>
      </EstadoCarga>
    </div>
  )
}

export default CountriesList
