
import React from 'react';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                Vikesh Mehta
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Computer Science undergraduate specialized in full-stack development and AI-driven solutions. 
              Building scalable applications that make a difference.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <a
              href="https://drive.google.com/file/d/1l96vJLZogzQRTUSNqhXrYEgKr2Egcel0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://github.com/Vikesh-Mehta"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Github className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300" size={24} />
            </a>
            
            <a
              href="https://www.linkedin.com/in/vikesh-mehta/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
