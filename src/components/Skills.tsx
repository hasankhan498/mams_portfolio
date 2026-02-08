"use client"

import { motion } from "framer-motion"

interface Skill {
    name: string
    category: string
    percentage: number
}

const skills: Skill[] = [
    { name: "HTML5", category: "Frontend", percentage: 95 },
    { name: "CSS3", category: "Frontend", percentage: 95 },
    { name: "JavaScript", category: "Frontend", percentage: 85 },
    { name: "React.js", category: "Frontend", percentage: 80 },
    { name: "WordPress", category: "CMS", percentage: 90 },
    { name: "Bootstrap 5", category: "Framework", percentage: 90 },
    { name: "Figma", category: "Design", percentage: 85 },
    { name: "Canva", category: "Design", percentage: 80 },
]

const additionalSkills = [
    "Responsive Design",
    "UI/UX",
    "Git",
    "REST APIs",
    "Theme Customization",
    "Performance Optimization",
    "Cross-browser Testing",
    "Agile",
]

const Skills = () => {
    return (
        <div id="skills" className="relative bg-[#010811] overflow-hidden">

            {/* Background Effects */}
            <div className="absolue inset-0 bg-black" />

            <div className="relative z-10 text-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    className="mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block mb-4">
                        <span className="text-[#3EE0CF] text-sm sm:text-base font-semibold uppercase tracking-[0.2em]">
                            What I Know
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
                        My Skills
                    </h1>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#0f1623] border border-gray-800/50 rounded-xl p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="text-white text-lg sm:text-xl font-bold text-left">
                                        {skill.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm text-left">{skill.category}</p>
                                </div>
                                <span className="text-[#3EE0CF] text-xl sm:text-2xl font-bold">
                                    {skill.percentage}%
                                </span>
                            </div>

                            {/* Progress Bar Background */}
                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                {/* Progress Bar Fill with Gradient */}
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{
                                        background: "linear-gradient(to right, #3EE0CF, #818CF8, #C084FC)",
                                    }}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.percentage}%` }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Also Experienced With Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-3xl text-white font-bold mb-8">
                        Also Experienced With
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
                        {additionalSkills.map((skill, index) => (
                            <motion.span
                                key={index}
                                className="px-5 py-2.5 bg-[#0f1623] border border-gray-800/50 text-gray-300 rounded-full text-sm sm:text-base hover:border-[#3EE0CF]/50 hover:text-[#3EE0CF] transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Skills