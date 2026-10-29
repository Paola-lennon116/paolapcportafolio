import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juana Paola Palomo Cortés — Ingeniera Electrónica" },
      { name: "description", content: "Portafolio de Juana Paola Palomo Cortés: automatización industrial, PLC, análisis de datos e IA. Aguascalientes, México." },
      { property: "og:title", content: "Juana Paola Palomo Cortés — Ingeniera Electrónica" },
      { property: "og:description", content: "Automatización industrial, PLC, análisis de datos e Inteligencia Artificial." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["perfil", "Perfil"],
  ["habilidades", "Habilidades"],
  ["experiencia", "Experiencia"],
  ["portafolio", "Portafolio"],
  ["testimonios", "Testimonios"],
  ["contacto", "Contacto"],
];

const skills = [
  { t: "Ingeniería e Industria", i: ["Operación y ajuste de maquinaria", "Programación básica de PLC", "Diagramas eléctricos y de control", "Control de calidad", "Higiene y seguridad industrial"] },
  { t: "Datos y Software", i: ["Análisis de datos operativos", "Reportes dinámicos en Excel", "Herramientas de IA para optimización"] },
  { t: "Gestión y Liderazgo", i: ["Dirección de equipos", "Gestión financiera y de proveedores", "Resolución bajo presión", "Pensamiento estratégico"] },
];

const jobs = [
  { r: "Fundadora y Directora de Operaciones", c: "Proyecto Emprendedor (Cafetería)", d: "May 2023 – Presente", p: ["Fundé y gestiono las operaciones diarias, liderando al equipo y asegurando el control de calidad.", "Toma de decisiones rápidas y manejo del estrés en alta demanda operativa.", "Implementé controles de inventario, presupuestos y costos."] },
  { r: "Asistente Administrativa y Coordinación de Cadena de Suministro", c: "GALE HERMANOS S.A. de C.V.", d: "Mar 2019 – May 2026", p: ["Gestión de pagos a proveedores y servicios.", "Soporte al proceso de exportación de productos agrícolas.", "Comunicación con proveedores y logística para cumplir tiempos de entrega.", "Reportes de control en Excel para indicadores administrativos y comerciales."] },
  { r: "Operadora de Maquinaria Industrial", c: "Lechugas Frescas MK S.A. de C.V.", d: "Mar 2021 – May 2023", p: ["Operé y ajusté maquinaria de corte y procesamiento de hortalizas.", "Configuración y supervisión en tiempo real para minimizar tiempos muertos.", "Verificación de calidad bajo normas de seguridad e higiene."] },
];

function Label({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3 font-mono text-sm text-teal">
      <span className="text-copper">{n}</span>
      <span className="h-px w-10 bg-copper" />
      <span className="uppercase tracking-widest">{children}</span>
    </div>
  );
}

function ImageSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-lg border-2 border-dashed border-teal/40 bg-teal/5 p-6 text-center font-mono text-xs text-teal ${className}`}>
      [ {label} ]
    </div>
  );
}

function Index() {
  return (
    <div className="font-sans">
      <header className="sticky top-0 z-50 border-b border-ivory/10 bg-primary/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="font-display text-lg font-bold text-ivory">
            JP<span className="text-copper">.</span>PC
          </a>
          <nav className="hidden gap-6 md:flex">
            {nav.map(([id, l]) => (
              <a key={id} href={`#${id}`} className="font-mono text-xs uppercase tracking-wider text-ivory/70 transition-colors hover:text-copper">
                {l}
              </a>
            ))}
          </nav>
          <a href="#contacto" className="rounded-md bg-copper px-4 py-2 text-sm font-medium text-accent-foreground md:hidden">Contacto</a>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="grid-tech pointer-events-none absolute inset-0 opacity-10" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-3 md:py-32">
          <div className="md:col-span-2">
            <p className="mb-4 font-mono text-sm text-copper">&gt; ingeniera_electronica.init()</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">Juana Paola<br />Palomo Cortés</h1>
            <p className="mt-6 max-w-xl text-lg text-ivory/80">Automatización industrial, PLC, análisis de datos e Inteligencia Artificial aplicada a procesos.</p>
            <p className="mt-3 font-mono text-sm text-ivory/60">Aguascalientes, Ags., México · Disponibilidad de reubicación</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="rounded-md bg-copper px-6 py-3 font-medium text-accent-foreground transition-transform hover:-translate-y-0.5">Contáctame</a>
              <a href="#portafolio" className="rounded-md border border-ivory/30 px-6 py-3 font-medium transition-colors hover:border-copper hover:text-copper">Ver portafolio</a>
            </div>
          </div>
          <ImageSlot label="Tu fotografía profesional" className="aspect-square border-ivory/30 bg-ivory/5 text-ivory/70" />
        </div>
      </section>

      {/* PERFIL */}
      <section id="perfil" className="mx-auto max-w-6xl px-5 py-20">
        <Label n="01">Perfil profesional</Label>
        <div className="grid gap-10 md:grid-cols-3">
          <p className="text-lg leading-relaxed md:col-span-2">
            Ingeniera Electrónica con enfoque analítico y experiencia práctica en soporte de automatización industrial, operación de maquinaria, gestión de cadena de suministro y dirección de procesos. Habilidad comprobada en programación y diagnóstico básico de PLC, interpretación de diagramas eléctricos de control y análisis de datos para la optimización operativa. Líder proactiva, emprendedora y apasionada por la enseñanza de tecnología y el aprendizaje continuo en IA.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {[["7+", "años de experiencia"], ["3", "idiomas"], ["STEM", "mentora activa"]].map(([k, v]) => (
              <div key={v} className="border-l-2 border-copper pl-4">
                <div className="font-display text-3xl font-bold text-copper">{k}</div>
                <div className="font-mono text-xs uppercase text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="bg-secondary/10 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Label n="02">Competencias técnicas</Label>
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((s) => (
              <div key={s.t} className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-teal">{s.t}</h3>
                <ul className="space-y-2">
                  {s.i.map((x) => (
                    <li key={x} className="flex gap-2 text-sm"><span className="text-copper">▸</span>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="mx-auto max-w-6xl px-5 py-20">
        <Label n="03">Experiencia profesional</Label>
        <div className="space-y-10 border-l border-teal/30 pl-6 md:pl-10">
          {jobs.map((j) => (
            <div key={j.r} className="relative">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-copper md:-left-[47px]" />
              <p className="font-mono text-xs text-copper">{j.d}</p>
              <h3 className="mt-1 text-xl font-bold">{j.r}</h3>
              <p className="text-teal">{j.c}</p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {j.p.map((x) => <li key={x}>— {x}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-primary p-6 text-primary-foreground md:col-span-2">
            <p className="font-mono text-xs text-copper">IMPACTO SOCIAL · PRESENTE</p>
            <h3 className="mt-2 text-2xl font-bold">Instructora y Mentora STEM</h3>
            <p className="text-ivory/70">Tecnolochicas – Fundación Televisa</p>
            <p className="mt-4 text-sm text-ivory/85">Imparto clases de tecnología a niñas y jóvenes de 12 a 18 años, promoviendo el liderazgo femenino en STEM con dinámicas que desarrollan lógica, creatividad y pensamiento computacional.</p>
          </div>
          <ImageSlot label="Foto de voluntariado" className="min-h-48" />
        </div>
      </section>

      {/* EDUCACIÓN */}
      <section className="bg-secondary/10 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
          <div className="md:col-span-2">
            <Label n="04">Educación</Label>
            <h3 className="text-2xl font-bold">Ingeniería Electrónica</h3>
            <p className="text-teal">Instituto Tecnológico de Aguascalientes · 2019 – 2023</p>
            <p className="mt-6 font-mono text-xs uppercase text-copper">Formación continua (en curso)</p>
            <p className="mt-1">Análisis de Datos e Inteligencia Artificial: modelos analíticos para la toma de decisiones y automatización de procesos.</p>
          </div>
          <div>
            <Label n="05">Idiomas</Label>
            {[["Español", "Nativo", 100], ["Inglés", "Intermedio", 60], ["Francés", "Básico", 30]].map(([l, n, w]) => (
              <div key={l} className="mb-4">
                <div className="flex justify-between text-sm"><span className="font-medium">{l}</span><span className="font-mono text-muted-foreground">{n}</span></div>
                <div className="mt-1 h-1.5 rounded bg-border"><div className="h-full rounded bg-teal" style={{ width: `${w}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section id="portafolio" className="mx-auto max-w-6xl px-5 py-20">
        <Label n="06">Portafolio</Label>
        <div className="grid gap-6 md:grid-cols-3">
          {["Proyecto PLC", "Dashboard de datos", "Proyecto con IA"].map((p) => (
            <a key={p} href="#" className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg">
              <ImageSlot label="Imagen del proyecto" className="aspect-video rounded-none border-0 border-b-2" />
              <div className="p-5">
                <h3 className="font-bold group-hover:text-copper">{p}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Descripción breve del proyecto.</p>
                <p className="mt-3 font-mono text-xs text-teal">Ver enlace →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <Label n="07">Testimonios</Label>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <figure key={i} className="rounded-lg border border-ivory/15 p-6">
                <blockquote className="text-ivory/85">“Espacio para un testimonio de un colega, cliente o alumna.”</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full border border-dashed border-ivory/40" />
                  <span className="text-sm"><b>Nombre</b><br /><span className="text-ivory/60">Cargo · Empresa</span></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-5 py-20 text-center">
        <Label n="08">Contacto</Label>
        <h2 className="text-3xl font-bold md:text-5xl">¿Trabajamos juntos?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="mailto:palomocortesjpaola@email.com" className="rounded-md bg-copper px-6 py-3 font-medium text-accent-foreground">palomocortesjpaola@email.com</a>
          <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noreferrer" className="rounded-md border border-primary px-6 py-3 font-medium hover:bg-primary hover:text-primary-foreground">LinkedIn</a>
        </div>
      </section>

      <footer className="border-t border-border py-6 text-center font-mono text-xs text-muted-foreground">
        © 2026 Juana Paola Palomo Cortés
      </footer>
    </div>
  );
}
