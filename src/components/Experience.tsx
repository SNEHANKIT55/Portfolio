import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      title: 'Full Stack Web Developer',
      company: 'Null Class edtech pvt',
      location: 'Remote',
      period: '01 Jul 2025 - 01 Aug 2025',
      description: 'Full Stack Web Development internship contributing to both frontend and backend development. Utilized Angular and React for building responsive and dynamic user interfaces. Developed backend APIs and server integration. Integrated various features such as booking, search, and user authentication.',
      skills: ['HTML, CSS, JavaScript', 'Angular', 'React'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Software Developer Intern',
      company: 'Motioncut / IT / Computers - Software',
      location: 'Remote',
      period: '01 Jul 2024 - 01 Aug 2024',
      description: 'Designed and developed responsive web applications using HTML, CSS, and JavaScript. Researched emerging technologies to improve existing solutions, and designed website content and layouts while ensuring the development of user-friendly, accessible websites.',
      skills: ['HTML, CSS, JavaScript'],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const certifications = [
    {
      title: 'Redhat Linux',
      issuer: 'Red Hat',
      description: 'Completed the Red Hat Academy certification, gaining hands-on experience in Linux system administration, shell scripting, and networking. This certification strengthened my skills in managing and troubleshooting Linux-based environments.',
    },
    {
      title: 'Cisco Certified Network Associate',
      issuer: 'Cisco',
      description: 'I have done with all 3 CCNA courses covering network fundamentals and configuration.',
    },
    {
      title: 'Alteryx Certification',
      issuer: 'Alteryx',
      description: 'Certification is about micro credential by alteryx.',
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl text-white mb-4"
            >
              Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Certifications</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            />
          </div>

          {/* Internships */}
          <div className="mb-16">
            <h3 className="text-2xl text-white mb-8">Internships</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="relative"
                >
                  {/* Connecting line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-500 opacity-30"></div>
                  )}
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color}`}>
                        <Briefcase className="text-white" size={24} />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h4 className="text-white text-xl mb-2">{exp.title}</h4>
                        <p className="text-cyan-400 mb-3">{exp.company}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-cyan-400 border border-cyan-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl text-white mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                      <Award className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white text-lg mb-1">{cert.title}</h4>
                      <p className="text-purple-400 text-sm mb-2">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}