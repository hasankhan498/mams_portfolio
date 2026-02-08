"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

interface NavMenuType {
  menu: string
  link: string
}

const navMenu: NavMenuType[] = [
  { menu: "About", link: "#about" },
  { menu: "Skills", link: "#skills" },
  { menu: "Experience", link: "#experience" },
  { menu: "Projects", link: "#projects" },
  { menu: "Education", link: "#education" },
  { menu: "Contact", link: "#contact" },
]

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollAnimation = () => {
    setScroll(window.scrollY > 20)
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimation)
    return () => window.removeEventListener("scroll", scrollAnimation)
  }, [])

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* NAV WRAPPER */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scroll ? "bg-black/10 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        {/* CENTERED CONTAINER */}
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2">
          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-[#3EE0CF] via-indigo-500 to-purple-500 text-transparent bg-clip-text"
          style={{fontFamily:'var(--font-heading)'}}>
            SAZ
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navMenu.map((navlink, idx) => (
                <li key={idx}>
                  <Link
                    className="text-white/70 text-lg hover:text-[#3EE0CF] hover:font-semibold hover:-translate-y-1 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-0 hover:after:w-full after:bg-[#3EE0CF] after:transition-all transition-all cursor-pointer"
                    href={navlink.link}
                  >
                    {navlink.menu}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              className="p-2 bg-[#3EE0CF] shadow-md text-black font-medium hover:shadow-lg transition-all rounded-md cursor-pointer"
              href="#hirebtn"
            >
              Hire me
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white/70 hover:text-[#3EE0CF] transition-all p-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[56px] left-0 w-full bg-white/15 backdrop-blur-md z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {navMenu.map((navlink, idx) => (
            <li key={idx}>
              <Link
                className="text-white/70 text-lg hover:text-[#3EE0CF] hover:font-semibold transition-all cursor-pointer"
                href={navlink.link}
                onClick={handleLinkClick}
              >
                {navlink.menu}
              </Link>
            </li>
          ))}

          <li>
            <Link
              className="p-2 px-6 bg-[#3EE0CF] shadow-md text-black font-medium hover:shadow-lg transition-all rounded-md cursor-pointer"
              href="#hirebtn"
              onClick={handleLinkClick}
            >
              Hire me
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
