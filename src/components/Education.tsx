import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const education = [
    {
      degree: 'B.Tech - Computer Engineering',
      institution: 'MIT Academy of Engineering, Pune',
      location: 'Alandi, Pune',
      period: '2022 - 2026',
      cgpa: 'CGPA: 7.82 / 10',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      degree: '12th - HSC',
      institution: 'MSBSHSE',
      location: 'Pune',
      period: '2022',
      percentage: 'Percentage: 75.67 / 100',
      color: 'from-purple-500 to-pink-500',
    },
    {
      degree: '10th - SSC',
      institution: 'Bharat High school jeur',
      location: 'Pune',
      period: '2020',
      percentage: 'Percentage: 90.60%',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const activities = [
    'Certificate of excellence for contributing to make college magzine',
    'I like to play volleyball and also represented college at various tournaments',
  ];

  const interests = [
    'Reading',
    'Writing',
    'Listening Speeches',
    'Swimming',
    'Playing Sport',
  ];

  return (
    <section id="education" className="py-20 relative">
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
              Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Activities</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            />
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="relative"
                >
                  {/* Connecting line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-500 opacity-30"></div>
                  )}
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${edu.color}`}>
                        <GraduationCap className="text-white" size={24} />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h4 className="text-white text-xl mb-2">{edu.degree}</h4>
                        <p className="text-cyan-400 mb-3">{edu.institution}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-3 text-gray-400 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-cyan-400">
                          {edu.cgpa || edu.percentage}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Activities and Interests */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Extra Curricular Activities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500">
                  <Award className="text-white" size={20} />
                </div>
                <h3 className="text-white text-2xl">Extra Curricular</h3>
              </div>
              <ul className="space-y-3">
                {activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Personal Interests */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                  <Award className="text-white" size={20} />
                </div>
                <h3 className="text-white text-2xl">Personal Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}