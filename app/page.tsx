export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Sidebar/Index */}
      <aside className="w-full sm:w-64 fixed sm:left-0 sm:h-full bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-6 overflow-y-auto sm:block hidden">
        <nav className="space-y-4">
          <div className="mb-8">
            <img src="/bart.jpg" alt="Llorenç Alfonso" className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-slate-200 dark:border-slate-700" />
            <h2 className="text-lg font-bold text-center text-slate-800 dark:text-slate-200">Llorenç Alfonso</h2>
          </div>
          <a href="#info" className="block text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Información Personal</a>
          <a href="#tech" className="block text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Tecnologías</a>
          <a href="#education" className="block text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Formación</a>
          <a href="#about" className="block text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Sobre mí</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 sm:ml-64 sm:mr-64">
        <main className="max-w-4xl mx-auto space-y-8">
          <header className="text-center border-b border-slate-200 dark:border-slate-700 pb-8">
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">Llorenç Alfonso Sanchis</h1>
            <h2 className="text-2xl text-slate-600 dark:text-slate-400">Desarrollador Full Stack</h2>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div id="info" className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-6 border-b border-slate-200 dark:border-slate-700 pb-2 text-slate-800 dark:text-slate-200">Información Personal</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3"><span className="text-xl">📧</span><a href="mailto:lloalfsan@gmail.com" className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">lloalfsan@gmail.com</a></li>
                <li className="flex items-center space-x-3"><span className="text-xl">📱</span><span className="text-slate-700 dark:text-slate-300">+34 610 72 75 95</span></li>
                <li className="flex items-center space-x-3"><span className="text-xl">📍</span><span className="text-slate-700 dark:text-slate-300">Valencia, España</span></li>
                <li className="flex items-center space-x-3"><span className="text-xl">🌐</span><a href="https://github.com/alfosan" className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">GITHUB</a></li>
                <li className="flex items-center space-x-3"><span className="text-xl">💼</span><a href="https://www.linkedin.com/in/lloren%C3%A7-alfonso-sanchis-a14871323/" className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">LINKEDIN</a></li>
              </ul>
            </div>

            <div id="tech" className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-6 border-b border-slate-200 dark:border-slate-700 pb-2 text-slate-800 dark:text-slate-200">Tecnologías</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg text-slate-700 dark:text-slate-300">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">SpringBoot</span>
                    <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">Laravel</span>
                    <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">Express</span>
                    <span className="px-4 py-2 bg-violet-100 dark:bg-violet-900/50 text-violet-800 dark:text-violet-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">Prisma</span>
                    <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">TypeORM</span>
                    <span className="px-4 py-2 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">Python</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg text-slate-700 dark:text-slate-300">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">JavaScript</span>
                    <span className="px-4 py-2 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">TypeScript</span>
                    <span className="px-4 py-2 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">Angular</span>
                    <span className="px-4 py-2 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">React</span>
                    <span className="px-4 py-2 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">Vue</span>
                    <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">HTML</span>
                    <span className="px-4 py-2 bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">CSS</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg text-slate-700 dark:text-slate-300">Herramientas</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">Docker</span>
                    <span className="px-4 py-2 bg-slate-100 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">Git</span>
                    <span className="px-4 py-2 bg-violet-100 dark:bg-violet-900/50 text-violet-800 dark:text-violet-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">GitHub</span>
                    <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">VSCode</span>
                    <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium hover:scale-105 transition-transform">Postman</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-6 border-b border-slate-200 dark:border-slate-700 pb-2 text-slate-800 dark:text-slate-200">Formación</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-indigo-500">
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200">CFGS Desarrollo Aplicaciones Web</h4>
                <p className="text-slate-600 dark:text-slate-400">Sept 2023 - Actualmente</p>
                <p className="text-slate-600 dark:text-slate-400">IES L'ESTACIÓ | Ontinyent</p>
              </div>
              <div className="relative pl-8 border-l-2 border-indigo-500">
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200">CFGM Sistemas Microinformáticos y Redes</h4>
                <p className="text-slate-600 dark:text-slate-400">Sept 2021 - Jun 2023</p>
                <p className="text-slate-600 dark:text-slate-400">IES L'ESTACIÓ | Ontinyent</p>
              </div>
              <div className="relative pl-8 border-l-2 border-indigo-500">
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200">Curso de Python y IA - 258h</h4>
                <p className="text-slate-600 dark:text-slate-400">Jun 2024 - Sept 2024</p>
                <p className="text-slate-600 dark:text-slate-400">EOI | Online</p>
              </div>
            </div>
          </section>

          <section id="about" className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-6 border-b border-slate-200 dark:border-slate-700 pb-2 text-slate-800 dark:text-slate-200">Sobre mí</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              Soy una persona activa de 19 años en busca de una oportunidad en una empresa que ofrezca posibilidades de crecimiento. 
              Tengo capacidad de trabajo en equipo, implicándome y aportando todo lo que pueda junto una gran pasión y ganas de aprender. 
              He completado estudios en informática y desarrollo web, lo que me ha permitido adquirir una base sólida en distintas tecnologías web, 
              frameworks cliente y servidor.
            </p>
          </section>

          <div className="flex gap-6 justify-center">
            <a
              className="rounded-full bg-indigo-600 text-white px-8 py-4 hover:bg-indigo-700 transition-colors font-semibold shadow-sm hover:shadow-md"
              href="mailto:lloalfsan@gmail.com"
            >
              Contactar
            </a>
            <a
              className="rounded-full border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-4 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors font-semibold shadow-sm hover:shadow-md"
              href="/CV_Llorenç_Alfonso_Sanchis_CAPGEMINI.pdf"
              download
            >
              Descargar CV
            </a>
          </div>
        </main>

        <footer className="text-center text-slate-600 dark:text-slate-400 mt-12 pb-8">
          <p>© 2024 Llorenç Alfonso Sanchis. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}
