
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
                Whether you're looking for a full-stack developer, AI enthusiast, or just want to chat about technology, 
                feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-md transition-all duration-300">
                  <Mail className="text-blue-600 mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">vikeshmehta49@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-md transition-all duration-300">
                  <MapPin className="text-blue-600 mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">Bhopal, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">350+</div>
                  <div className="text-blue-100">Users Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-blue-100">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50%</div>
                  <div className="text-blue-100">Performance Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-blue-100">Team Members Led</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">Connect on Social</h3>
              
              <div className="space-y-6">
                <a
                  href="https://github.com/Vikesh-Mehta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="text-gray-700 group-hover:text-black mr-4" size={32} />
                  <div>
                    <p className="font-bold text-gray-800 text-lg">GitHub</p>
                    <p className="text-gray-600">Check out my code repositories</p>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/vikesh-mehta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105"
                >
                  <Linkedin className="text-blue-600 group-hover:text-blue-700 mr-4" size={32} />
                  <div>
                    <p className="font-bold text-gray-800 text-lg">LinkedIn</p>
                    <p className="text-gray-600">Let's connect professionally</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Available For</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Full-stack Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">AI/ML Projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Open Source Contributions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Freelance Opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Internship Positions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
