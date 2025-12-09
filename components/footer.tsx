import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://github.com/samirjkhadka">Samir J Khadka</a>. All rights
        reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">
          built with Next.js, Tailwind CSS, and Framer Motion.
        </span>
      </p>
    </footer>
  );
};

export default Footer;
