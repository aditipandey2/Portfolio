"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>React</li>
        <li>Angular</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>SQL</li>
        <li>Java</li>
        <li>C++</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Jaypee University of Information Technology, Waknaghat, India</li>
        <li>Delhi Public School, Bangalore East, India</li>
        <li>Amity International School, Vasundhara, India</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Python Foundation Certification</li>
        <li>Associate in IT Foundation Skills (&apos;Python&apos;)</li>
        <li>React Web Developer Certification</li>
        <li>LYFT: Back-End Engineering Virtual Experience Program</li>
        <li>JPMorgan Chase &amp; Co: Software Engineering Virtual Experience</li>
        <li>Data Science Foundation Certification</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/abt.jpg" width={500} height={500} alt="About Me Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Passionate Full-Stack Developer skilled in React, Angular, Node.js,
            Python and Machine Learning. I thrive on delivering robust web applications
            and am deeply passionate about harnessing the power of data-driven solutions
            and machine learning algorithms. I'm eagerly open to new opportunities and
            excited to contribute to innovative projects. Let's connect and explore potential
            collaborations.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
