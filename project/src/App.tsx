import React, { useState } from 'react';
import { Menu, X, Code2, Github, Linkedin, Mail, ExternalLink, ChevronRight, Newspaper, User, FolderGit2 } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a high-performance WooCommerce solution handling 10,000+ products with custom filtering and checkout optimization",
      tech: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Real Estate Website",
      description: "Developed a custom WordPress theme with advanced property search and interactive maps integration",
      tech: ["WordPress", "Google Maps API", "PHP", "ACF Pro"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Educational Platform",
      description: "Created a Learning Management System with course management and student progress tracking",
      tech: ["WordPress", "LearnDash", "MySQL", "REST API"],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const blogPosts = [
    {
      title: "Optimizing WordPress Performance",
      date: "March 15, 2024",
      excerpt: "Essential techniques for improving WordPress site speed and performance through caching and code optimization.",
    },
    {
      title: "Building Custom Gutenberg Blocks",
      date: "March 10, 2024",
      excerpt: "A step-by-step guide to creating custom Gutenberg blocks for enhanced content editing.",
    },
    {
      title: "WordPress Security Best Practices",
      date: "March 5, 2024",
      excerpt: "Comprehensive guide to securing WordPress websites against common vulnerabilities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Ayoola Dayo</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projects</a>
              <a href="#blog" className="text-gray-600 hover:text-indigo-600">Blog</a>
              <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Projects</a>
              <a href="#blog" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Blog</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Hi, I'm Ayoola Dayo</span>
                    <span className="block text-indigo-600">WordPress Developer & Consultant</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    I specialize in crafting custom WordPress solutions that drive business growth and enhance user experience. With expertise in performance optimization and scalable architectures, I help businesses succeed online.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Get in touch
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a href="#projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                        View Projects
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <User className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              With over 7 years of experience in WordPress development, I've helped numerous businesses establish and grow their online presence through custom WordPress solutions.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Technical Skills</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['WordPress', 'PHP', 'JavaScript', 'React', 'MySQL', 'REST API', 'Git', 'WooCommerce', 'HTML5', 'CSS3', 'jQuery', 'Gutenberg'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Services</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2">Custom Theme Development</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2">Plugin Development</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2">E-commerce Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2">Performance Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2">Security Hardening</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <FolderGit2 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-500">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <Newspaper className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Latest Articles
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="text-sm text-gray-500">{post.date}</div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-3 text-gray-500">{post.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
                  Read more <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <Mail className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Have a project in mind? Let's discuss how I can help bring your vision to life.
            </p>
          </div>

          <div className="mt-16 max-w-lg mx-auto">
            <form className="grid grid-cols-1 gap-6" action={`mailto:ayooladayo32@gmail.com`} method="post" encType="text/plain">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">Or email me directly at:</p>
              <a href="mailto:ayooladayo32@gmail.com" className="text-indigo-600 hover:text-indigo-500 font-medium">
                ayooladayo32@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-gray-500">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-500">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:ayooladayo32@gmail.com" className="text-gray-400 hover:text-gray-500">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 Ayoola Dayo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;