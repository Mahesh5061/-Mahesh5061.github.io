export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-10">
      <h1 className="text-5xl font-bold">
        Mahesh <span className="text-blue-600">Software Engineer</span>
      </h1>

      <p className="mt-6 text-xl text-gray-600 max-w-3xl">
        Results-driven Software Engineer with 2+ years of experience in
        full-stack development using .NET, Optimizely CMS, React, and Python.
        Specialized in building scalable enterprise web applications and
        automation solutions.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border rounded-lg"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}