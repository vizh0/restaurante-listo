"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Carrito() {
  const { carrito, eliminarDelCarrito, total } = useCart();

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-amber-100 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Carrito de Compras</h1>

      {carrito.length === 0 ? (
        <div className="text-center py-8 space-y-4">
          <p className="text-gray-700 font-medium text-lg">
            Tu carrito está vacío actualmente 🛒
          </p>
          <Link
            href="/comidas"
            className="inline-block bg-emerald-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-emerald-700 transition-all"
          >
            Ir a elegir comida
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 text-gray-800 font-bold text-base">
                <th className="py-3">Producto</th>
                <th className="py-3">Precio Unitario</th>
                <th className="py-3">Cantidad</th>
                <th className="py-3">Subtotal</th>
                <th className="py-3">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {carrito.map((item) => (
                <tr key={item.id} className="text-gray-900 font-medium">
                  <td className="py-4 font-bold text-gray-900">{item.nombre}</td>
                  <td className="py-4 text-gray-800">${item.precio.toLocaleString("es-CL")}</td>
                  <td className="py-4 text-gray-800 font-bold">{item.cantidad}</td>
                  <td className="py-4 font-semibold text-emerald-700">
                    ${(item.precio * item.cantidad).toLocaleString("es-CL")}
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => eliminarDelCarrito(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg font-bold text-xs transition-colors"
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
              Ir a Pagar ➔
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}