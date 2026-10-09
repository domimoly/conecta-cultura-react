import { vi } from "vitest";
import { guardarInscripciones } from "./persistencia";

describe("guardarInscripciones", () => {
  it("guarda el arreglo serializado", () => {
    const espia = vi.spyOn(Storage.prototype, "setItem");
    const datos = [{ id: 1, nombre: "Guitarra" }];

    guardarInscripciones(datos);

    expect(espia).toHaveBeenCalledWith(
      "inscripciones",
      JSON.stringify(datos)
    );

    espia.mockRestore();
  });
});