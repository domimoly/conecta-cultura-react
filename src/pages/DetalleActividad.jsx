import { Link, useParams } from "react-router-dom";
import { actividades } from "../data/actividades";

function DetalleActividad() {
  const { id } = useParams();
  const actividad = actividades.find(
    (item) => item.id === Number(id)
  );

  if (!actividad) {
    return <main className="container py-4">
          <h2>Actividad no encontrada :( </h2>
          <p> Regresa para ver la cartelera de actividades disponibles ^_^.</p>
          <Link to="/actividades">Volver</Link>
          </main>;
  }

  return (
    <main className="container py-4">
      <h1>{actividad.nombre}</h1>
      <p>{actividad.descripcion}</p>
      <Link to="/actividades">Volver</Link>
    </main>
  );
}

export default DetalleActividad;