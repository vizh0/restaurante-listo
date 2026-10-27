import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Listo - Restaurante & Delivery",
  description: "Disfruta de la mejor comida al mejor precio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col font-sans bg-amber-50/40 text-gray-900 relative">
        {/* Navbar Moderno y Vivo */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-md transition-all">
          <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
            {/* Logo estilizado */}
            <Link href="/" className="text-2xl font-black text-emerald-600 flex items-center gap-1 hover:scale-105 transition-transform">
              <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-2 rounded-xl shadow-sm text-lg">
                🍲
              </span>
              <span>Listo</span>
              <span className="text-orange-500 font-bold text-xs bg-orange-100 px-2 py-0.5 rounded-full border border-orange-200">
                Delivery
              </span>
            </Link>

            {/* Navegación central */}
            <ul className="flex items-center gap-6 font-semibold text-gray-700">
              <li>
                <Link href="/" className="hover:text-orange-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/comidas" className="hover:text-orange-500 transition-colors bg-orange-500 text-white px-3 py-1.5 rounded-lg shadow-xs hover:bg-orange-600">
                  🍕 Comidas
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-orange-500 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-orange-500 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>

            {/* Accesos rápidos */}
            <div className="flex items-center gap-3">
              <Link
                href="/carrito"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                🛒 Carrito
              </Link>
              <Link
                href="/registro"
                className="bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 px-4 py-2 rounded-xl font-semibold transition-all"
              >
                Cuenta
              </Link>
            </div>
          </div>
        </header>

        {/* Contenedor Principal con Imagen de Fondo */}
        <main
          className="flex-1 bg-cover bg-center bg-fixed relative"
          style={{ backgroundImage: "url('/fondo-comida.png')" }}
        >
          {/* Overlay suave para asegurar contraste y legibilidad impecables */}
          <div className="min-h-full w-full bg-slate-900/10 backdrop-blur-[2px] py-8 px-4 flex justify-center">
            <div className="w-full max-w-5xl">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}