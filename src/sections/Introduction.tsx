"use client";

import Toptag from "@/components/Toptag";
import { useScroll } from "framer-motion";
import { useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0,1], [0, words.length])

    useEffect(
        wordIndex.on('change', (latest) => {
            setCurrentWord(latest);
        })
        ,[wordIndex]);


    return (
        <section className="py-24">
            <div className="container">
                <div className="sticky top-10 md:top-28 lg:top-32">
                    <Toptag text=" INTRODUCING LAYERS" />
                    <div>
                        <p className="text-center font-medium lg:text-7xl text-4xl md:text-5xl overflow-x-clip">
                            <span className="">
                                Your creative process deserves better.
                            </span>
                            <span className="pl-3">
                                {words.map((link, index) => {
                                    return(
                                        <span key={index} className={twMerge("transition duration-500 text-white/15", (index < currentWord)?"text-white":"")}>
                                            {`${link} `}
                                        </span>
                                    );
                                })}
                            </span>
                            <span className="block text-[#a3e635]">
                                That&apos;s why we build Layers
                            </span>
                        </p>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
