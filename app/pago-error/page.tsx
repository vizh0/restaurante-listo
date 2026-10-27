import Link from "next/link";

export default function PagoError() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans p-6">
      <main className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm text-center space-y-4">
        <h1 className="text-2xl font-bold text-red-600">No se pudo realizar el pago</h1>
        <p className="text-gray-600">Ocurrió un problema procesando la transacción.</p>
        <Link href="/checkout" className="inline-block bg-zinc-700 text-white px-6 py-2 rounded-md font-semibold">
          Reintentar pago
        </Link>
      </main>
    </div>
  );
}