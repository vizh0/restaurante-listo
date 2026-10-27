import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-amber-100 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Disfruta de la mejor comida al mejor precio
      </h1>
      <p className="text-gray-700 font-medium text-lg mb-8">
        Bienvenido a <span className="text-emerald-600 font-bold">Listo Delivery</span>. Pedir comida nunca fue tan rápido y sencillo.
      </p>
      <Link
        href="/comidas"
        className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
      >
        🍕 Ver Menú de Comidas
      </Link>
    </div>
  );
}