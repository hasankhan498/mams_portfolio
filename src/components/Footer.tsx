"use client"

import { Heart } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const bottomLinks = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' }
]

const Footer = () => {
  return (
    <footer className="bg-[#021528] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          
          {/* Logo */}
          <motion.span 
            className="bg-gradient-to-br from-[#3EE0CF] via-sky-500 to-purple-500 text-transparent bg-clip-text text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            SAZ
          </motion.span>

          {/* Copyright */}
          <motion.p 
            className="text-gray-400 text-sm flex items-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Arooj Zahra. Made with{' '}
            <Heart className="inline w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            {' '}by MHK
          </motion.p>

          {/* Links */}
          <motion.ul 
            className="flex justify-center items-center gap-6 text-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {bottomLinks.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.link} 
                  className="text-gray-400 hover:text-[#3EE0CF] cursor-pointer transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          
          {/* Logo */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-br from-[#3EE0CF] via-sky-500 to-purple-500 text-transparent bg-clip-text text-3xl font-bold">
              SAZ
            </span>
          </motion.div>

          {/* Links */}
          <motion.ul 
            className="flex justify-center items-center gap-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {bottomLinks.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.link} 
                  className="text-gray-400 hover:text-[#3EE0CF] cursor-pointer transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>

          {/* Copyright */}
          <motion.p 
            className="text-gray-400 text-sm text-center flex items-center justify-center gap-1 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Arooj Zahra.
            <span className="flex items-center gap-1">
              Made with <Heart className="inline w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by MHK
            </span>
          </motion.p>

        </div>

      </div>
    </footer>
  )
}

export default Footer