import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Database, Code2, Cloud, Brain, Layers, GitBranch } from 'lucide-react';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      category: 'Programming & Development',
      icon: Code2,
      color: 'from-cyan-500 to-blue-500',
      skills: ['Data Structures', 'OOPs', 'Full Stack Development', 'HTML, CSS, JavaScript', 'Problem Solving'],
    },
    {
      category: 'Machine Learning & AI',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: ['Machine Learning', 'API Development', 'Python', 'Data Analysis'],
    },
    {
      category: 'Databases & Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: ['SQL', 'MongoDB', 'Node.js', 'Express.js'],
    },
    {
      category: 'Cloud & AR/VR',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: ['Cloud Computing', 'Augmented Reality', 'Linux Administration'],
    },
    {
      category: 'Tools & Frameworks',
      icon: Layers,
      color: 'from-yellow-500 to-orange-500',
      skills: ['Figma', 'React', 'Angular', 'Communication'],
    },
    {
      category: 'Networking',
      icon: GitBranch,
      color: 'from-indigo-500 to-purple-500',
      skills: ['CCNA Certified', 'Network Configuration'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
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
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Skills</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all group"
              >
                <div className={`flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-white text-xl mb-4">{category.category}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="text-2xl text-white mb-6 text-center">Key Expertise</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Data Structures', 'Machine Learning', 'Full Stack Development', 'SQL', 'Figma', 'OOPs', 'Cloud Computing', 'Augmented Reality', 'Problem Solving', 'Communication', 'Data Analyst'].map((expertise, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400"
                >
                  {expertise}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}