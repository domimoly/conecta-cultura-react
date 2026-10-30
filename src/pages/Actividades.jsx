import { useEffect, useState } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { listarActividades } from "../services/actividadService";
import TarjetaActividad from "../components/TarjetaActividad";

function Actividades() {
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargar() {
      try {
        setError("");
        setActividades(await listarActividades());
      } catch (e) {
        setError(e.message);
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);

  if (cargando) return <Spinner aria-label="Cargando actividades" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (actividades.length === 0) return <Alert>No hay actividades.</Alert>;

  return (
    <Container className="py-4">
      <h1>Actividades</h1>
      <Row className="g-4">
        {actividades.map(actividad => (
          <Col xs={12} md={6} lg={4} key={actividad.id}>
            <TarjetaActividad actividad={actividad} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Actividades;