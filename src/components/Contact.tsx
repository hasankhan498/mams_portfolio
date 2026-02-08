"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div id="contact" className="relative bg-[#0a1020] overflow-hidden">
      
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

      <div className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <span className="text-[#3EE0CF] text-sm sm:text-base font-semibold uppercase tracking-[0.2em]">
              Let&apos;s Connect
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
            Get In Touch
          </h1>
        </motion.div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side - Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            
            {/* Intro Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl text-white font-bold mb-4">
                Let&apos;s work <span className="bg-linear-to-br from-[#3EE0CF] via-sky-500 to-purple-500 text-transparent bg-clip-text">together</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                I&apos;m always excited to take on new projects and collaborate with amazing people. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              
              {/* Email */}
              <div className="flex items-center gap-4 bg-[#0f1623] border border-gray-800/50 rounded-xl p-5 hover:border-[#3EE0CF]/50 transition-all">
                <div className="flex-shrink-0 bg-[#3EE0CF]/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#3EE0CF]" />
                </div>
                <div className="text-left">
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a href="mailto:hello@aroojzahra.com" className="text-white text-lg font-semibold hover:text-[#3EE0CF] transition-colors">
                    zarooj62@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 bg-[#0f1623] border border-gray-800/50 rounded-xl p-5 hover:border-[#3EE0CF]/50 transition-all">
                <div className="flex-shrink-0 bg-[#3EE0CF]/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#3EE0CF]" />
                </div>
                <div className="text-left">
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white text-lg font-semibold">Lahore, Pakistan</p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Find me on</p>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0f1623] border border-gray-800/50 p-4 rounded-lg hover:border-[#3EE0CF]/50 hover:bg-[#3EE0CF]/10 transition-all group"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-[#3EE0CF] transition-colors" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0f1623] border border-gray-800/50 p-4 rounded-lg hover:border-[#3EE0CF]/50 hover:bg-[#3EE0CF]/10 transition-all group"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-[#3EE0CF] transition-colors" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-[#0f1623] border border-gray-800/50 rounded-2xl p-8 space-y-6">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-white text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-[#1a2332] border border-gray-700/50 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#3EE0CF]/50 focus:ring-1 focus:ring-[#3EE0CF]/50 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-[#1a2332] border border-gray-700/50 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#3EE0CF]/50 focus:ring-1 focus:ring-[#3EE0CF]/50 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="text-white text-sm font-medium mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full bg-[#1a2332] border border-gray-700/50 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#3EE0CF]/50 focus:ring-1 focus:ring-[#3EE0CF]/50 transition-all"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-white text-sm font-medium mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full bg-[#1a2332] border border-gray-700/50 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#3EE0CF]/50 focus:ring-1 focus:ring-[#3EE0CF]/50 transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#3EE0CF] hover:bg-[#35c9ba] text-black font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-[#3EE0CF]/50"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default Contact