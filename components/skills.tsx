"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      className='mb-28 max-w-212 scroll-mt-28 text-center sm"mb-40'
      ref={ref}
    >
      <SectionHeading>My Skills</SectionHeading>
      {/* Product Leadership & Management */}
      <div className="space-y-12">
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white/90">
            Product Leadership & Management
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillsData.slice(0, 10).map((skill, index) => (
              <motion.li
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="bg-white border border-black/10 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/60"
              >
                {skill}
              </motion.li>
            ))}
          </div>
        </ul>
        {/* Product Tools & Workflows */}
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white/90">
            Product Tools & Workflows
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillsData.slice(10, 17).map((skill, index) => (
              <motion.li
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="bg-white border border-black/10 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/60"
              >
                {skill}
              </motion.li>
            ))}
          </div>
        </ul>
        {/* AI & Emerging Tech */}
        {/* <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white/90">
            AI & Emerging Tech
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillsData.slice(17, 22).map((skill, index) => (
              <motion.li
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="bg-white border border-black/10 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/60"
              >
                {skill}
              </motion.li>
            ))}
          </div>
        </ul> */}
        {/* Technical Depth */}
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white/90">
            Technical Depth
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillsData.slice(22).map((skill, index) => (
              <motion.li
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="bg-white border border-black/10 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/60"
              >
                {skill}
              </motion.li>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
