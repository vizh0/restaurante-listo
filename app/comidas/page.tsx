"use client";
import datosComidas from "@/datos_prueba.json";
import { useCart } from "@/context/CartContext";

// Mapa exacto con los nombres de archivo reales de tu carpeta public/comidas
const imagenesLocales: Record<string, string> = {
  "1": "/comidas/arroz-frito.jpeg",
  "2": "/comidas/pollo.jpg",
  "3": "/comidas/anticucho.jpg",
  "4": "/comidas/cachuela.avif",
  "5": "/comidas/empanadas.jpg",
  "6": "/comidas/pizza.webp",
  "7": "/comidas/arrollado-primavera.webp",
  "8": "/comidas/ceviche.jpg"
};

export default function Comidas() {
  const { agregarAlCarrito } = useCart();

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/40">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Nuestras Delicias 😋
        </h1>
        <p className="text-gray-600 font-medium mt-2">
          Elige entre la mejor selección de comida y añádela a tu pedido
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datosComidas.map((comida) => {
          // Busca primero si el objeto del JSON tiene 'imagen', si no usa el mapa local por id
          const rutaImagen =
            (comida as { imagen?: string }).imagen ||
            imagenesLocales[comida.id] ||
            "/comidas/anticucho.jpg";

          return (
            <div
              key={comida.id}
              className="group bg-gradient-to-b from-white to-amber-50/30 border border-amber-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Contenedor de la Imagen */}
                <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                  <img
                    src={rutaImagen}
                    alt={comida.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-orange-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {comida.categoria}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-emerald-600 transition-colors">
                    {comida.nombre}
                  </h3>
                </div>
              </div>

              <div className="p-5 pt-0 flex justify-between items-center border-t border-amber-100/80 mt-2">
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Precio</span>
                  <span className="text-2xl font-black text-emerald-600">
                    ${comida.precio.toLocaleString("es-CL")}
                  </span>
                </div>
                <button
                  onClick={() => agregarAlCarrito(comida)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-bold shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-1"
                >
                  ➕ Añadir
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}