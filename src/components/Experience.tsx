"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Calendar } from "lucide-react"

interface Experience {
  title: string
  company: string
  location: string
  date: string
  current?: boolean
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    title: "Frontend Web Developer & Trainer",
    company: "Aptech Computer Education",
    location: "Lahore",
    date: "October 2023 – Present",
    current: true,
    responsibilities: [
      "Train students in frontend web development technologies",
      "Develop and maintain responsive web interfaces",
      "Guide students on real-world projects and best practices",
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "Immaculate Limo",
    location: "Lahore, Pakistan",
    date: "Jun 2023 – Aug 2023",
    responsibilities: [
      "Developed WordPress-based websites",
      "Customized themes and layouts",
      "Improved website performance and UI",
    ],
  },
  {
    title: "Junior Frontend UI Developer",
    company: "Devsurge",
    location: "Lahore, Pakistan",
    date: "Aug 2022 – Mar 2023",
    responsibilities: [
      "Designed and implemented UI components",
      "Converted Figma designs into responsive web pages",
      "Collaborated with development teams",
    ],
  },
  {
    title: "Frontend Developer Internee",
    company: "Invozone",
    location: "Lahore, Pakistan",
    date: "Nov 2021 – Mar 2022",
    responsibilities: [
      "Assisted senior developers with frontend tasks",
      "Learned industry-standard workflows and tools",
    ],
  },
]

const Experience = () => {
  return (
    <div id="experience" className="relative bg-[#05050A] overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(62,224,207,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(62,224,207,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 text-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        
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
              My Journey
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
            Work Experience
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#3EE0CF]/20 via-[#3EE0CF]/50 to-[#3EE0CF]/20"></div>

          {/* Experience Cards */}
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                
                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-[#0f1623] border border-gray-800/50 rounded-xl p-6 hover:border-[#3EE0CF]/50 transition-all duration-300 group">
                    
                    {/* Header */}
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                      <div className="flex-shrink-0 bg-[#3EE0CF]/10 p-3 rounded-lg group-hover:bg-[#3EE0CF]/20 transition-colors">
                        <Briefcase className="w-6 h-6 text-[#3EE0CF]" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-[#3EE0CF] font-semibold mb-2">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Date & Location */}
                    <div className={`flex flex-wrap gap-4 mb-4 text-sm text-gray-400 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className={`space-y-2 text-gray-300 text-sm sm:text-base ${index % 2 === 0 ? "md:text-right" : "text-left"}`}>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className={`text-[#3EE0CF] mt-1.5 ${index % 2 === 0 ? "md:order-2" : ""}`}>•</span>
                          <span className="flex-1">{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Current Working Badge */}
                    {exp.current && (
                      <div className={`mt-4 ${index % 2 === 0 ? "md:flex md:justify-end" : ""}`}>
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#3EE0CF]/10 border border-[#3EE0CF]/30 text-[#3EE0CF] rounded-full text-xs font-semibold">
                          <span className="w-2 h-2 bg-[#3EE0CF] rounded-full animate-pulse"></span>
                          Currently Working
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block relative z-10">
                  <motion.div
                    className="w-4 h-4 bg-[#3EE0CF] rounded-full shadow-lg shadow-[#3EE0CF]/50"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-[#3EE0CF] rounded-full animate-ping opacity-75"></div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-[calc(50%-2rem)]"></div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Experience