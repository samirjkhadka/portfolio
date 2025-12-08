"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section id="home" className="mb-28 max-w-[5-rem] text-center sm:mb-0">
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
        <span className="font-bold">Hello, I&apos;m Samir.</span> I&apos;m a{" "}
        <span className="font-bold">Principal Project Manager</span> and{" "}
        <span className="font-bold">UI/UX Designer</span> with
        <span className="font-bold"> 4 years +</span> of experience. Currently
        based in Kathmandu.
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
        >
          <BsArrowRight /> Let&apos;s Connect
        </Link>
        <a
          href=""
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-50 active:scale-105 transition"
        >
          Download CV <HiDownload className="opacity-60" />
        </a>
        <a
          href=""
          className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-50 active:scale-105 transition text-[1.35rem]"
        >
          <BsLinkedin />
        </a>
        <a
          href=""
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-110 hover:scale-110 hover:bg-gray-50 active:scale-105 transition"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
