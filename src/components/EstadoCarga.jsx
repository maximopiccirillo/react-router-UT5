// dice cuando esta cargando los card de los paises y los datos por si hay un error

function EstadoCarga({ isLoading, error, children }) {
  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <p>Ocurrió un error: {error.message}</p>
  }

  return children
}

export default EstadoCarga
