"use client";
import { useState } from "react";

export default function Registro() {
  const [form, setForm] = useState({
    run: "",
    nombre: "",
    apellidos: "",
    correo: "",
    password: "",
    region: "",
    comuna: "",
    direccion: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Cuenta creada exitosamente para: ${form.nombre}!`);
  };

  return (
    <div className="max-w-xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-amber-100">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">Regístrate en Listo</h1>
        <p className="text-gray-700 font-medium mt-1">Crea tu cuenta para pedir tu comida favorita</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-gray-900">
        <div>
          <label className="block text-xs font-bold uppercase text-gray-800 mb-1">RUN (Sin puntos ni guión)</label>
          <input
            type="text"
            name="run"
            placeholder="Ej: 19011022K"
            required
            value={form.run}
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-emerald-500 text-gray-900 placeholder-gray-400 p-3 rounded-xl outline-none bg-white font-medium"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-800 mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              required
              value={form.nombre}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-emerald-500 text-gray-900 p-3 rounded-xl outline-none bg-white font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-800 mb-1">Apellidos</label>
            <input
              type="text"
              name="apellidos"
              required
              value={form.apellidos}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-emerald-500 text-gray-900 p-3 rounded-xl outline-none bg-white font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-800 mb-1">Correo Electrónico</label>
          <input
            type="email"
            name="correo"
            placeholder="ejemplo@gmail.com"
            required
            value={form.correo}
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-emerald-500 text-gray-900 placeholder-gray-400 p-3 rounded-xl outline-none bg-white font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-800 mb-1">Contraseña</label>
          <input
            type="password"
            name="password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-emerald-500 text-gray-900 p-3 rounded-xl outline-none bg-white font-medium"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-800 mb-1">Región</label>
            <select
              name="region"
              value={form.region}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-emerald-500 text-gray-900 p-3 rounded-xl outline-none bg-white font-medium"
            >
              <option value="">Seleccione...</option>
              <option value="RM">Región Metropolitana</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-800 mb-1">Comuna</label>
            <select
              name="comuna"
              value={form.comuna}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-emerald-500 text-gray-900 p-3 rounded-xl outline-none bg-white font-medium"
            >
              <option value="">Seleccione...</option>
              <option value="Maipu">Maipú</option>
              <option value="Cerrillos">Cerrillos</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-800 mb-1">Dirección Exacta</label>
          <input
            type="text"
            name="direccion"
            required
            value={form.direccion}
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-emerald-500 text-gray-900 p-3 rounded-xl outline-none bg-white font-medium"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all mt-2 active:scale-95"
        >
          Crear mi cuenta
        </button>
      </form>
    </div>
  );
}