import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, Database, Brain, Terminal } from 'lucide-react';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: 'E-Commerce Full Stack',
      period: '18 Jul 2024 - 31 Jul 2024',
      team: 'Individual',
      description: 'The objective of this project is to develop an e-commerce product page. The page should display detailed information about the product, such as the product image, name, description, price, and an add-to-cart button. The design should be user-friendly and visually attractive.',
      skills: ['HTML, CSS, JavaScript'],
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'AI Healthcare Chatbot',
      period: '2024',
      team: 'Team Size: 4',
      description: 'Developed a multilingual AI-powered healthcare chatbot with voice input/output using Node.js, Express, MongoDB, and JavaScript. Implemented symptom-based disease prediction using a medical dataset and conversational support via a language model API. Designed secure user authentication and responsive UI supporting English, Hindi, and Marathi.',
      skills: ['Machine Learning', 'API', 'Node.js', 'MongoDB'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Self Driving Car',
      period: '2024',
      team: 'Team Size: 3',
      description: 'A self-driving car using Convolution neural networks CNN. In this I have used open-source Self-driving car simulator provided by Udacity that is used in their Self-driving car Nano degree program. Using this simulator we will first drive the car and collect data. Then we will train a CNN model to learn this behavior and then test that model to train real car data and get promising results when they drive it autonomously.',
      skills: ['Python', 'Machine Learning'],
      icon: Database,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Redbud Clone Project',
      period: '2024',
      team: 'Individual',
      description: 'Developed a clone of the Redbud platform focusing on responsive design and user interface. Implemented modern web development practices to recreate the design and functionality.',
      skills: ['HTML, CSS, JavaScript', 'React'],
      icon: Code,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
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
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${project.color} group-hover:scale-110 transition-transform`}>
                    <project.icon className="text-white" size={28} />
                  </div>
                  
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      <Github className="text-gray-300" size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      <ExternalLink className="text-gray-300" size={20} />
                    </motion.button>
                  </div>
                </div>

                <h3 className="text-white text-2xl mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-3 mb-3 text-gray-400 text-sm">
                  <span>{project.period}</span>
                  <span>•</span>
                  <span>{project.team}</span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-cyan-400 border border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}