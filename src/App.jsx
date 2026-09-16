import { Routes, Route, Navigate } from 'react-router-dom'
import CountriesList from './pages/CountriesList'
import CountryDetail from './pages/CountryDetail'

function App() {
  return (
    // Primera parte del ejercicio
    // el primer route es para que vaya nuevamente a countries cuando apretas el boton de ir para atrás en un pais
    // el segundo es el que muestra los countries
    // muestra el pais seleccionado 
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/countries" replace />} />
        <Route path="/countries" element={<CountriesList />} />
        <Route path="/countries/:cca2" element={<CountryDetail />} />
      </Routes>
    </div>
  )
}

export default App
