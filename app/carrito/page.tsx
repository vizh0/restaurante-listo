"use client";
import { useState } from "react";
import Link from "next/link";

export default function Carrito() {
  const [items, setItems] = useState([
    { id: "1", nombre: "Arroz frito", precio: 15000, cantidad: 1 },
    { id: "4", nombre: "Cazuela", precio: 15000, cantidad: 2 },
  ]);

  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const eliminar = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-amber-100 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Carrito de Compras</h1>

      {items.length === 0 ? (
        <p className="text-gray-700 font-medium text-lg">
          Tu carrito está vacío.{" "}
          <Link href="/comidas" className="text-emerald-600 font-bold underline">
            Ver menú
          </Link>
        </p>
      ) : (
        <div className="space-y-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 text-gray-800 font-bold text-base">
                <th className="py-3">Nombre</th>
                <th className="py-3">Precio</th>
                <th className="py-3">Cantidad</th>
                <th className="py-3">Subtotal</th>
                <th className="py-3">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {items.map((item) => (
                <tr key={item.id} className="text-gray-900 font-medium">
                  <td className="py-4 font-bold text-gray-900">{item.nombre}</td>
                  <td className="py-4 text-gray-800">${item.precio.toLocaleString("es-CL")}</td>
                  <td className="py-4 text-gray-800">{item.cantidad}</td>
                  <td className="py-4 font-semibold text-emerald-700">${(item.precio * item.cantidad).toLocaleString("es-CL")}</td>
                  <td className="py-4">
                    <button
                      onClick={() => eliminar(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg font-bold text-xs shadow-xs transition-colors"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <span className="text-2xl font-black text-gray-900">
              Total: <span className="text-emerald-600">${total.toLocaleString("es-CL")}</span>
            </span>
            <Link
              href="/checkout"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all active:scale-95"
            >
              Pagar ahora ➔
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}