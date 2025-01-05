import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex flex-col gap-8 row-start-2 items-center max-w-3xl w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Llorenç Alfonso Sanchis</h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-400">Desarrollador Full Stack</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Información Personal</h3>
            <ul className="space-y-2">
              <li>📧 lloalfsan@gmail.com</li>
              <li>📱 +34 610 72 75 93</li>
              <li>📍 Valencia, España</li>
              <li>🌐 github.com/alfosan</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full text-sm">Java</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full text-sm">Spring Boot</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900 rounded-full text-sm">HTML/CSS</span>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-full text-sm">SQL</span>
              <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 rounded-full text-sm">Git & Github</span>
            </div>
          </section>
        </div>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full">
          <h3 className="text-xl font-bold mb-4">Experiencia Laboral</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">Domador de Pingüinos Profesional</h4>
              <p className="text-gray-600 dark:text-gray-400">2020 - Presente</p>
              <p>Especialista en enseñar a pingüinos a bailar breakdance en la Antártida</p>
            </div>
            <div>
              <h4 className="font-bold">Catador de Nubes de Algodón</h4>
              <p className="text-gray-600 dark:text-gray-400">2019</p>
              <p>Experto en determinar la suavidad y dulzura de las nubes de azúcar en festivales</p>
            </div>
            <div>
              <h4 className="font-bold">Traductor de Maullidos Felinos</h4>
              <p className="text-gray-600 dark:text-gray-400">2018</p>
              <p>Interpretación profesional de conversaciones entre gatos y sus dueños</p>
            </div>
          </div>
        </section>

        <div className="flex gap-4 items-center">
          <a
            className="rounded-full bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors"
            href="mailto:lorensanchis@gmail.com"
          >
            Contactar
          </a>
          <a
            className="rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            href="/CV_Llorenç_Alfonso_Sanchis_CAPGEMINI.pdf"
            target="_blank"
          >
            Descargar CV
          </a>
        </div>
      </main>

      <footer className="row-start-3 text-center text-gray-600 dark:text-gray-400">
        <p>© 2024 Llorenç Alfonso Sanchis. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
