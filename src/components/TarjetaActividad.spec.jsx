import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import TarjetaActividad from "./TarjetaActividad";

describe("TarjetaActividad", () => {
  const actividad = { id: 1, nombre: "Guitarra", cupos: 4, precio: 0};

  it("muestra el nombre recibido por props", () => {
    render(<TarjetaActividad actividad={actividad} />);
    expect(screen.getByText("Guitarra")).toBeInTheDocument();
  });

  it("muestra aviso cuando quedan pocos cupos", () => {
    render(<TarjetaActividad actividad={actividad} />);
    expect(screen.getByText(/últimos/i)).toBeInTheDocument();
  });

  it("Muestra gratis con precio 0", () => {
    render(<TarjetaActividad actividad={actividad} />);
    expect(screen.getByText("¡Gratis :D!")).toBeInTheDocument();
  }); 

  it("ejecuta onInscribir al presionar el botón", async () => {
    const usuario = userEvent.setup();
    const onInscribir = vi.fn();
    render(
      <TarjetaActividad actividad={actividad} onInscribir={onInscribir} />
    );

    await usuario.click(
      screen.getByRole("button", { name: /inscribir/i })
    );

    expect(onInscribir).toHaveBeenCalledWith(actividad);
  });
});

/*
Muestra actividad gratis con valor 0
  it("Muestra gratis con precio 0", () => {
    render(<TarjetaActividad actividad={actividad} />);
    expect(screen.getByText("¡Gratis :D!")).toBeInTheDocument();
  }); 
*/