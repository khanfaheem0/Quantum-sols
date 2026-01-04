import React from 'react';
import { Terminal, Cpu, Network, Mail, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Team from '../components/Team';
import './About.css';

const About = () => {
    return (
        <div className="about-page container">
            {/* Massive Hero */}
            <section className="about-hero">
                <h1 className="heavy-title">
                    ENGINEERING <br />
                    <span className="outline-text">YOUR DEFENSE</span>
                </h1>
                <div className="hero-bar"></div>
                <p className="heavy-lead">
                    You’re leaving serious money on the table, not because your service isn’t good, but because you don’t have the right web apps and AI calling agents working for you around the clock. With the right systems, every interested lead gets greeted, guided, and followed up with automatically—so you stop leaking opportunities and start turning more of them into paying, repeat customers.
                </p>
            </section>

            {/* The Unit / Core Stats */}
            <section className="the-unit-section">
                <div className="unit-grid">
                    <div className="unit-block solid">
                        <span className="block-label">OPERATIVE STRENGTH</span>
                        <div className="block-content">
                            <span className="big-number">04</span>
                            <span className="block-text">SPECIALISTS</span>
                        </div>
                    </div>
                    <div className="unit-block glass">
                        <span className="block-label">SYSTEM CORE</span>
                        <div className="block-content">
                            <Network size={48} className="block-icon" />
                            <span className="block-text">DUAL-PHASE ARCHITECTURE</span>
                        </div>
                    </div>
                    <div className="unit-block solid">
                        <span className="block-label">CODEBASE</span>
                        <div className="block-content">
                            <Cpu size={48} className="block-icon" />
                            <span className="block-text">PROPRIETARY</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Protocol */}
            <section className="mission-protocol">
                <div className="protocol-container">
                    <div className="protocol-header">
                        <h2>THE MISSION DIRECTIVE</h2>
                        <div className="protocol-line"></div>
                    </div>
                    <div className="protocol-text">
                        <p>
                            <span className="highlight">THE THREAT:</span> OBSOLESCENCE.
                        </p>
                        <p>
                            <span className="highlight">THE REALITY:</span> Conventional operations often rely on the assumption of visibility and the consistency of manual response. In a high-velocity market, reliance on chance is a structural vulnerability. We replace reactive patterns with engineered certainty.
                        </p>

                        <div style={{ margin: '2.5rem 0', textAlign: 'left' }}>
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.2rem' }}>1. AUTONOMOUS VOICE AGENTS</h3>
                                <p style={{ margin: 0, fontSize: '1rem', opacity: 0.8 }}>
                                    <strong>The Pain:</strong> Every missed call is a lead gifted to your competitor. You can't work 24/7.
                                    <br />
                                    <strong>The Fix:</strong> We deploy intelligent voice operatives that answer every call immediately, qualify leads, and book appointments. They never sleep, never get sick, and never miss a deal.
                                </p>
                            </div>

                            <div>
                                <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.2rem' }}>2. DIGITAL FORTRESSES</h3>
                                <p style={{ margin: 0, fontSize: '1rem', opacity: 0.8 }}>
                                    <strong>The Pain:</strong> Incomplete infrastructure is an operational liability. If you lack a premium Website or custom Mobile App, you are invisible to the modern consumer. Inaccessibility bleeds revenue.
                                    <br />
                                    <strong>The Fix:</strong> We architect comprehensive digital ecosystems. We build high-performance Websites to capture leads and custom Mobile Apps to retain them. We ensure your brand dominates every screen, 24/7.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
                            <Link to="/contact" className="btn-primary heavy-btn">
                                INITIATE DEPLOYMENT <ChevronRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet The Team */}
            <Team />

            {/* Command Uplink (Contact) */}
            <section className="command-uplink">
                <div className="uplink-box">
                    <div className="uplink-header">
                        <Terminal size={20} />
                        <span>SECURE_CONNECTION_ESTABLISHED</span>
                    </div>
                    <div className="uplink-body">
                        <div className="uplink-row">
                            <span className="label">COMM_CHANNEL_01:</span>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=faheemk0077@gmail.com" target="_blank" rel="noopener noreferrer" className="value email">
                                faheemk0077@gmail.com
                            </a>
                        </div>
                        <div className="uplink-row">
                            <span className="label">COMM_CHANNEL_02:</span>
                            <span className="value phone">+91 96227 19775</span>
                        </div>
                        <div className="uplink-status">
                            <div className="status-dot blink"></div>
                            <span>AWAITING TRANSMISSION...</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
