
import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Generative AI Storyteller",
      period: "Apr 2025–May 2025",
      tech: ["Flask", "Google Gemini API", "HTML/CSS/JS"],
      description: [
        "Engineered a Flask application integrating Google's Gemini API (gemini-1.5-flash) to generate story continuations—serving 100 DAU in beta.",
        "Designed /generate story endpoint with error handling (API keys, missing prompts, timeouts), achieving 99.5% uptime.",
        "Built a responsive UI; improved page load time by 30% through code splitting and lazy loading noncritical scripts.",
        "Implemented CI/CD workflows (GitHub Actions) with pytest unit tests, reducing deployment cycle by 40%."
      ],
      github: "https://github.com/Vikesh-Mehta/Generative-AI-Storyteller",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Personal Expense Tracker App",
      period: "Feb 2025–Apr 2025",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Framer Motion"],
      description: [
        "Devised a secure MERN-stack tracker, onboarding 250 users within first month.",
        "Implemented budget-management features with dynamic Chart.js visualizations and alert notifications—enhancing adherence by 25%.",
        "Leveraged WebSockets for real-time notifications at 80% budget usage, decreasing overruns by 15%.",
        "Refined MongoDB schema and indexing strategy—halved query latency (200ms to 100ms)."
      ],
      github: "https://github.com/Vikesh-Mehta/PERSONAL_EXPENSE_TRACKER_APP",
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "GitHub MERN Profile Platform",
      period: "May 2024–Jul 2024",
      tech: ["MERN", "Passport.js", "GitHub OAuth"],
      description: [
        "Spearheaded development of a MERN platform with GitHub OAuth (Passport.js), achieving a 98% login success rate.",
        "Created features for liking, cloning, and viewing repositories—garnered 150+ active users in two weeks.",
        "Engineered tech-stack extraction by parsing package.json/requirements.txt for 1,000+ repos.",
        "Composed API documentation and onboarding guide—reduced developer ramp-up time by 60%."
      ],
      github: "https://github.com/Vikesh-Mehta/MERN-GIT-PLATFORM",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "ML-Powered Personalized Food Ordering App",
      period: "Jan 2024 - April 2024",
      tech: ["HTML", "CSS", "Kotlin", "Flask", "Machine Learning"],
      description: [
        "Built a mobile-friendly app that recommends personalized meals based on health conditions using machine learning algorithms",
        "Created a predictive ML model using a small dataset, with plans to scale for accuracy and personalization",
        "Designed a user-friendly front-end and integrated back-end services for handling user data"
      ],
      github: "https://github.com/Vikesh-Mehta/Nutribite---Personalized-Food-Recommendation-App-",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Digital Library Platform",
      period: "Sep 2023 - Dec 2023",
      tech: ["HTML", "CSS", "Node.js", "MongoDB"],
      description: [
        "Designed and implemented a digital library platform allowing users to register, log in, and browse a collection of books by category",
        "Developed and implemented user-specific book recommendations and secure data management with MongoDB"
      ],
      github: "#",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend cutting-edge technology with real-world impact
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-500 mb-4">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{project.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${project.gradient} opacity-90 hover:opacity-100 transition-opacity duration-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {project.description.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 bg-gradient-to-r ${project.gradient}`}></div>
                        <p className="text-gray-600 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center lg:items-end gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    <Github size={20} />
                    <span>View Code</span>
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
