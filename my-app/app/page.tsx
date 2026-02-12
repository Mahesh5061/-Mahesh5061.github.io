import Image from "next/image";
import SkillsOrbit from "./components/SkillsOrbit";
import HomeTabs from "./components/HomeTabs";

export default function Home() {
  return (
    <section className="min-h-[90vh] items-center px-10">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl font-bold">
            Mahesh <span className="text-blue-600">Software Engineer</span>
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-xl">
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
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center">
          <Image
            src="/profile.jpg"
            alt="Mahesh profile"
            width={220}
            height={220}
            className="rounded-full border shadow-lg"
            priority
          />

          {/* Skills Orbit */}
          <SkillsOrbit />
        </div>
      </div>
      <div>
         <HomeTabs />
      </div>
    </section>
  );
}
