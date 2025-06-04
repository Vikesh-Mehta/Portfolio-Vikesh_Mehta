
import React from 'react';
import { GraduationCap, Award, Globe } from 'lucide-react';

const About = () => {
  const technicalSkills = [
    'C', 'C++', 'Java', 'Python', 'SQL', 'Kotlin', 'HTML', 'CSS', 'JavaScript',
    'React.js', 'Node.js', 'Tailwind CSS', 'Django', 'Flask', 'Express.js',
    'OpenCV', 'MongoDB', 'Git', 'GitHub', 'MATLAB', 'APIs', 'VS Code',
    'TensorFlow', 'Scikit-learn', 'Pandas'
  ];

  const softSkills = ['Leadership', 'Teamwork', 'Communication', 'Attention to Detail', 'Analytical Thinking'];
  const languages = ['English', 'Hindi'];

  const achievements = [
    'Successfully co-authored and presented a Research Paper - Viksit Bharat (2024) focusing on rural development.',
    'Got selected among 1,68,000 applications.',
    'Internal Round Finalist in Smart India Hackathon 2024 among many teams from our university.',
    '2nd Round in AI Explain Hackathon'
  ];

  const certifications = [
    'NPTEL Marketing Analyst',
    'Full Stack Developer—MERN (SMARTBRIDGE)',
    'Generative AI Using IBM WatsonX',
    'NPTEL Cloud Computing',
    'Bits & Bytes of Computer Networking—Google',
    'Python & Django Development'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Summary</h3>
              <p className="text-gray-600 leading-relaxed">
                Computer Science undergraduate specialized in full-stack (MERN, Flask/Django) and AI-driven solutions. 
                Architected and launched scalable applications serving 350+ users; optimized performance metrics by 50%; 
                led a team of 3; presented research to 200+ industry professionals. Seeking to apply technical acumen and 
                collaborative problem-solving to deliver impactful software.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-800">Education</h3>
              </div>
              <div className="border-l-4 border-blue-200 pl-4">
                <h4 className="font-semibold text-lg text-gray-800">B.Tech, Computer Science & Engineering</h4>
                <p className="text-gray-600">VIT Bhopal University, Bhopal, MP</p>
                <p className="text-blue-600 font-medium">Sep 2022 - Expected Sep 2026</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Soft Skills</h3>
                <div className="space-y-2">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Globe className="text-blue-600 mr-3" size={20} />
                  <h3 className="text-xl font-bold text-gray-800">Languages</h3>
                </div>
                <div className="space-y-2">
                  {languages.map((language, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">{language}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-6">
              <Award className="text-blue-600 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-gray-800">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Additional Highlights</h3>
          <div className="space-y-4 text-gray-600">
            <p><strong>Hackathons & Competitions:</strong> Smart India Hackathon 2024 (Finalist), AI-Xplain Hackathon 2024 (Round 2), Microsoft AI Skills Challenge 2024 (Certified).</p>
            <p><strong>Research & Presentations:</strong> Presented at National Conference "VIVIBHA'24" (SGT University, Nov 2024); Industry visits to HAL, BMTC Bengaluru Darshini, PreProd Corp (Sep 2024).</p>
            <p><strong>Open-Source Contributions:</strong> Contributed to React UI libraries (50+ stars, 20 forks); maintained Django-based non-profit portal (5% monthly user growth).</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
