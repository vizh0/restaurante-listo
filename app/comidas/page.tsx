import datosComidas from "@/datos_prueba.json";

export default function Comidas() {
  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/40">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Nuestras Delicias 😋
        </h1>
        <p className="text-gray-600 font-medium mt-2">
          Elige entre la mejor selección de comida China, Chilena, Italiana y Peruana
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datosComidas.map((comida) => (
          <div
            key={comida.id}
            className="group bg-gradient-to-b from-white to-amber-50/30 border border-amber-100 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full border border-orange-200 mb-3">
                {comida.categoria}
              </span>
              <h3 className="font-bold text-xl text-gray-800 group-hover:text-emerald-600 transition-colors">
                {comida.nombre}
              </h3>
            </div>

            <div className="mt-6 flex justify-between items-center border-t border-amber-100/80 pt-4">
              <div>
                <span className="text-xs text-gray-400 block font-medium">Precio</span>
                <span className="text-2xl font-black text-emerald-600">
                  ${comida.precio.toLocaleString("es-CL")}
                </span>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-bold shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-1">
                ➕ Añadir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}