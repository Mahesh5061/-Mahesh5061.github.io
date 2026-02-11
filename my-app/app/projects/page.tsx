const projects = [
    {
    title: "Bloomberg Professional is an enterprise B2B SaaS platform",
    tech: ["Optimizely CMS", ".NET Core", "Azure", "React"],
    description:"Implimented the migrated pages into optimizely pages, with user friendly text-speech funtionalities."
    },
  {
    title: "Flinn Scientific E-commerce Platform",
    tech: ["Optimizely CMS", ".NET Core", "Azure", "React"],
    description:
      "Migrated legacy e-commerce platform to Optimizely CMS, integrating payment gateways and inventory systems, increasing conversion rates by 35%."
  },
  {
    title: "Data Intelligence Dashboard",
    tech: ["Python", "SQL", "Power BI", "Web Scraping"],
    description:
      "Built automated web scraping pipelines using Python to collect market data from 50+ sources and visualize insights using Power BI."
  },
  {
    title: "Corporate Website Redesign",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    description:
      "Redesigned corporate website with modern UI/UX principles achieving a 98/100 Google Lighthouse performance score."
  }
];

export default function Projects() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-gray-600">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-gray-100 text-sm rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}