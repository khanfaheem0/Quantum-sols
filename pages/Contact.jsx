import React, { useState } from 'react';
import { Send, Mail, Phone, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        serviceType: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (Demo only)');
    };

    return (
        <div className="contact-page container">
            <header className="contact-header">
                <h1>Get in <span className="gradient-text">Touch</span></h1>
                <p>Ready to transform your business? Let's talk.</p>
            </header>

            <div className="contact-grid">
                <div className="contact-form-wrapper glass-panel">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="form-input"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="form-input"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Which service business are you in?</label>
                            <input
                                type="text"
                                placeholder="e.g., Plumbing, HVAC, Electrical..."
                                className="form-input"
                                value={formData.serviceType}
                                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                placeholder="Tell us about your project..."
                                className="form-input textarea"
                                rows="5"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                            Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                        </button>
                    </form>
                </div>

                <div className="contact-info">
                    <div className="info-card glass-panel">
                        <Mail className="info-icon" />
                        <h3>Email Us</h3>
                        <p>faheemk0077@gmail.com</p>
                    </div>
                    <div className="info-card glass-panel">
                        <Phone className="info-icon" />
                        <h3>Call Us</h3>
                        <p>+91 96227 19775</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
