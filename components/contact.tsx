"use client";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { SubmitBtn } from "./submit-btn";
import { toast } from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
export const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {" "}
        Please contact me directly at{" "}
        <a href="mailto:samirjkhadka@gmail.com" className="underline">
          samirjkhadka@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            throw error;
          }
          toast.success("Email sent successfully");
        }}
        className="mt-10 flex flex-col dark:text-black-"
      >
        <input
          type="email"
          className="h-14 px-4 rounded-lg border dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          className="h-52 my-3 px-4 rounded-lg border dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          id=""
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
};
