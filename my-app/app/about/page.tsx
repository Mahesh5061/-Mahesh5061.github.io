export default function About() {
    return (
        <section className="px-10 py-16 max-w-5xl">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>

            <p className="text-lg text-gray-700 mb-10">
                I am a Software Engineer with 2+ years of experience building
                enterprise-level web applications using Microsoft technologies,
                Optimizely CMS, and modern JavaScript frameworks. I enjoy solving
                complex problems, optimizing performance, and delivering scalable
                solutions.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>

            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                <li><strong>Languages:</strong> C#, Python, JavaScript, TypeScript, SQL</li>
                <li><strong>Frameworks:</strong> .NET Core, ASP.NET MVC, React, Node.js</li>
                <li><strong>CMS:</strong> Optimizely (Episerver), WordPress</li>
                <li><strong>Databases:</strong> SQL Server, PostgreSQL, MongoDB</li>
                <li><strong>Cloud & DevOps:</strong> Azure, Docker, Azure DevOps</li>
                <li><strong>Specialized:</strong> Web Scraping, Responsive Design</li>
            </ul>

            <br />
            <br />

            <h2 className="text-4xl font-bold mb-8">Experience</h2>

            <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-semibold">Software Engineer</h3>
                <p className="text-gray-600">
                    Geval6 Inc • Apr 2023 – Present • Chennai, India
                </p>

                <ul className="mt-4 list-disc ml-6 text-gray-700 space-y-2">
                    <li>
                        Built enterprise web applications using Optimizely CMS and .NET Core
                        serving 100K+ monthly users with 99.9% uptime.
                    </li>
                    <li>
                        Reduced page load times by 40% through performance optimization and caching.
                    </li>
                    <li>
                        Developed Python automation and web scraping solutions processing
                        500K+ records daily.
                    </li>
                    <li>
                        Designed RESTful APIs and integrated third-party services for analytics.
                    </li>
                    <li>
                        Mentored junior developers and improved overall code quality by 30%.
                    </li>
                </ul>
            </div>
        </section>
    );
}