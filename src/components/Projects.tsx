"use client"

import { motion } from "framer-motion"
import { Globe, ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  tech: string
  link: string
  gradient: string
}

const projects: Project[] = [
  {
    title: "Uzair Finacct",
    description: "Professional financial services website with modern design and user-friendly navigation.",
    tech: "WordPress",
    link: "#",
    gradient: "from-[#4A90E2] to-[#50E3C2]",
  },
  {
    title: "Travel Miles Online",
    description: "Travel booking platform with comprehensive services and seamless user experience.",
    tech: "WordPress",
    link: "#",
    gradient: "from-[#F5A623] to-[#F8E71C]",
  },
  {
    title: "Techneeds Solution",
    description: "Tech solutions company website showcasing services and portfolio.",
    tech: "WordPress",
    link: "#",
    gradient: "from-[#BD10E0] to-[#E94B8B]",
  },
  {
    title: "Immaculate Limo",
    description: "Luxury limousine service website with elegant design and booking functionality.",
    tech: "WordPress",
    link: "#",
    gradient: "from-[#4A5568] to-[#2D3748]",
  },
  {
    title: "Matchless Logistics",
    description: "Logistics company website with service information and contact features.",
    tech: "WordPress",
    link: "#",
    gradient: "from-[#10B981] to-[#34D399]",
  },
  {
    title: "Prodigilog",
    description: "Professional business website with modern aesthetics and clear messaging.",
    tech: "WordPress",
    link: "#",
    gradient: "from-[#6366F1] to-[#8B5CF6]",
  },
]

const Projects = () => {
  return (
    <div id="projects" className="relative bg-[#0a0f1a] overflow-hidden">
      
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

      <div className="relative z-10 text-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
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
              What I&apos;ve Built
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
            Featured Projects
          </h1>
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-[#0f1623] border border-gray-800/50 rounded-xl overflow-hidden hover:border-[#3EE0CF]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} p-6 flex items-start justify-between`}>
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-3 text-left group-hover:text-[#3EE0CF] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 text-left leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#3EE0CF]/10 border border-[#3EE0CF]/30 text-[#3EE0CF] rounded-full text-xs font-semibold">
                    {project.tech}
                  </span>

                  {/* Visit Website Link */}
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-[#3EE0CF] transition-colors text-sm group/link"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3EE0CF]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button (Optional) */}
        {/* <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#3EE0CF] to-sky-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#3EE0CF]/50 hover:scale-105 transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div> */}

      </div>
    </div>
  )
}

export default Projects