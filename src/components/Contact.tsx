import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using formsubmit.co - a free form backend service
      const response = await fetch('https://formsubmit.co/ajax/sdmenkudale0204@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
          _template: 'table',
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try emailing directly.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try emailing directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sdmenkudale0204@gmail.com',
      href: 'mailto:sdmenkudale0204@gmail.com',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9763562416',
      href: 'tel:+919763562416',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune City, Maharashtra, India',
      href: '#',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
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
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Touch</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 mt-4"
            >
              Feel free to reach out for collaborations or just a friendly chat
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl text-white mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all group"
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} group-hover:scale-110 transition-transform`}>
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <h4 className="text-white mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 hover:from-cyan-500 hover:to-blue-500 transition-all"
                  >
                    <Github className="text-white" size={24} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 hover:from-cyan-500 hover:to-purple-500 transition-all"
                  >
                    <Linkedin className="text-white" size={24} />
                  </motion.a>
                  <motion.a
                    href="mailto:sdmenkudale0204@gmail.com"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 hover:from-purple-500 hover:to-pink-500 transition-all"
                  >
                    <Mail className="text-white" size={24} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-16 pt-8 border-t border-slate-700/50 text-center"
          >
            <p className="text-gray-400">
              © 2025 Snehankit Menkudale. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}