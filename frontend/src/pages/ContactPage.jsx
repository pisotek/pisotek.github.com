import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const eventTypes = [
  'Private Party',
  'Corporate Event',
  'Wedding',
  'Product Launch',
  'Brand Collaboration',
  'Other'
];

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    message: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEventTypeSelect = (type) => {
    setFormData(prev => ({ ...prev, eventType: type }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.eventType || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent(`Mixology Inquiry: ${formData.eventType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Event Type: ${formData.eventType}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:contact@alexsterling.com?subject=${subject}&body=${body}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    toast.success('Opening your email client...');
  };

  return (
    <main className="pt-24 pb-16 min-h-screen" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4"
          >
            Let&apos;s Connect
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#EDEDED] mb-6"
            data-testid="contact-title"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A0A0A0] text-base lg:text-lg max-w-2xl mx-auto"
          >
            Ready to create something extraordinary? Whether it&apos;s an intimate gathering 
            or a grand celebration, I&apos;d love to hear about your vision.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 lg:py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8" data-testid="contact-form">
                {/* Name Field */}
                <div>
                  <label className="label-elegant" htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-elegant"
                    placeholder="John Smith"
                    data-testid="input-name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="label-elegant" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-elegant"
                    placeholder="john@example.com"
                    data-testid="input-email"
                  />
                </div>

                {/* Event Type Dropdown */}
                <div className="relative">
                  <label className="label-elegant">Event Type</label>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="input-elegant text-left cursor-pointer flex items-center justify-between"
                    data-testid="dropdown-event-type"
                  >
                    <span className={formData.eventType ? 'text-[#EDEDED]' : 'text-[#666666]'}>
                      {formData.eventType || 'Select event type'}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#D4AF37] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-20 w-full mt-2 py-2 bg-[#1A1A1A] border border-[#333] shadow-xl"
                      data-testid="dropdown-menu"
                    >
                      {eventTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleEventTypeSelect(type)}
                          className="w-full px-4 py-3 text-left text-[#A0A0A0] hover:text-[#EDEDED] hover:bg-[#D4AF37]/10 transition-colors"
                          data-testid={`event-option-${type.toLowerCase().replace(' ', '-')}`}
                        >
                          {type}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="label-elegant" htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="input-elegant resize-none"
                    placeholder="Tell me about your event..."
                    data-testid="input-message"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3"
                  data-testid="submit-btn"
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:pl-12"
            >
              <div className="space-y-12">
                {/* Info Cards */}
                <div className="card-glass p-8">
                  <h3 className="font-heading text-xl text-[#EDEDED] mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-[#D4AF37]" size={18} />
                      </div>
                      <div>
                        <p className="text-[#666666] text-xs tracking-wider uppercase mb-1">Email</p>
                        <a 
                          href="mailto:contact@alexsterling.com" 
                          className="text-[#EDEDED] hover:text-[#D4AF37] transition-colors"
                          data-testid="contact-email"
                        >
                          contact@alexsterling.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-[#D4AF37]" size={18} />
                      </div>
                      <div>
                        <p className="text-[#666666] text-xs tracking-wider uppercase mb-1">Based In</p>
                        <p className="text-[#EDEDED]">New York City, USA</p>
                        <p className="text-[#A0A0A0] text-sm mt-1">Available for travel worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-heading text-lg text-[#EDEDED] mb-4">Follow the Journey</h3>
                  <p className="text-[#A0A0A0] text-sm mb-6">
                    Behind-the-scenes content, new creations, and industry insights.
                  </p>
                  
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      data-testid="social-instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      data-testid="social-linkedin"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>

                {/* Availability Note */}
                <div className="p-6 border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                  <p className="text-[#D4AF37] text-sm font-medium mb-2">Currently Booking</p>
                  <p className="text-[#A0A0A0] text-sm">
                    Accepting inquiries for Q2 2025 events. 
                    For urgent requests, please mention in your message.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
