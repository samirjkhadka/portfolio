"use client";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-180 text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading> About Me </SectionHeading>

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
    </motion.section>
  );
};

export default About;
