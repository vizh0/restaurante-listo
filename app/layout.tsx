"use client";
import "./globals.css";
import Link from "next/link";
import { CartProvider, useCart } from "@/context/CartContext";

function BotonCarritoNav() {
  const { carrito } = useCart();
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Link
      href="/carrito"
      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
    >
      🛒 Carrito
      {cantidadTotal > 0 && (
        <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-black">
          {cantidadTotal}
        </span>
      )}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col font-sans bg-amber-50/40 text-gray-900 relative">
        <CartProvider>
          <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
              <Link href="/" className="text-2xl font-black text-emerald-600 flex items-center gap-1">
                <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-2 rounded-xl shadow-sm text-lg">
                  🍲
                </span>
                <span>Listo</span>
                <span className="text-orange-500 font-bold text-xs bg-orange-100 px-2 py-0.5 rounded-full border border-orange-200">
                  Delivery
                </span>
              </Link>

              <ul className="flex items-center gap-6 font-semibold text-gray-700">
                <li><Link href="/" className="hover:text-orange-500">Inicio</Link></li>
                <li>
                  <Link href="/comidas" className="bg-orange-500 text-white px-3 py-1.5 rounded-lg shadow-xs hover:bg-orange-600">
                    🍕 Comidas
                  </Link>
                </li>
                <li>
  <Link href="/ofertas" className="hover:text-orange-500 transition-colors flex items-center gap-1 font-bold text-orange-600">
    🔥 Ofertas
  </Link>
</li>
                <li><Link href="/nosotros" className="hover:text-orange-500">Nosotros</Link></li>
                <li><Link href="/contacto" className="hover:text-orange-500">Contacto</Link></li>
              </ul>

              <div className="flex items-center gap-3">
                <BotonCarritoNav />
                <Link href="/registro" className="bg-amber-100 text-amber-900 border border-amber-300 px-4 py-2 rounded-xl font-semibold">
                  Cuenta
                </Link>
              </div>
            </div>
          </header>

          <main
            className="flex-1 bg-cover bg-center bg-fixed relative"
            style={{ backgroundImage: "url('/fondo-comida.png')" }}
          >
            <div className="min-h-full w-full bg-slate-900/10 backdrop-blur-[2px] py-8 px-4 flex justify-center">
              <div className="w-full max-w-5xl">{children}</div>
            </div>
          </main>
        </CartProvider>
      </body>
    </html>
  );
}