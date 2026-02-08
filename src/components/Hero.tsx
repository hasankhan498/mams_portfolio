"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react";

interface Icon {
    name: string;
    icon: React.ReactNode;
    url: string;
}

const icons:Icon[] = [
    {
        name: "GitHub",
        icon: <Github size={20} />,
        url: "/",
    },
    {
        name: "LinkedIn",
        icon: <Linkedin size={20} />,
        url: "/",
    },
    {
        name: "Twitter",
        icon: <Twitter size={20} />,
        url: "/",
    },
]

export default function PortfolioBackground() {
    return (
        <div className="relative min-h-screen bg-[#05050A] text-white overflow-hidden">

            <div className="absolute inset-0">

                {/* Grid */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
                        backgroundSize: "100px 100px",
                    }}
                />

                {/* Dots Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                    }}
                />

                {/* Glow Gradient */}
                <div className="absolute top-1/4 left-1/4 bg-[#3EE0CF] h-60 w-60 md:h-80 md:w-80 opacity-10 blur-3xl rounded-full animate-pulse" />

                {/* Additional Glow */}
                <div className="absolute top-1/4 right-1/4 bg-[#f06bff] h-60 w-60 md:h-80 md:w-80 opacity-10 blur-3xl rounded-full animate-pulse" />

            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-20">

                {/* Availability Badge */}
                <div className="px-4 py-2 rounded-3xl flex items-center gap-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 mb-8 hover:border-[#3EE0CF]/50 transition-all">
                    <span className="h-3 w-3 bg-[#3EE0CF] rounded-full animate-pulse shadow-lg shadow-[#3EE0CF]/50" />
                    <h4 className="text-white/70 text-sm sm:text-base">Available for opportunities</h4>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 px-4">
                    Hi, I&apos;m <span className="bg-gradient-to-br from-[#3EE0CF] via-sky-500 to-purple-500 text-transparent bg-clip-text"
                        style={{ fontFamily: 'var(--font-heading)' }}>Arooj Zahra</span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-white/70 text-xl sm:text-2xl md:text-3xl py-2 sm:py-4">Front End Web Developer</h2>

                {/* Description */}
                <p className="text-white/70 text-base sm:text-lg md:text-xl pb-3 max-w-xl lg:max-w-2xl px-4">
                    Crafting beautiful, responsive web experiences with 2+ years of expertise in modern frontend technologies. Passionate about clean code and exceptional UI/UX.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center items-center w-full sm:w-auto px-4">
                    <Link href="/contact" className="w-full sm:w-auto px-6 py-3 bg-[#3EE0CF] text-black rounded-md font-medium shadow-lg hover:shadow-[#3EE0CF]/50 hover:scale-105 transition-all">
                        View My Work
                    </Link>
                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        className="w-full sm:w-auto relative px-6 py-3 bg-gray-800/50 border border-gray-700 text-white rounded-md font-medium overflow-hidden group transition-all hover:border-[#3EE0CF]"
                    >
                        {/* Gradient hover overlay */}
                        <span className="absolute inset-0 bg-gradient-to-r from-[#3EE0CF] via-sky-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>

                        {/* Button text */}
                        <span className="relative z-10">Get In Touch</span>
                    </Link>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-8 sm:mt-10 justify-center">
                    {icons.map((icon) => (
                        <Link 
                            key={icon.name} 
                            href={icon.url} 
                            target="_blank" 
                            className="text-white/70 hover:text-[#3EE0CF] transition-all bg-gray-800/50 p-3 rounded-full ring-2 ring-gray-700/50 hover:ring-[#3EE0CF] hover:scale-110 hover:shadow-lg hover:shadow-[#3EE0CF]/30"
                        >
                            {icon.icon}
                        </Link>
                    ))}
                </div>

                {/* Scroll Down Arrow */}
                <ArrowDown size={30} className="animate-bounce mt-10 sm:mt-12 text-white/50 hover:text-[#3EE0CF] cursor-pointer transition-colors mb-10" />
            </div>
        </div>
    );
}