"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Book, Award, Users, Calendar, ChevronRight, Github, Linkedin, Download, Sparkles } from 'lucide-react';

const HaoxinPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigationItems = [
    { id: 'about', label: 'About', icon: '👋' },
    { id: 'work', label: 'Work Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  const projects = [
    {
      title: "Swift UI Business Portal (iOS)",
      description: "Designed and built a secure iOS business portal for Southern California Edison (SCE) using SwiftUI. Integrated Azure AD authentication and real-time Dynatrace monitoring to reduce app crashes by 35% and eliminate unauthorized access.",
      date: "2024-10-01 – 2025-07-31",
      technologies: ["SwiftUI", "iOS", "Azure AD", "Dynatrace", "SharePoint", "Push Notifications"],
      impact: "35% crash reduction, 200% faster document retrieval",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Company Application Installation Platform",
      description: "Architected and launched a cloud-based SaaS platform on Azure for Southern California Edison (SCE), enabling secure company software distribution with 99.9% uptime.",
      date: "2024-01-01 – 2024-09-30",
      technologies: ["Azure", "SaaS", "Web GUI", "Automation", "Analytics", "Cybersecurity"],
      impact: "99.9% uptime, 60% faster deployment",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "3D Reconstruction on Robots View",
      description: "Developed a 3D image registration pipeline using 100 different datasets, estimating fundamental matrices and enabling sparse 3D reconstruction from feature correspondences.",
      date: "2024-09-01 – 2024-12-31",
      technologies: ["OpenCV", "Ceres", "SciPy", "GTSAM", "g2opy", "3D Reconstruction"],
      impact: "100 datasets processed, improved accuracy",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Three-Link Robot Modeling and Control",
      description: "Modeled a simplified three-link bipedal robot, focusing on single-support phase dynamics using generalized coordinates with no-slip conditions and instantaneous impacts.",
      date: "2024-01-01 – 2024-05-31",
      technologies: ["Robot Modeling", "Control", "Optimization", "Lagrange", "Nonlinear Control"],
      impact: "Successful gait optimization and control",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "AI Chatbot for SCE.com",
      description: "Developed and deployed an AI-powered chatbot on SCE.com for Southern California Edison (SCE), enabling customers to resolve billing, outage, and support inquiries instantly.",
      date: "2023-05-01 – 2023-12-31",
      technologies: ["AI Chatbot", "GenAI", "Copilot", "API Integration", "NLP", "User Testing"],
      impact: "50% faster response times, 92% accuracy",
      color: "from-violet-500 to-indigo-600"
    },
    {
      title: "Music Transformation Device – Assistive Robotics",
      description: "Designed a music transformation device for deaf people, utilizing advanced stepper motors for precise control and accurate translation of musical rhythms into tactile feedback.",
      date: "2023-09-01 – 2023-12-31",
      technologies: ["Stepper Motors", "Solenoids", "FFT", "Assistive Robotics", "Real-time Signal Processing"],
      impact: "Enhanced accessibility for deaf community",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const news = [
    {
      date: "2025-05-15",
      content: "Officially Graduate from Northeastern University, obtain Master of Electrical and Computer Engineering with Concentration in Computer Vision, Machine Learning, and Algorithms",
      emoji: "🎓"
    }
  ];

  const workExperience = [
    {
      company: "Southern California Edison (SCE)",
      position: "Mobile Application Developer",
      date: "Mar 2023 – June 2025",
      jobResponsibility: [
        "Led the development and enhancement of enterprise mobile applications using Next.js and Node.js, supporting over 2,000 users.",
        "Delivered 10+ major upgrades to improve UI/UX, database performance, and application speed, resulting in higher user acceptance and feature adoption.",
        "Collaborated in Agile, cross-functional teams to deliver projects on schedule and quickly respond to changing business requirements."
      ],
      color: "from-blue-600 to-purple-600"
    },
    {
      company: "Southern California Edison (SCE)",
      position: "Salesforce Engineer",
      date: "Aug 2021 – Feb 2023",
      jobResponsibility: [
        "Managed user administration, security settings, profiles, and workflow automation in Salesforce.",
        "Completed Salesforce Administrator and Platform Developer I certifications, demonstrating proficiency in Salesforce platform management and development."
      ],
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            left: `${20 + i * 20}%`,
            top: `${10 + i * 15}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i}s`
          }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"></div>
        </div>
      ))}
    </div>
  );
  const LINKS = {
  github: "https://github.com/lhx980327", // ← 替换成你的真实用户名
  linkedin: "https://www.linkedin.com/in/haoxinliu98/",
  email: "mailto:lhx980327@gmail.com",
  resume: "/resume.pdf" // 如果你上传在public目录下
};

  const renderSection = () => {
    switch(activeSection) {
      case 'about':
        return (
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-yellow-500 mr-3 animate-pulse" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="relative group">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      <div className="w-44 h-44 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <span className="text-white text-lg font-medium">Haoxin Liu</span>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-6">
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500 hover:border-purple-500 transition-colors duration-300">
                    <p className="text-gray-700 leading-relaxed">
                      I hold a Master of Science in Electrical and Computer Engineering from Northeastern University, where I achieved a cumulative GPA of 3.8/4.00 and completed rigorous coursework in areas such as navigation and sensing, assistive robotics, autonomous robotics, and computer vision.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border-l-4 border-emerald-500 hover:border-teal-500 transition-colors duration-300">
                    <p className="text-gray-700 leading-relaxed">
                      Professionally, I have contributed as a Mobile Application Developer at Southern California Edison (SCE), leading the development of enterprise mobile applications using Next.js and Node.js for over 2,000 users.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-l-4 border-orange-500 hover:border-red-500 transition-colors duration-300">
                    <p className="text-gray-700 leading-relaxed">
                      My dream job is one where I can make a real, lasting contribution to the world and to society. I aspire to create impactful technologies and solutions that improve lives and advance the greater good.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-blue-500 mr-3 animate-bounce" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Recent News</h3>
              </div>
              <div className="space-y-4">
                {news.map((item, index) => (
                  <div key={index} className="group relative overflow-hidden">
                    <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="text-3xl animate-bounce">{item.emoji}</div>
                      <div className="flex-1">
                        <p className="text-sm opacity-90 mb-2">{item.date}</p>
                        <p className="font-medium">{item.content}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'work':
        return (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-emerald-500 mr-3 animate-pulse" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {workExperience.map((work, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <div className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className={`absolute inset-0 bg-gradient-to-r ${work.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-white transition-colors duration-300">{work.company}</h3>
                          <p className="text-lg text-gray-600 mb-2 group-hover:text-white/90 transition-colors duration-300">{work.position}</p>
                          <p className="text-sm text-gray-500 group-hover:text-white/70 transition-colors duration-300">{work.date}</p>
                        </div>
                        <div className="flex space-x-3">
                          <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-all duration-300" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        {work.jobResponsibility.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                            <p className="text-gray-700 leading-relaxed group-hover:text-white/90 transition-colors duration-300">{responsibility}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center mb-8">
              <Book className="w-8 h-8 text-purple-500 mr-3 animate-pulse" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <div className="h-full p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 rounded-2xl`}></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">{project.title}</h3>
                        <div className="flex space-x-2">
                          <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transform hover:scale-110 transition-all duration-300" />
                          <Github className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transform hover:scale-110 transition-all duration-300" />
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">{project.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-white/20 group-hover:text-white transition-all duration-300 transform hover:scale-105">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4 p-3 bg-blue-50 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                        <p className="text-sm font-medium text-blue-800 group-hover:text-white transition-colors duration-300">
                          🎯 {project.impact}
                        </p>
                      </div>
                      
                      <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors duration-300">{project.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center mb-8">
              <Mail className="w-8 h-8 text-blue-500 mr-3 animate-bounce" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get In Touch</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105">
                    <Mail className="w-6 h-6 text-blue-600 group-hover:animate-bounce" />
                    <span className="text-gray-700 font-medium">lhx980327@gmail.com</span>
                  </div>
                  <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 transform hover:scale-105">
                    <Phone className="w-6 h-6 text-emerald-600 group-hover:animate-bounce" />
                    <span className="text-gray-700 font-medium">+1 (909) 215 0465</span>
                  </div>
                  <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl hover:from-orange-100 hover:to-red-100 transition-all duration-300 transform hover:scale-105">
                    <MapPin className="w-6 h-6 text-orange-600 group-hover:animate-bounce" />
                    <span className="text-gray-700 font-medium">Cambridge, MA</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Availability</h3>
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 font-medium">Available for opportunities</span>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center space-x-2">
                      <span>📅</span>
                      <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-3 italic">
                      💬 You can email me and text any time ~
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                    <a
                      href="/robot.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Robotics Resume</span>
                    </a>
                    <a
                      href="/fullstack.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Full Stack Resume</span>
                    </a>
                  </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <FloatingParticles />
      
      {/* Animated Background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
        }}
      />

      {/* Header */}
      <header className={`bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/20 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Haoxin Liu
              </h1>
              <p className="text-gray-600 font-medium mt-1">Software Engineer & Tech Innovator</p>
            </div>
            <nav className="hidden md:flex space-x-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-white/50 hover:shadow-md'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white/80 backdrop-blur-md border-t border-white/20">
        <div className="container mx-auto px-4 py-3">
          <select
            value={activeSection}
            onChange={(e) => setActiveSection(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          >
            {navigationItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.icon} {item.label}
              </option>
            ))}
          </select>
        </div>
      </nav>

      {/* Main Content */}
      <main className={`container mx-auto px-4 py-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 shadow-2xl mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center space-x-6 mb-6">
            {/* GitHub */}
            <a
              href="https://github.com/lhx980327"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <Github className="w-6 h-6" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/haoxinliu98/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            {/* Email */}
            <a
              href="mailto:lhx980327@gmail.com"
              aria-label="Email"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-lg font-medium mb-2">&copy; 2025 Haoxin Liu. All rights reserved.</p>
          <p className="text-gray-300">
            Built with ❤️ using React, Next.js, and Tailwind CSS
          </p>
        </div>
      </footer>

    </div>
  );
};

export default HaoxinPortfolio;