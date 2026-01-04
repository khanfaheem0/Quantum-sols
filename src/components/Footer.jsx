import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section brand">
                    <h3>QUANTUM TECH AI</h3>
                    <p>Empowering businesses with the future of AI automation and digital presence.</p>
                </div>

                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h4>Connect</h4>
                    <div className="contact-item">
                        <Mail size={16} />
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=faheemk0077@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>faheemk0077@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <Phone size={16} />
                        <span>+91 96227 19775</span>
                    </div>
                    <div className="contact-item">
                        <MapPin size={16} />
                        <a href="https://maps.app.goo.gl/V4TZFgdUWZGcQLCXA?g_st=ac" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Srinagar J&K, India</a>
                    </div>
                    <div className="social-links">
                        <a href="#"><Linkedin size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Quantum Tech AI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
