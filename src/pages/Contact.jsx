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
    const [isSubmitting, setIsSubmitting] = useState(false);

    const getLocation = () => {
        return new Promise((resolve) => {
            if (!navigator.geolocation) {
                resolve({ error: "Geolocation not supported" });
                return;
            }
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        cordinates: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        },
                        precise: true
                    });
                },
                (error) => {
                    resolve({ error: error.message, precise: false });
                }
            );
        });
    };

    const getTimeSpent = () => {
        const start = sessionStorage.getItem('sessionStart');
        if (!start) return "Unknown";
        const elapsed = Date.now() - parseInt(start, 10);
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        return `${minutes}m ${seconds}s`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // 1. Get Location (doesn't block if denied)
            const locationData = await getLocation();

            // 2. Calculate Time Spent
            const timeSpent = getTimeSpent();

            // 3. Prepare Data
            const data = new FormData();
            data.append('timestamp', new Date().toISOString());
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('serviceType', formData.serviceType);
            data.append('message', formData.message);
            data.append('location_params', JSON.stringify(locationData));
            data.append('time_spent', timeSpent);

            // 4. Send to Google Sheet
            await fetch("https://script.google.com/macros/s/AKfycbyB9XeEFUmkeWYjPkwcJLjeitDIocoj1p87zyigJ88PA7fHU3xdErSXCXHg6G_j3cpa/exec", {
                method: 'POST',
                body: data,
                mode: 'no-cors' // Critical for Google Apps Script Web App
            });

            // 5. Success
            alert('Message sent successfully! We will contact you shortly.');
            setFormData({ name: '', email: '', serviceType: '', message: '' });
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to send message. Please try again or email us directly.');
        } finally {
            setIsSubmitting(false);
        }
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
                                required
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
                                required
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
                                required
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
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn-primary"
                            style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            {!isSubmitting && <Send size={18} style={{ marginLeft: '0.5rem' }} />}
                        </button>
                    </form>
                </div>

                <div className="contact-info">
                    <div className="info-card glass-panel">
                        <Mail className="info-icon" />
                        <h3>Email Us</h3>
                        <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=faheemk0077@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>faheemk0077@gmail.com</a></p>
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
