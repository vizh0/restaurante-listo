import Link from "next/link";

export default function PagoExitoso() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans p-6">
      <main className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm text-center space-y-4">
        <h1 className="text-2xl font-bold text-green-600">¡Pago Realizado con Éxito!</h1>
        <p className="text-gray-600">Número de orden: #20240705</p>
        <Link href="/comidas" className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-md font-semibold">
          Volver a la tienda
        </Link>
      </main>
    </div>
  );
}