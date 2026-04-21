export default function AgenteVirtualFitnessWeb() {
  const features = [
    {
      title: "Plan de entrenamiento personalizado",
      text: "Rutinas según tu nivel, objetivo, días disponibles y acceso a gimnasio o casa.",
      icon: "🏋️",
    },
    {
      title: "Plan nutricional práctico",
      text: "Recomendaciones de comidas, porciones y hábitos según tu meta y estilo de vida.",
      icon: "🥗",
    },
    {
      title: "Seguimiento inteligente",
      text: "Ajustes semanales según progreso, energía, peso, adherencia y sensaciones.",
      icon: "📈",
    },
    {
      title: "Asistente virtual 24/7",
      text: "Responde dudas sobre comidas, ejercicios, descanso, hidratación y constancia.",
      icon: "🤖",
    },
  ];

  const plans = [
    {
      name: "Inicio",
      price: "Gratis",
      items: ["Diagnóstico básico", "Rutina general", "Guía nutricional base"],
    },
    {
      name: "Pro",
      price: "$19/mes",
      items: ["Plan personalizado", "Chat con agente virtual", "Seguimiento semanal"],
    },
    {
      name: "Premium",
      price: "$49/mes",
      items: ["Todo lo de Pro", "Ajustes avanzados", "Plan más detallado"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">FitAgent AI</h1>
            <p className="text-sm text-slate-500">Tu coach virtual de nutrición y entrenamiento</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-2xl border border-slate-300 hover:bg-slate-50 transition">Ver demo</button>
            <button className="px-4 py-2 rounded-2xl bg-slate-900 text-white hover:opacity-90 transition">Empezar</button>
          </div>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-sm font-medium mb-4">
              Agente virtual para hábitos, nutrición y fitness
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Una página web con un asistente que te ayuda a comer mejor y entrenar con orden.
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              Diseñada para personas que quieren resultados reales: bajar grasa, ganar músculo, mejorar rendimiento o simplemente crear disciplina.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-medium hover:opacity-90 transition">
                Crear mi plan
              </button>
              <button className="px-6 py-3 rounded-2xl border border-slate-300 font-medium hover:bg-slate-50 transition">
                Hablar con el agente
              </button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm text-slate-500">Disponibilidad</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-slate-500">Personalizable</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-2xl font-bold">1 solo lugar</p>
                <p className="text-sm text-slate-500">Dieta + entreno</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl shadow-sm p-6 md:p-8">
            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Evaluación inicial</h3>
                <span className="text-sm text-slate-500">Paso 1 de 4</span>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Objetivo</label>
                  <select className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none">
                    <option>Bajar grasa</option>
                    <option>Ganar músculo</option>
                    <option>Mejorar condición física</option>
                    <option>Preparar carrera</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Nivel actual</label>
                  <select className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none">
                    <option>Principiante</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Edad</label>
                    <input className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="24" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Días por semana</label>
                    <input className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="4" />
                  </div>
                </div>
                <button className="w-full rounded-2xl bg-slate-900 text-white py-3 font-medium hover:opacity-90 transition">
                  Generar plan
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Qué hace tu agente virtual</h3>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Combina diagnóstico, automatización y acompañamiento para convertir recomendaciones en acciones concretas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 mt-10">
          <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Así se vería la experiencia del usuario</h3>
              <p className="text-slate-600 mt-4 leading-relaxed max-w-xl">
                El usuario responde unas preguntas, recibe su plan, conversa con el asistente virtual y hace seguimiento semanal para ajustar entrenamiento y alimentación.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• Diagnóstico inicial</li>
                <li>• Plan semanal de comidas</li>
                <li>• Rutina organizada por días</li>
                <li>• Recordatorios y recomendaciones</li>
                <li>• Ajustes según progreso</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-5">
              <div className="rounded-2xl bg-slate-900 text-white p-4 mb-4">
                <p className="font-semibold">Agente virtual</p>
                <p className="text-sm text-slate-300">Hola, Pablo. Hoy te recomiendo tren superior + 2200 kcal enfocadas en proteína y buena energía.</p>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="font-medium">Entrenamiento de hoy</p>
                  <p className="text-sm text-slate-600 mt-1">Press inclinado, remo, press militar, elevaciones laterales y core.</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="font-medium">Comidas sugeridas</p>
                  <p className="text-sm text-slate-600 mt-1">Huevos con avena, pollo con arroz y ensalada, yogurt griego y cena ligera alta en proteína.</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="font-medium">Consejo del día</p>
                  <p className="text-sm text-slate-600 mt-1">Prioriza sueño, agua y consistencia antes de buscar perfección.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Planes de monetización</h3>
            <p className="text-slate-600 mt-3">Puedes empezar simple y luego escalar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-xl font-bold">{plan.name}</h4>
                <p className="text-3xl font-bold mt-3">{plan.price}</p>
                <ul className="mt-5 space-y-2 text-slate-600">
                  {plan.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <button className="mt-6 w-full py-3 rounded-2xl bg-slate-900 text-white font-medium hover:opacity-90 transition">
                  Elegir plan
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12 text-center shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Empieza con una versión MVP</h3>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Primero validamos la idea: formulario + generación de plan + chat básico. Luego agregamos pagos, perfiles, historial y ajustes automáticos.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <button className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-medium hover:opacity-90 transition">
                Lanzar MVP
              </button>
              <button className="px-6 py-3 rounded-2xl border border-slate-600 text-white font-medium hover:bg-slate-800 transition">
                Ver estructura
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
