import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder — integrate with a backend or email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <HiMail size={22} />,
      label: 'Email',
      value: 'dhanvanth.narla@gmail.com',
      href: 'mailto:dhanvanth.narla@gmail.com',
    },
    {
      icon: <HiPhone size={22} />,
      label: 'Phone',
      value: '+91 7989470172',
      href: 'tel:+917989470172',
    },
    {
      icon: <HiLocationMarker size={22} />,
      label: 'Location',
      value: 'Anakapalli, Andhra Pradesh',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn size={20} />, href: 'https://linkedin.com/in/dhanvanth', label: 'LinkedIn', color: '#0A66C2' },
    { icon: <FaGithub size={20} />, href: 'https://github.com/dhanvanth', label: 'GitHub', color: '#e5e7eb' },
    { icon: <SiGmail size={20} />, href: 'mailto:dhanvanth.narla@gmail.com', label: 'Gmail', color: '#EA4335' },
  ];

  return (
    <section id="contact" className="relative z-10">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="text-base mb-10 max-w-xl" style={{ color: 'var(--color-dark-300)' }}>
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="form-input resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="glow-btn w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <HiMail size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="glass-card rounded-xl p-5 flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--color-accent-start)' }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-dark-300)' }}>
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium text-white hover:underline underline-offset-4 decoration-accent-start/40"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="glass-card rounded-xl p-5">
              <p className="text-sm font-semibold text-white mb-4">Connect with me</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      background: `${social.color}12`,
                      color: social.color,
                      border: `1px solid ${social.color}20`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${social.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
