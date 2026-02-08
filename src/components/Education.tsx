"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, BookOpen, School } from "lucide-react"

interface Education {
  degree: string
  institution: string
  location: string
  icon: string
}

const education: Education[] = [
  {
    degree: "M.Ed (Computer Science)",
    institution: "Allama Iqbal Open University",
    location: "Islamabad",
    icon: '🎓',
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "University of Agriculture",
    location: "Faisalabad",
    icon: '💻',
  },
  {
    degree: "Intermediate",
    institution: "Shiblee College for Women",
    location: "Faisalabad",
    icon: '📚',
  },
  {
    degree: "Matriculation",
    institution: "Divisional Public School",
    location: "Faisalabad",
    icon: '🏫',
},
]

const Education = () => {
  return (
    <div id="education" className="relative bg-[#05050A] overflow-hidden">
      
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

      <div className="relative z-10 text-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-20">
        
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
              Academic Background
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
            Education
          </h1>
        </motion.div>

        {/* Education Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="group relative bg-[#0a1020] border border-gray-800/50 rounded-2xl p-6 hover:border-[#3EE0CF]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              
              {/* Content */}
              <div className="flex items-start gap-5">
                
                {/* Icon */}
                <div className={`shrink-0 w-16 h-16 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 text-2xl bg-[#3EE0CF]/20`}>
                  {edu.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 group-hover:text-[#3EE0CF] transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-[#3EE0CF] text-base sm:text-lg font-semibold mb-3">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3EE0CF]/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Education