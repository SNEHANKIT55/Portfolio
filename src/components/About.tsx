import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Users, Trophy } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Developer',
      description: 'Experienced in HTML, CSS, JavaScript, React, and backend technologies',
    },
    {
      icon: Zap,
      title: 'Quick Learner',
      description: 'Passionate about learning and applying new technologies',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Strong communication and collaboration skills',
    },
    {
      icon: Trophy,
      title: 'Certified Professional',
      description: 'CCNA, Red Hat Linux, and Alteryx certifications',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            />
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I am <span className="text-cyan-400">Snehankit Menkudale</span>, an Enthusiastic Computer Engineering student with 
              hands-on experience in Full Stack Development, Augmented Reality, Data Analyst and in Cloud services. Also actively 
              contributed in college clubs and participated in various events. A passionate sport player with strong team leadership 
              skills. Skilled in problem-solving, coding, and teamwork, with a passion for learning and applying new technologies.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-white text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
            className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="text-2xl text-white mb-6">Personal Details</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <span className="text-gray-400">Email:</span>
                <span className="ml-2 text-white">sdmenkudale0204@gmail.com</span>
              </div>
              <div>
                <span className="text-gray-400">Phone:</span>
                <span className="ml-2 text-white">+91-9763562416</span>
              </div>
              <div>
                <span className="text-gray-400">Location:</span>
                <span className="ml-2 text-white">Pune City, Maharashtra, India</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}