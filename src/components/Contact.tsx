import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiLocationMarker, HiPhone, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <HiMail size={20} />,
      label: 'Email Address',
      value: 'dhanvanth.narla@gmail.com',
      href: 'mailto:dhanvanth.narla@gmail.com',
    },
    {
      icon: <HiPhone size={20} />,
      label: 'Direct Phone',
      value: '+91 7989470172',
      href: 'tel:+917989470172',
    },
    {
      icon: <HiLocationMarker size={20} />,
      label: 'Location',
      value: 'Anakapalli, Andhra Pradesh, India',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn size={18} />, href: 'https://linkedin.com/in/dhanvanth', label: 'LinkedIn', color: '#38bdf8' },
    { icon: <FaGithub size={18} />, href: 'https://github.com/dhanvanth', label: 'GitHub', color: '#f1f5f9' },
    { icon: <SiGmail size={18} />, href: 'mailto:dhanvanth.narla@gmail.com', label: 'Gmail', color: '#f87171' },
  ];

  return (
    <section id="contact" className="relative z-10 py-10 md:py-16">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs md:text-sm font-mono tracking-widest text-emerald-400 uppercase">Direct Channel</span>
          </div>
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="text-base md:text-lg mb-12 max-w-2xl text-slate-300 leading-relaxed text-left">
            Have an opportunity, internship role, or project you'd like to collaborate on? Feel free to reach out directly through the form or my personal channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Extra-Spacious Contact Form Card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 space-y-7 md:space-y-8 border border-white/10 overflow-hidden text-left">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-xs md:text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3 font-mono">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    className="form-input py-4 px-5 text-base"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs md:text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3 font-mono">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    className="form-input py-4 px-5 text-base"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs md:text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3 font-mono">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Share details about your message, role, or project..."
                  className="form-input py-4 px-5 text-base resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="glow-btn w-full py-4.5 rounded-xl text-white font-bold text-base flex items-center justify-center gap-3 transition-transform active:scale-[0.99] shadow-md"
                style={{ padding: '1.125rem' }}
              >
                {submitted ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <HiPaperAirplane size={18} className="rotate-90 text-white" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Extra-Spacious Contact Info Sidebar */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Contact details */}
            <div className="space-y-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="glass-card rounded-2xl p-6 sm:p-7 flex items-center gap-5 sm:gap-6 border border-white/10 overflow-hidden text-left">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    style={{ width: '3.5rem', height: '3.5rem' }}
                  >
                    {info.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-base md:text-lg font-bold text-slate-100 hover:text-emerald-400 transition-colors break-words block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base md:text-lg font-bold text-slate-100 break-words">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links box */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 overflow-hidden text-left">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 font-mono">
                Social & Developer Profiles
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-13 h-13 rounded-2xl flex items-center justify-center transition-transform duration-200 hover:scale-105 shrink-0"
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: social.color,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = social.color;
                      e.currentTarget.style.background = `${social.color}20`;
                      e.currentTarget.style.boxShadow = `0 0 16px ${social.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
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
