import { useEffect, useState } from "react";
import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import PiePagina from "./components/PiePagina";
import Cartelera from "./pages/Cartelera";
import { actividades } from "./data/actividades";
import MisInscripciones from "./pages/MisInscripciones";

function App() {
  const [categoria, setCategoria] = useState("Todas");

  const visibles = categoria === "Todas"
    ? actividades
    : actividades.filter((actividad) => actividad.categoria === categoria);

  const [inscripciones, setInscripciones] = useState(() => {
    const guardadas = localStorage.getItem("inscripciones");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  function inscribir(actividad) {
    const yaExiste = inscripciones.some((item) => item.id === actividad.id);

    if (yaExiste) return;

    setInscripciones([...inscripciones, actividad]);
  }

  function eliminarInscripcion(id) {
    setInscripciones(
      inscripciones.filter((item) => item.id !== id)
    );
  }

  useEffect(() => {
    localStorage.setItem(
      "inscripciones",
      JSON.stringify(inscripciones)
    );
  }, [inscripciones]);
  
  return (
    <>
      <Cabecera />
      <Navegacion />
      <main className="container py-4">
        <select
          className="form-select mb-4"
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
        >
          <option>Todas</option>
          <option>Música</option>
          <option>Artes Visuales</option>
          <option>Informática</option>
          <option>Cocina</option>
        </select>
        <Cartelera
          actividades={visibles}
          onInscribir={inscribir}
        />
        <hr></hr>
        <MisInscripciones
          inscripciones={inscripciones}
          onEliminar={eliminarInscripcion}
        />
      </main>
      <PiePagina />
    </>
  );
}

export default App;

// Cartelera actividades={visibles}: entrega a la cartelera el resultado ya filtrado