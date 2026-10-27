"use client";
import { useState } from "react";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre && correo && mensaje) {
      setEnviado(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-100 text-gray-900">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Contacto</h1>
        <p className="text-gray-600 text-sm mt-1">
          Formulario de demostración para consultas sobre la tienda.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Nombre
          </label>
          <input
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Correo
          </label>
          <input
            type="email"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Mensaje
          </label>
          <textarea
            rows={4}
            required
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
          >
            Validar mensaje
          </button>
        </div>

        {enviado && (
          <p className="text-sm text-gray-600 pt-2 border-t border-gray-100">
            Mensaje validado. Esta demostración no envía correos.
          </p>
        )}
      </form>
    </div>
  );
}