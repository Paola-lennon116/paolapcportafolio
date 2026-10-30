import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import perfil from "@/assets/perfil.jpg.asset.json";
import voluntariado from "@/assets/voluntariado.jpg.asset.json";

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

const LINKEDIN = "https://www.linkedin.com/in/juana-paola-palomo-cort%C3%A9s-a890a0210";

const T = {
  es: {
    nav: [["perfil", "Perfil"], ["habilidades", "Habilidades"], ["experiencia", "Experiencia"], ["portafolio", "Portafolio"], ["testimonios", "Testimonios"], ["contacto", "Contacto"]],
    contact: "Contacto",
    heroSub: "Automatización industrial, PLC, análisis de datos e Inteligencia Artificial aplicada a procesos.",
    location: "Aguascalientes, Ags., México · Disponibilidad de reubicación",
    ctaContact: "Contáctame",
    ctaPortfolio: "Ver portafolio",
    photoAlt: "Fotografía profesional de Juana Paola Palomo Cortés",
    lProfile: "Perfil profesional",
    profile: "Ingeniera Electrónica con enfoque analítico y experiencia práctica en soporte de automatización industrial, operación de maquinaria, gestión de cadena de suministro y dirección de procesos. Habilidad comprobada en programación y diagnóstico básico de PLC, interpretación de diagramas eléctricos de control y análisis de datos para la optimización operativa. Líder proactiva, emprendedora y apasionada por la enseñanza de tecnología y el aprendizaje continuo en IA.",
    stats: [["7+", "años de experiencia"], ["3", "idiomas"], ["STEM", "mentora activa"]],
    lSkills: "Competencias técnicas",
    skills: [
      { t: "Ingeniería e Industria", i: ["Operación y ajuste de maquinaria", "Programación básica de PLC", "Diagramas eléctricos y de control", "Control de calidad", "Higiene y seguridad industrial"] },
      { t: "Datos y Software", i: ["Análisis de datos operativos", "Reportes dinámicos en Excel", "Herramientas de IA para optimización"] },
      { t: "Gestión y Liderazgo", i: ["Dirección de equipos", "Gestión financiera y de proveedores", "Resolución bajo presión", "Pensamiento estratégico"] },
    ],
    lExp: "Experiencia profesional",
    jobs: [
      { r: "Fundadora y Directora de Operaciones", c: "Proyecto Emprendedor (Cafetería)", d: "Sep 2025 – Presente", p: ["Fundé y gestiono las operaciones diarias, liderando al equipo y asegurando el control de calidad.", "Toma de decisiones rápidas y manejo del estrés en alta demanda operativa.", "Implementé controles de inventario, presupuestos y costos."] },
      { r: "Asistente Administrativa y Coordinación de Cadena de Suministro", c: "GALE HERMANOS S.A. de C.V.", d: "Mar 2019 – May 2026", p: ["Gestión de pagos a proveedores y servicios.", "Soporte al proceso de exportación de productos agrícolas.", "Comunicación con proveedores y logística para cumplir tiempos de entrega.", "Reportes de control en Excel para indicadores administrativos y comerciales."] },
      { r: "Operadora de Maquinaria Industrial", c: "Lechugas Frescas MK S.A. de C.V.", d: "Mar 2021 – May 2023", p: ["Operé y ajusté maquinaria de corte y procesamiento de hortalizas.", "Configuración y supervisión en tiempo real para minimizar tiempos muertos.", "Verificación de calidad bajo normas de seguridad e higiene."] },
    ],
    socialTag: "IMPACTO SOCIAL · PRESENTE",
    socialRole: "Instructora y Mentora STEM",
    social: "Imparto clases de tecnología a niñas y jóvenes de 12 a 18 años, promoviendo el liderazgo femenino en STEM con dinámicas que desarrollan lógica, creatividad y pensamiento computacional.",
    volAlt: "Juana Paola como voluntaria en Tecnolochicas",
    lEdu: "Educación",
    degree: "Ingeniería Electrónica",
    cont: "Formación continua (en curso)",
    contText: "Análisis de Datos e Inteligencia Artificial: modelos analíticos para la toma de decisiones y automatización de procesos.",
    lLang: "Idiomas",
    langs: [["Español", "Nativo", 100], ["Inglés", "Intermedio", 60], ["Francés", "Básico", 30]] as [string, string, number][],
    lPort: "Portafolio",
    projects: [["Proyecto PLC", "https://github.com/Paola-lennon116/Proyectos-de-PLC"], ["Dashboard de datos", "https://github.com/Paola-lennon116/Proyectos-de-an-lisis-de-datos"], ["Proyecto con IA", "https://github.com/Paola-lennon116/Vibecoding"]],
    projDesc: "Descripción breve del proyecto.",
    projImg: "Imagen del proyecto",
    go: "Ir a proyectos →",
    lTest: "Testimonios",
    quote: "“Espacio para un testimonio de un colega, cliente o alumna.”",
    name: "Nombre",
    pos: "Cargo · Empresa",
    lContact: "Contacto",
    together: "¿Trabajamos juntos?",
  },
  en: {
    nav: [["perfil", "Profile"], ["habilidades", "Skills"], ["experiencia", "Experience"], ["portafolio", "Portfolio"], ["testimonios", "Testimonials"], ["contacto", "Contact"]],
    contact: "Contact",
    heroSub: "Industrial automation, PLC, data analysis and Artificial Intelligence applied to processes.",
    location: "Aguascalientes, Mexico · Open to relocation",
    ctaContact: "Contact me",
    ctaPortfolio: "View portfolio",
    photoAlt: "Professional photo of Juana Paola Palomo Cortés",
    lProfile: "Professional profile",
    profile: "Electronics Engineer with an analytical mindset and hands-on experience in industrial automation support, machinery operation, supply chain management and process leadership. Proven skills in basic PLC programming and troubleshooting, reading electrical control diagrams, and data analysis for operational optimization. Proactive leader and entrepreneur, passionate about teaching technology and continuous learning in AI.",
    stats: [["7+", "years of experience"], ["3", "languages"], ["STEM", "active mentor"]],
    lSkills: "Technical skills",
    skills: [
      { t: "Engineering & Industry", i: ["Machinery operation and adjustment", "Basic PLC programming", "Electrical and control diagrams", "Quality control", "Industrial health and safety"] },
      { t: "Data & Software", i: ["Operational data analysis", "Dynamic Excel reports", "AI tools for optimization"] },
      { t: "Management & Leadership", i: ["Team leadership", "Financial and supplier management", "Problem solving under pressure", "Strategic thinking"] },
    ],
    lExp: "Professional experience",
    jobs: [
      { r: "Founder & Operations Director", c: "Entrepreneurial Project (Coffee Shop)", d: "Sep 2025 – Present", p: ["Founded and manage daily operations, leading the team and ensuring quality control.", "Fast decision-making and stress management under high operational demand.", "Implemented inventory, budget and cost controls."] },
      { r: "Administrative Assistant & Supply Chain Coordinator", c: "GALE HERMANOS S.A. de C.V.", d: "Mar 2019 – May 2026", p: ["Managed payments to suppliers and services.", "Supported the export process of agricultural products.", "Coordinated with suppliers and logistics to meet delivery times.", "Built Excel control reports for administrative and commercial KPIs."] },
      { r: "Industrial Machinery Operator", c: "Lechugas Frescas MK S.A. de C.V.", d: "Mar 2021 – May 2023", p: ["Operated and adjusted vegetable cutting and processing machinery.", "Real-time setup and monitoring to minimize downtime.", "Quality checks under safety and hygiene standards."] },
    ],
    socialTag: "SOCIAL IMPACT · PRESENT",
    socialRole: "STEM Instructor & Mentor",
    social: "I teach technology classes to girls and young women aged 12 to 18, promoting female leadership in STEM through activities that build logic, creativity and computational thinking.",
    volAlt: "Juana Paola volunteering at Tecnolochicas",
    lEdu: "Education",
    degree: "B.S. Electronics Engineering",
    cont: "Continuing education (in progress)",
    contText: "Data Analysis and Artificial Intelligence: analytical models for decision-making and process automation.",
    lLang: "Languages",
    langs: [["Spanish", "Native", 100], ["English", "Intermediate", 60], ["French", "Basic", 30]] as [string, string, number][],
    lPort: "Portfolio",
    projects: [["PLC Projects", "https://github.com/Paola-lennon116/Proyectos-de-PLC"], ["Data Dashboard", "https://github.com/Paola-lennon116/Proyectos-de-an-lisis-de-datos"], ["AI Project", "https://github.com/Paola-lennon116/Vibecoding"]],
    projDesc: "Short project description.",
    projImg: "Project image",
    go: "Go to projects →",
    lTest: "Testimonials",
    quote: "“Space for a testimonial from a colleague, client or student.”",
    name: "Name",
    pos: "Role · Company",
    lContact: "Contact",
    together: "Shall we work together?",
  },
};

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
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = T[lang];
  const toggle = (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="rounded-md border border-ivory/30 px-3 py-1.5 font-mono text-xs text-ivory transition-colors hover:border-copper hover:text-copper"
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );

  return (
    <div className="font-sans" lang={lang}>
      <header className="sticky top-0 z-50 border-b border-ivory/10 bg-primary/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="font-display text-lg font-bold text-ivory">
            JP<span className="text-copper">.</span>PC
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden gap-6 md:flex">
              {t.nav.map(([id, l]) => (
                <a key={id} href={`#${id}`} className="font-mono text-xs uppercase tracking-wider text-ivory/70 transition-colors hover:text-copper">
                  {l}
                </a>
              ))}
            </nav>
            {toggle}
            <a href="#contacto" className="rounded-md bg-copper px-4 py-2 text-sm font-medium text-accent-foreground md:hidden">{t.contact}</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="grid-tech pointer-events-none absolute inset-0 opacity-10" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-3 md:py-32">
          <div className="md:col-span-2">
            <p className="mb-4 font-mono text-sm text-copper">&gt; {lang === "es" ? "ingeniera_electronica" : "electronics_engineer"}.init()</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">Juana Paola<br />Palomo Cortés</h1>
            <p className="mt-6 max-w-xl text-lg text-ivory/80">{t.heroSub}</p>
            <p className="mt-3 font-mono text-sm text-ivory/60">{t.location}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="rounded-md bg-copper px-6 py-3 font-medium text-accent-foreground transition-transform hover:-translate-y-0.5">{t.ctaContact}</a>
              <a href="#portafolio" className="rounded-md border border-ivory/30 px-6 py-3 font-medium transition-colors hover:border-copper hover:text-copper">{t.ctaPortfolio}</a>
            </div>
          </div>
          <img src={perfil.url} alt={t.photoAlt} className="aspect-square w-full rounded-lg border-2 border-copper object-cover" />
        </div>
      </section>

      {/* PERFIL */}
      <section id="perfil" className="mx-auto max-w-6xl px-5 py-20">
        <Label n="01">{t.lProfile}</Label>
        <div className="grid gap-10 md:grid-cols-3">
          <p className="text-lg leading-relaxed md:col-span-2">{t.profile}</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {t.stats.map(([k, v]) => (
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
          <Label n="02">{t.lSkills}</Label>
          <div className="grid gap-6 md:grid-cols-3">
            {t.skills.map((s) => (
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
        <Label n="03">{t.lExp}</Label>
        <div className="space-y-10 border-l border-teal/30 pl-6 md:pl-10">
          {t.jobs.map((j) => (
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
            <p className="font-mono text-xs text-copper">{t.socialTag}</p>
            <h3 className="mt-2 text-2xl font-bold">{t.socialRole}</h3>
            <p className="text-ivory/70">Tecnolochicas – Fundación Televisa</p>
            <p className="mt-4 text-sm text-ivory/85">{t.social}</p>
          </div>
          <img src={voluntariado.url} alt={t.volAlt} className="h-full min-h-48 w-full rounded-lg object-cover" />
        </div>
      </section>

      {/* EDUCACIÓN */}
      <section className="bg-secondary/10 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
          <div className="md:col-span-2">
            <Label n="04">{t.lEdu}</Label>
            <h3 className="text-2xl font-bold">{t.degree}</h3>
            <p className="text-teal">Instituto Tecnológico de Aguascalientes · 2019 – 2023</p>
            <p className="mt-6 font-mono text-xs uppercase text-copper">{t.cont}</p>
            <p className="mt-1">{t.contText}</p>
          </div>
          <div>
            <Label n="05">{t.lLang}</Label>
            {t.langs.map(([l, n, w]) => (
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
        <Label n="06">{t.lPort}</Label>
        <div className="grid gap-6 md:grid-cols-3">
          {t.projects.map(([p, href]) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg">
              <ImageSlot label={t.projImg} className="aspect-video rounded-none border-0 border-b-2" />
              <div className="p-5">
                <h3 className="font-bold group-hover:text-copper">{p}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.projDesc}</p>
                <p className="mt-3 font-mono text-xs text-teal">{t.go}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <Label n="07">{t.lTest}</Label>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <figure key={i} className="rounded-lg border border-ivory/15 p-6">
                <blockquote className="text-ivory/85">{t.quote}</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full border border-dashed border-ivory/40" />
                  <span className="text-sm"><b>{t.name}</b><br /><span className="text-ivory/60">{t.pos}</span></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-5 py-20 text-center">
        <Label n="08">{t.lContact}</Label>
        <h2 className="text-3xl font-bold md:text-5xl">{t.together}</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="mailto:palomocortesjpaola@email.com" className="rounded-md bg-copper px-6 py-3 font-medium text-accent-foreground">palomocortesjpaola@email.com</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-md border border-primary px-6 py-3 font-medium hover:bg-primary hover:text-primary-foreground">LinkedIn</a>
        </div>
      </section>

      <footer className="border-t border-border py-6 text-center font-mono text-xs text-muted-foreground">
        © 2026 Juana Paola Palomo Cortés
      </footer>
    </div>
  );
}
