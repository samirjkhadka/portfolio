import React from "react";
import SectionHeading from "./sectionHeading";

const About = () => {
  return (
    <section
      id="about"
      className="mb-28 max-w-180 text-center leading-8 sm:mb-40"
    >
      <SectionHeading> About Me </SectionHeading>
      <h2 className="text-3xl font-medium capitalize mb-8">About Me</h2>
      <p className="text-center mb-3">
        I am a frontend developer with a passion for creating intuitive and
        user-friendly interfaces. I specialize in HTML, CSS, and JavaScript, and
        have experience working with frameworks like React, Next.js, and
        Tailwind. I also have experience with backend technologies such as
        Node.js and Express.js. I am a quick learner and a team player, and I am
        committed to delivering high-quality work that meets the needs of my
        clients.
      </p>
      <p className="text-center">
        when I&apos;m not coding, I enjoy playing video games, watching movies,
        and listening to music.
      </p>
    </section>
  );
};

export default About;
