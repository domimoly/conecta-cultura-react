export async function obtenerNombres(servicio) {
  const actividades = await servicio.listar();
  return actividades.map((actividad) => actividad.nombre);
}