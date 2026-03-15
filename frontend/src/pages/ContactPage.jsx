import { useState } from 'react';
import { Instagram, Linkedin, Mail, MapPin, Send, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const eventTypes = [
  { value: 'private-party', label: 'Private Party' },
  { value: 'corporate-event', label: 'Corporate Event' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'product-launch', label: 'Product Launch' },
  { value: 'brand-collaboration', label: 'Brand Collaboration' },
  { value: 'other', label: 'Other' }
];

const CONTACT_EMAIL = 'contact@alexsterling.com';
const MAILTO_LINK = `mailto:${CONTACT_EMAIL}`;

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEventTypeChange = (value) => {
    const selectedEvent = eventTypes.find(e => e.value === value);
    setFormData(prev => ({ ...prev, eventType: selectedEvent?.label || '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.eventType || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    const subject = encodeURIComponent(`Mixology Inquiry: ${formData.eventType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Event Type: ${formData.eventType}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    toast.success('Opening your email client...');
  };

  return (
    <main className="pt-24 pb-16 min-h-screen" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4">
            Let&apos;s Connect
          </p>
          <h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#EDEDED] mb-6"
            data-testid="contact-title"
          >
            Get in Touch
          </h1>
          <p className="text-[#A0A0A0] text-base lg:text-lg max-w-2xl mx-auto">
            Ready to create something extraordinary? Whether it&apos;s an intimate gathering 
            or a grand celebration, I&apos;d love to hear about your vision.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 lg:py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              {/* Maintenance Notice */}
              <div
                className="mb-8 p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-start gap-4"
                data-testid="maintenance-notice"
              >
                <AlertTriangle className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-[#EDEDED] text-sm font-medium mb-1">Service Under Maintenance</p>
                  <p className="text-[#A0A0A0] text-sm">
                    The contact form is currently under maintenance. Please reach out directly at{' '}
                    <a 
                      href={MAILTO_LINK}
                      className="text-[#D4AF37] hover:underline"
                      data-testid="maintenance-email-link"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 opacity-50 pointer-events-none" data-testid="contact-form">
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
                <div>
                  <label className="label-elegant">Event Type</label>
                  <Select onValueChange={handleEventTypeChange} data-testid="dropdown-event-type">
                    <SelectTrigger 
                      className="w-full h-auto py-4 px-0 bg-transparent border-0 border-b border-[#333] rounded-none text-base text-[#EDEDED] hover:border-[#D4AF37] focus:border-[#D4AF37] focus:ring-0 transition-colors"
                      data-testid="select-trigger"
                    >
                      <SelectValue placeholder="Select event type" className="text-[#666666]" />
                    </SelectTrigger>
                    <SelectContent 
                      className="bg-[#1A1A1A] border border-[#333] rounded-none shadow-xl"
                      data-testid="select-content"
                    >
                      {eventTypes.map((type) => (
                        <SelectItem 
                          key={type.value} 
                          value={type.value}
                          className="py-3 px-4 text-[#A0A0A0] hover:text-[#EDEDED] hover:bg-[#D4AF37]/10 focus:bg-[#D4AF37]/10 focus:text-[#EDEDED] cursor-pointer rounded-none"
                          data-testid={`event-option-${type.value}`}
                        >
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12">
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
                          href={MAILTO_LINK}
                          className="text-[#EDEDED] hover:text-[#D4AF37] transition-colors"
                          data-testid="contact-email"
                        >
                          {CONTACT_EMAIL}
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
