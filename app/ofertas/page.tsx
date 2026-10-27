"use client";
import { useCart } from "@/context/CartContext";

const ofertasEspeciales = [
  {
    id: "off-1",
    nombre: "Combo Dúo Familiar (Cazuela + Arroz Frito)",
    categoria: "Combo Promocional",
    precioOriginal: 30000,
    precio: 23990,
    descuento: "20% OFF",
    descripcion: "Para compartir: 1 Cazuela + 1 Arroz frito especial con bebida gratis.",
  },
  {
    id: "off-2",
    nombre: "Promo Lunes Chino",
    categoria: "Especial del día",
    precioOriginal: 15000,
    precio: 11990,
    descuento: "15% OFF",
    descripcion: "Disfruta de nuestro mejor Arroz Frito estilo oriental a precio reducido.",
  },
  {
    id: "off-3",
    nombre: "Pack Almuerzo Casero",
    categoria: "Menú Ejecutivo",
    precioOriginal: 18000,
    precio: 13500,
    descuento: "25% OFF",
    descripcion: "Plato principal a elección con postre tradicional y refresco.",
  },
];

export default function Ofertas() {
  const { agregarAlCarrito } = useCart();

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/40">
      <div className="text-center mb-8">
        <span className="text-5xl">🔥</span>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mt-2">
          Ofertas Imperdibles
        </h1>
        <p className="text-gray-600 font-medium mt-2">
          Aprovecha nuestros descuentos especiales y combos del día
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ofertasEspeciales.map((oferta) => (
          <div
            key={oferta.id}
            className="group bg-gradient-to-b from-orange-50/50 to-amber-50/30 border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Tag de Descuento */}
            <div className="absolute top-3 right-3 bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full shadow-md">
              {oferta.descuento}
            </div>

            <div>
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200 mb-3">
                {oferta.categoria}
              </span>
              <h3 className="font-bold text-xl text-gray-900 group-hover:text-emerald-600 transition-colors">
                {oferta.nombre}
              </h3>
              <p className="text-sm text-gray-600 mt-2 font-medium leading-relaxed">
                {oferta.descripcion}
              </p>
            </div>

            <div className="mt-6 flex justify-between items-center border-t border-orange-100 pt-4">
              <div>
                <span className="text-xs text-gray-400 line-through block font-medium">
                  ${oferta.precioOriginal.toLocaleString("es-CL")}
                </span>
                <span className="text-2xl font-black text-emerald-600">
                  ${oferta.precio.toLocaleString("es-CL")}
                </span>
              </div>
              <button
                onClick={() =>
                  agregarAlCarrito({
                    id: oferta.id,
                    nombre: oferta.nombre,
                    precio: oferta.precio,
                    categoria: oferta.categoria,
                  })
                }
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-xl font-bold shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-1"
              >
                🛒 Añadir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}