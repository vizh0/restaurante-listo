import { render, screen, fireEvent } from '@testing-library/react';
import Comidas from '../app/comidas/page';
import Registro from '../app/registro/page';

describe('Pruebas Unitarias - Proyecto Listo', () => {

  // 1. Prueba de Renderizado del Catálogo
  test('1. Renderiza correctamente el título de la página de comidas', () => {
    render(<Comidas />);
    const titulo = screen.getByText(/Menú de Comidas/i);
    expect(titulo).toBeInTheDocument();
  });

  // 2. Prueba de Renderizado de elementos desde los datos
  test('2. Muestra los productos cargados desde datos_prueba.json', () => {
    render(<Comidas />);
    const arrozFrito = screen.getByText(/Arroz frito/i);
    expect(arrozFrito).toBeInTheDocument();
  });

  // 3. Prueba de presencia de botones de interacción
  test('3. Muestra los botones de Añadir para los platos', () => {
    render(<Comidas />);
    const botones = screen.getAllByText(/Añadir/i);
    expect(botones.length).toBeGreaterThan(0);
  });

  // 4. Prueba de Formulario de Registro
  test('4. Renderiza los campos obligatorios del formulario de registro', () => {
    render(<Registro />);
    const inputNombre = screen.getByPlaceholderText(/ejemplo@gmail.com/i);
    const botonCrear = screen.getByText(/Crear mi cuenta/i);
    expect(inputNombre).toBeInTheDocument();
    expect(botonCrear).toBeInTheDocument();
  });

  // 5. Prueba de Simulación de Cambio de Estado en Inputs
  test('5. Permite escribir en los campos de texto del registro', () => {
    render(<Registro />);
    const inputCorreo = screen.getByPlaceholderText(/ejemplo@gmail.com/i) as HTMLInputElement;
    fireEvent.change(inputCorreo, { target: { value: 'juan@gmail.com' } });
    expect(inputCorreo.value).toBe('juan@gmail.com');
  });

});