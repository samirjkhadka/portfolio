"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[5-rem] text-center sm:mb-0"
    >
      {/* profile Image */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/rmtdev.png"
              alt="profile"
              width={192}
              height={192}
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      {/* intro */}
      <motion.p
        className="text-center mb-10 mt-4 px-4 text-2xl font-medium leading-normal! sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Namaste, I&apos;m Samir J Khadka.</span>{" "}
        <br />
        <span className="font-bold text-xl">
          Product Leader & Builder | Principal Project Manager | UI/UX Designer{" "}
          <br />
          Fintech | Travel Tech
          <br />
        </span>
        <span className="text-xl">
          Former Principal Project Manager at a regulated Payment Service
          Provider in Nepal, where I led the end to end development of mobile
          wallets, payment gateways, and APIs that drove financial inclusion
          across urban and rural communities.
        </span>
        <br />
        <span className=" text-xl">
          Currently bootstrapping{" "}
          <strong>
            <a href="https://www.nepalihomestaybooking.com" target="_blank">Nepali Homestays</a>
          </strong>{" "}
          - the marketplace connecting travelers with authentic local hosts -
          while shipping AI-powered travel tools and mobile experiences.
        </span>
        <br />
        <span className="font-bold text-xl">
          {" "}
          Based in Kathmandu | Full-stack capable | AI-native PM{" "}
        </span>
      </motion.p>
      <motion.div
        className="flex items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <BsArrowRight /> Let&apos;s Connect
        </Link>
        <a
          href=""
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-white/20"
        >
          Download CV <HiDownload className="opacity-60" />
        </a>
        <a
          href=""
          className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-50 active:scale-105 transition text-[1.35rem] cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href=""
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-110 hover:scale-110 hover:bg-gray-50 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
