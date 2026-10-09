import { vi } from "vitest";

async function obtenerNombres(servicio) {
  const actividades = await servicio.listar();
  return actividades.map((actividad) => actividad.nombre);
}

it("obtiene los nombres entregados por el servicio", async () => {
  const servicio = {
    listar: vi.fn().mockResolvedValue([
      { id: 1, nombre: "Guitarra", cupos: 10 }
    ])
  };

  const nombres = await obtenerNombres(servicio);

  expect(servicio.listar).toHaveBeenCalled();
  expect(nombres).toEqual(["Guitarra"]);
});