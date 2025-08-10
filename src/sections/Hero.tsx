"use client";

import Floaty1 from "@/assets/images/design-example-1.png";
import Floaty2 from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="overflow-x-hidden container md:px-[4rem] px-[1rem]  mt-48 md:mt-16 font-semibold ">
            <motion.div
                className="lg:inline hidden absolute z-40 pointer-events-none"
                transition={{ ease: "easeInOut", delay: 0, duration: 3 }}
                initial={{ x: 75, y: 200 }} // coords for box 1 starter
                animate={{ x: [75, -70, 75, 200], y: [200, 300, 200, 100] }} // coords for box 1 final
            >
                <Pointer name="izaan" color="red" />
            </motion.div>
            <motion.div
                className="lg:inline hidden absolute z-40 pointer-events-none"
                transition={{ ease: "easeInOut", delay: 1.5, duration: 3 }}
                initial={{ x:900 , y: 300 }} // coords for box 1 starter
                animate={{ x: [ 900,1215, 1015, 860] , y: [ 300 ,350, 140, 200]  }} // coords for box 1 final
            >
                <Pointer name="khan" />
            </motion.div>
            <motion.div
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                }}
                initial={{
                    x: -160,
                    y: 300,
                }}
                animate={{
                    x: -20,
                    y: 200,
                }}
                drag
                dragElastic={0.2}
                dragConstraints={{
                    left: -200,
                    right: 1250,
                    top: -300,
                    bottom: 300,
                }}
                className="lg:inline hidden absolute top-10 left-10 z-10"
            >
                <Image
                    src={Floaty1}
                    alt="floaty-1"
                    width={310}
                    height={439}
                    className="pointer-events-none"
                />
            </motion.div>

            <motion.div
                drag
                dragElastic={0.2}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 2.5,
                }}
                initial={{
                    x: 360,
                    y: 300,
                }}
                animate={{
                    x: 160,
                    y: 90,
                }}
                dragConstraints={{
                    left: -1300,
                    right: 350,
                    top: -500,
                    bottom: 500,
                }}
                className="lg:inline hidden absolute top-20 right-10 z-10"
            >
                <Image
                    src={Floaty2}
                    alt="floaty-2"
                    width={432}
                    height={564}
                    className="pointer-events-none"
                />
            </motion.div>

            <div className="flex flex-col h-screen justify-center items-center">
                <div className="py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-black font-semibold">
                    ✨ $7.5 million seed round raised
                </div>
                <h1 className="text-7xl lg:text-8xl text-center my-4">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-gray-500 text-xl font-normal max-w-[800px] my-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatum sequi vitae, vero eos odit ipsam ullam non
                    delectus autem dicta!
                </p>
                <div className="border-gray-700 rounded-full px-2 md:w-full w-600px md:max-w-[500px] border-2 flex justify-between my-6 py-2">
                    <input
                        className="outline-none focus:outline-none ml-3 bg-transparent font-normal md:w-auto w-[180px] "
                        type="email"
                        placeholder="Enter your email"
                    />
                    <button className="bg-[#a3e635] text-black font-semibold py-2 md:py-3 px-5 rounded-full ">
                        Sign Up
                    </button>
                </div>
            </div>
        </section>
    );
}
