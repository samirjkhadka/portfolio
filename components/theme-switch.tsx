"use client";
import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 bg-white w-12 h-12 bg-opacity-80 backdrop-blur-sm border border-white border-opacity-40 text-gray-500 hover:text-gray-950 shadow-2xl flex items-center justify-center rounded-full dark:bg-gray-950 dark:bg-opacity-50 dark:text-gray-50 dark:border dark:border-gray-800"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
