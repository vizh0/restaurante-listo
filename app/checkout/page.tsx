"use client";
import Link from "next/link";

export default function Checkout() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans p-6">
      <main className="w-full max-w-xl bg-white p-8 rounded-lg shadow-sm space-y-6">
        <h1 className="text-2xl font-bold">Dirección de entrega y pago</h1>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium">Calle y número</label>
            <input type="text" placeholder="Ej: Esquina Blanca 123" className="w-full border p-2 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">Indicaciones de entrega</label>
            <textarea placeholder="Dejar con el conserje..." className="w-full border p-2 rounded-md"></textarea>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/pago-exitoso" className="flex-1 text-center bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700">
            Simular Pago Correcto
          </Link>
          <Link href="/pago-error" className="flex-1 text-center bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700">
            Simular Pago Fallido
          </Link>
        </div>
      </main>
    </div>
  );
}