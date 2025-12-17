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

      <p className=" mb-3 text-justify">
        I&apos;m a product leader with over 5 years of experience building and
        scaling regulated digital payment platforms in Nepal. As{" "}
        <strong>Principal Project Manager</strong> at WEPAY, I defined the
        company vision and led cross-functional teams to deliver secure,
        user-centric products — from mobile wallets and QR payments to merchant
        onboarding and utility bill payments. I owned the full product
        lifecycle:{" "}
        <strong>
          writing user stories, prioritizing backlogs, running Agile ceremonies,
          and ensuring NRB compliance{" "}
        </strong>{" "}
        without compromising speed or UX. Previously at Digi Hub, I managed a
        30+ person team to launch PSP platforms that grew the{" "}
        <strong>customer base by 40% and revenue by 25%</strong>. I translated
        complex business needs into clear requirements, conducted user research,
        and drove iterative improvements based on real feedback. With an{" "}
        <strong>
          M.Sc. in Business Information Systems (University of Bedfordshire, UK)
        </strong>{" "}
        and hands-on experience across Node.js, PostgreSQL, REST APIs, and
        modern frontend frameworks, I bridge the gap between strategy and
        execution. Today, I&apos;m channeling that expertise into travel tech.
        Through <strong>Nepali Homestays</strong>, I&apos;m creating the most
        trusted platform for authentic local stays — because Nepal deserves a
        homegrown alternative that truly understands our culture and
        communities. I believe great products don&apos;t just solve problems,
        they create access, build trust, and change lives.
      </p>
      <p className="text-center">
        When I&apos;m not coding, I enjoy playing video games, watching movies,
        and listening to music.
      </p>
    </motion.section>
  );
};

export default About;
