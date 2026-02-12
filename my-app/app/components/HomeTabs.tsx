"use client";

import { useState } from "react";
import Image from "next/image";

const certifications = [
    {
        title: "Microsoft Certified: Azure Fundamentals",
        period: "2023",
        includes: ["Azure Services", "Cloud Concepts", "Security & Compliance"],
        description:
            "Validated foundational knowledge of cloud services, Azure architecture, pricing models, and core Azure services used in enterprise applications.",
        image: "/certifications/azure-fundamentals.png",
    },
    {
        title: "Programming Foundations with Python",
        period: "2022",
        includes: ["Python Basics", "Data Structures", "Automation"],
        description:
            "Demonstrated strong understanding of Python programming concepts and their application in automation, scripting, and data processing tasks.",
        image: "/certifications/python-foundation.png",
    },
    {
        title: "Responsive Web Design using Flexbox",
        period: "2022",
        includes: ["Flexbox", "Mobile-first Design", "Responsive Layouts"],
        description:
            "Focused on building responsive, accessible web interfaces using modern CSS techniques and mobile-first principles.",
        image: "/certifications/flexbox.png",
    },
];

const blogs = [
    {
        title: "Optimizely CMS Migration – Best Practices",
        link: "#",
    },
    {
        title: "Improving Performance in .NET Core Applications",
        link: "#",
    },
    {
        title: "Web Scraping with Python: Real-world Use Cases",
        link: "#",
    },
];

export default function HomeTabs() {
    const [activeTab, setActiveTab] = useState<"certs" | "blogs">("certs");

    return (
        <section className="mt-32 w-full bg-gray-50 py-20">
            {/* Inner container to keep content readable */}
            <div className="px-10 max-w-6xl mx-auto">

                <h2 className="text-3xl font-bold text-center mb-12">
                    Certifications & Blogs
                </h2>

                {/* Tabs */}
                <div className="flex justify-center gap-6 mb-10">
                    <button
                        onClick={() => setActiveTab("certs")}
                        className={`px-6 py-2 rounded-full border transition ${activeTab === "certs"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        Certifications
                    </button>

                    <button
                        onClick={() => setActiveTab("blogs")}
                        className={`px-6 py-2 rounded-full border transition ${activeTab === "blogs"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        Blogs
                    </button>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl shadow-sm p-10">
                    {activeTab === "certs" && (
                        <div className="space-y-16">
                            {certifications.map((cert) => (
                                <div
                                    key={cert.title}
                                    className="grid md:grid-cols-2 gap-10 items-center border-b pb-12"
                                >
                                    {/* LEFT SIDE – CONTENT */}
                                    <div>
                                        <h3 className="text-2xl font-semibold">{cert.title}</h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Period: {cert.period}
                                        </p>

                                        <p className="mt-4 text-gray-700">
                                            {cert.description}
                                        </p>

                                        <div className="mt-4">
                                            <p className="font-medium text-gray-800 mb-2">
                                                Includes:
                                            </p>
                                            <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                                {cert.includes.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* RIGHT SIDE – IMAGE */}
                                    <div className="flex justify-center md:justify-end">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            width={260}
                                            height={180}
                                            className="rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "blogs" && (
                        <ul className="space-y-6">
                            {blogs.map((blog) => (
                                <li key={blog.title}>
                                    <a
                                        href={blog.link}
                                        className="text-lg text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {blog.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>
        </section>
    );
}