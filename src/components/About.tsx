"use client"

import Image from "next/image"
import ai2 from "../../public/ai2.jpeg"
import { Code, Palette, User, Zap } from "lucide-react"
import { motion } from "framer-motion"

interface AboutCardsType {
  icon: React.ReactNode,
  title: string,
  description: string,
}
const aboutCards: AboutCardsType[] = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Modern Design",
    description: "Creating visually stunning interfaces with attention to detail"
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "Mentorship",
    description: "Mentoring students in frontend web development technologies"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance",
    description: "Optimizing for speed and exceptional user experience"
  }
]

const About = () => {
  return (
    <div id="about" className="relative bg-[#05050A] overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(62,224,207,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(62,224,207,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-1/4 -left-32 bg-[#3EE0CF] h-96 w-96 opacity-5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-32 bg-purple-500 h-96 w-96 opacity-5 blur-[120px] rounded-full" />
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
            <span className="text-[#3EE0CF] text-sm sm:text-base font-semibold uppercase tracking-[0.2em] relative">
              Get To Know
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#3EE0CF] to-transparent"></div>
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
            About Me
          </h1>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 sm:gap-16 lg:gap-20 max-w-7xl mx-auto">
          
          {/* Image Section */}
          <motion.div 
            className="shrink-0 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Animated Rings using framer-motion */}
              <motion.div 
                className="absolute -inset-6 rounded-full border-2 border-[#3EE0CF]/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute -inset-12 rounded-full border-2 border-purple-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-[#3EE0CF]/20 to-purple-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Image Container */}
              <div className="relative rounded-full overflow-hidden border-4 border-gray-800/50 shadow-2xl shadow-[#3EE0CF]/20">
                <Image
                  src={ai2}
                  alt="Arooj Zahra - Frontend Developer"
                  width={300}
                  height={300}
                  className="rounded-full w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-br from-[#3EE0CF]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="lg:pl-8 max-w-3xl">
            
            {/* Title */}
            <motion.h2 
              className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white text-center lg:text-start leading-tight mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Frontend Developer &{' '}
              <span className="bg-linear-to-r from-[#3EE0CF] via-sky-400 to-purple-500 text-transparent bg-clip-text">
                Trainer
              </span>
            </motion.h2>
            
            {/* Description */}
            <motion.div 
              className="space-y-5 mb-8 text-center lg:text-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I&apos;m a <span className="text-white font-semibold">Frontend Web Developer and Trainer</span> with over <span className="text-[#3EE0CF] font-semibold">2 years of experience</span> in building responsive, user-friendly websites and training students in modern frontend technologies.
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                With strong hands-on expertise in <span className="text-gray-200">HTML, CSS, JavaScript, WordPress, React, and UI tools like Figma</span>, I&apos;m passionate about clean code, modern design, and continuous learning.
              </p>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutCards.map((card, index) => (
                <motion.div 
                  key={index} 
                  className="group relative bg-linear-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800/50 p-5 transition-all duration-300 hover:border-[#3EE0CF]/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3EE0CF]/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-[#3EE0CF]/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-start gap-4">
                    <div className="shrink-0 bg-linear-to-br from-[#3EE0CF] to-sky-400 p-3 rounded-lg shadow-lg shadow-[#3EE0CF]/20 group-hover:shadow-[#3EE0CF]/40 group-hover:scale-110 transition-all duration-300">
                      <div className="text-black">
                        {card.icon}
                      </div>
                    </div>
                    
                    <div className="text-left flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-[#3EE0CF] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <motion.div 
              className="mt-10 pt-8 border-t border-gray-800/50 flex flex-wrap justify-center lg:justify-start gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-[#3EE0CF] to-sky-400 text-transparent bg-clip-text">2+</div>
                <div className="text-gray-400 text-sm sm:text-base mt-1">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-[#3EE0CF] to-sky-400 text-transparent bg-clip-text">50+</div>
                <div className="text-gray-400 text-sm sm:text-base mt-1">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-[#3EE0CF] to-sky-400 text-transparent bg-clip-text">100+</div>
                <div className="text-gray-400 text-sm sm:text-base mt-1">Students Trained</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About