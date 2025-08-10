"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="z-50 backdrop-blur-md bg-black md:bg-opacity-70 bg-opacity-50 fixed lg:w-[940px] mx-8 w-[90%] flex border-2 border-gray-600 rounded-[27px] md:rounded-full justify-between py-2 px-3 mt-8 flex-col ">
            <div className="flex justify-between">
                <Image src={Logo} alt="Logo" className="w-38" />
                <ul className="lg:flex justify-evenly items-center hidden">
                    {navLinks.map((link, index) => {
                        return (
                            <a href={link.href}>
                                <li key={index} className="mx-5">
                                    {link.label}
                                </li>
                            </a>
                        );
                    })}
                </ul>
                <div className="md:flex hidden">
                    <button className="text-white border-2 border-white font-semibold py-3 px-6 rounded-full mr-4">
                        Log In
                    </button>
                    <button className="bg-[#a3e635] text-black font-semibold py-3 px-7 rounded-full">
                        Sign Up
                    </button>
                </div>
                <div
                    onClick={() => setToggle(!toggle)}
                    className="flex flex-col justify-center items-center md:hidden"
                >
                    <motion.div
                        transition={{ duration: 0.07 }}
                        animate={
                            toggle ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                        }
                        className="h-1 w-7 bg-white rounded-full my-[2px] mr-2"
                    ></motion.div>
                    <motion.div
                        transition={{ duration: 0.07 }}
                        animate={toggle ? { opacity: 0 } : { opacity: 1 }}
                        className="h-1 w-7 bg-white rounded-full my-[2px] mr-2"
                    ></motion.div>
                    <motion.div
                        transition={{ duration: 0.07 }}
                        animate={
                            toggle
                                ? { rotate: -45, y: -8 }
                                : { rotate: 0, y: 0 }
                        }
                        className="h-1 w-7 bg-white rounded-full my-[2px] mr-2"
                    ></motion.div>
                </div>
            </div>

            <div className="md:hidden flex justify-center flex-col items-center">
                <AnimatePresence>
                    {toggle && (
                        <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className={
                                toggle
                                    ? "lg:flex flex-col justify-evenly items-center "
                                    : "lg:flex flex-col justify-evenly items-center hidden"
                            }
                        >
                            {navLinks.map((link, index) => {
                                return (
                                    <a href={link.href}>
                                        <li
                                            key={index}
                                            className="my-5 text-center"
                                        >
                                            {link.label}
                                        </li>
                                    </a>
                                );
                            })}
                        </motion.ul>
                    )}
                    {toggle && (
                        <motion.div
                         initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                         className="md:hidden flex flex-col">
                            <button className="text-white border-2 border-white font-semibold py-3 px-6 rounded-full">
                                Log In
                            </button>
                            <button className="bg-[#a3e635] text-black font-semibold py-3 px-7 rounded-full my-3">
                                Sign Up
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
