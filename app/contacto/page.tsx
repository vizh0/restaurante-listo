export default function Contacto() {
  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-amber-100 max-w-2xl mx-auto text-center space-y-4">
      <h1 className="text-3xl font-extrabold text-gray-900">Contacto</h1>
      <p className="text-gray-800 text-lg font-medium leading-relaxed">
        Puedes contactarnos a través de nuestro correo:{" "}
        <a href="mailto:contacto@listo.cl" className="text-emerald-600 font-bold underline">
          listoDelivery@gmail.cl
        </a>
      </p>
      <p className="text-gray-700 font-medium">
        O visitando nuestro local comercial.
      </p>
    </div>
  );
}