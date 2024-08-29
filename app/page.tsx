'use client'
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Database, Globe, Menu, X, Users, Lightbulb, Target, Mail, Phone, MapPin, Cpu, Cloud, Shield } from "lucide-react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigateTo = (page: string) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-700 via-blue-800 to-teal-500 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center relative z-50">
        <a className="flex items-center justify-center" href="#" onClick={() => navigateTo('home')}>
          <span className="font-bold text-2xl tracking-tighter">ID</span>
          <span className="sr-only">Idea Datamatics</span>
        </a>
        <button 
          className="ml-auto lg:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <nav className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          lg:flex absolute lg:relative top-14 lg:top-0 left-0 right-0 
          bg-purple-900 lg:bg-transparent flex-col lg:flex-row 
          gap-4 p-4 lg:p-0 lg:ml-auto
          transition-all duration-300 ease-in-out
        `}>
          <a className="text-sm font-medium hover:text-teal-300 transition-colors" href="#" onClick={() => navigateTo('home')}>
            Home
          </a>
          <a className="text-sm font-medium hover:text-teal-300 transition-colors" href="#" onClick={() => navigateTo('about')}>
            About Us
          </a>
          <a className="text-sm font-medium hover:text-teal-300 transition-colors" href="#" onClick={() => navigateTo('services')}>
            Services
          </a>
          <a className="text-sm font-medium hover:text-teal-300 transition-colors" href="#" onClick={() => navigateTo('contact')}>
            Contact Us
          </a>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">Get Started</Button>
        </nav>
      </header>

      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
              <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300">
                    Transform Your Data
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Unlock the power of your information with Idea Datamatics. We turn complex data into clear, actionable insights.
                  </p>
                  <div className="space-y-4">
                    <Button className="bg-white text-purple-700 hover:bg-teal-300 hover:text-purple-900 transition-colors" onClick={() => navigateTo('services')}>
                      Explore Services
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full blur-3xl opacity-30"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl">
                    <p className="text-2xl font-bold text-center">Innovative Data Solutions</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-white/10 backdrop-blur-md">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Our Innovative Solutions</h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { icon: Database, title: "Data Management", description: "Optimize your data storage and accessibility" },
                    { icon: Globe, title: "Global Integration", description: "Seamlessly connect and analyze worldwide data sources" },
                    { icon: Cpu, title: "Advanced Analytics", description: "Leverage AI and machine learning for deeper insights" }
                  ].map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg p-6 bg-gradient-to-br from-purple-900 to-blue-800 transition-transform hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <item.icon className="w-12 h-12 mb-4 text-teal-300" />
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === 'about' && (
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300 mb-8">
                About Idea Datamatics
              </h1>
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <p className="text-xl text-gray-200">
                    Idea Datamatics is at the forefront of data analytics and management. We believe in the power of data to transform businesses and drive innovation.
                  </p>
                  <p className="text-xl text-gray-200">
                    Our team of experts combines cutting-edge technology with deep industry knowledge to deliver insights that matter.
                  </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  {[
                    { icon: Users, title: "Expert Team", description: "Skilled professionals dedicated to your success" },
                    { icon: Lightbulb, title: "Innovative Solutions", description: "Cutting-edge approaches to data challenges" },
                    { icon: Globe, title: "Global Reach", description: "Serving clients worldwide with local expertise" },
                    { icon: Target, title: "Focused Results", description: "Delivering actionable insights for your business" }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="rounded-full bg-purple-600 p-3 mb-4">
                        <item.icon className="w-6 h-6 text-teal-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {currentPage === 'services' && (
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300 mb-8">
                Our Services
              </h1>
              <p className="text-xl text-gray-200 mb-12">
                Discover how Idea Datamatics can transform your business with our comprehensive suite of data services.
              </p>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Database, title: "Data Management", description: "Optimize your data storage and accessibility with our cutting-edge management solutions, ensuring data integrity and easy retrieval." },
                  { icon: Globe, title: "Global Integration", description: "Seamlessly connect and analyze data from diverse sources worldwide, providing a comprehensive view of your global operations." },
                  { icon: Cpu, title: "Advanced Analytics", description: "Leverage the power of AI and machine learning to automate processes and uncover hidden patterns in your data." },
                  { icon: Cloud, title: "Cloud Data Services", description: "Utilize cloud technologies for scalable, secure, and flexible data storage and processing capabilities." },
                  { icon: Shield, title: "Data Security & Compliance", description: "Protect your valuable information with our robust security measures and ensure compliance with global data regulations." },
                  { icon: Lightbulb, title: "Innovative Solutions", description: "Develop custom data solutions tailored to your unique business challenges and opportunities." }
                ].map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
                    <service.icon className="w-12 h-12 mb-4 text-teal-300" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {currentPage === 'contact' && (
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300 mb-8">
                Contact Us
              </h1>
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <p className="text-xl text-gray-200">
                    We&aposre here to help you unlock the full potential of your data. Get in touch with us for any inquiries or to schedule a consultation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-6 h-6 text-teal-300" />
                      <span className="text-gray-200">info@ideadatamatics.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-teal-300" />
                      <span className="text-gray-200">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-teal-300" />
                      <span className="text-gray-200">123 Data Street, Analytics City, 12345</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl">
                  <form className="space-y-4">
                    <Input className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" placeholder="Your Name" type="text" />
                    <Input className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" placeholder="Your Email" type="email" />
                    <Textarea className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" placeholder="Your Message" rows={4} />
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Send Message</Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Revolutionize Your Data Strategy?</h2>
                <p className="text-gray-200">Join the ranks of forward-thinking companies that have transformed their operations with our cutting-edge data solutions.</p>
              </div>
              <div className="lg:w-1/2">
                <form className="space-y-4">
                  <Input className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" placeholder="Your Email" type="email" />
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Get a Free Consultation</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 w-full px-4 md:px-6 border-t border-white/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">© 2023 Idea Datamatics. Transforming data, empowering decisions.</p>
          <nav className="flex gap-4">
            <a className="text-sm text-gray-300 hover:text-teal-300 transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-sm text-gray-300 hover:text-teal-300 transition-colors" href="#">
              Terms of Service
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
