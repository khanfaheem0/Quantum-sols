import React from 'react';
import { Monitor, Cpu, Wrench, Wind, Globe, ArrowRight } from 'lucide-react';
import CaseStudyCard from '../components/CaseStudyCard';
import './Work.css';

const Work = () => {
    return (
        <div className="work-page">
            <header className="work-header container">
                <h1>Our Services & <span className="gradient-text">Impact</span></h1>
                <p>From stunning local websites to intelligent global automation agents.</p>
            </header>

            {/* Local Services */}
            <section className="service-detail-section">
                <div className="container">
                    <div className="service-category">
                        <div className="category-info">
                            <div className="icon-box local"><Monitor size={32} /></div>
                            <h2>Local Digital Transformation</h2>
                            <p>We empower local businesses with world-class digital identities.</p>
                            <ul className="feature-list">
                                <li>Custom Website Design</li>
                                <li>E-commerce Solutions</li>
                                <li>Local SEO Optimization</li>
                                <li>Google Business Profile Management</li>
                            </ul>
                        </div>
                        <div className="category-visual local-visual"></div>
                    </div>
                </div>
            </section>

            {/* Global AI Agents */}
            <section className="service-detail-section dark-bg">
                <div className="container">
                    <div className="service-category reverse">
                        <div className="category-info">
                            <div className="icon-box global"><Cpu size={32} /></div>
                            <h2>Global AI Automation</h2>
                            <p>Scalable, intelligent agents for Tier-2 & Tier-3 countries.</p>

                            <div className="roadmap">
                                <div className="roadmap-step active">
                                    <span className="step-icon"><Wrench size={20} /></span>
                                    <div>
                                        <h4>Phase 1: Plumbing</h4>
                                        <p>Specialized agents for appointment booking & quoting.</p>
                                    </div>
                                </div>
                                <div className="roadmap-step future">
                                    <span className="step-icon"><Wind size={20} /></span>
                                    <div>
                                        <h4>Phase 2: HVAC</h4>
                                        <p>Seasonal maintenance scheduling & diagnostics.</p>
                                    </div>
                                </div>
                                <div className="roadmap-step future">
                                    <span className="step-icon"><Globe size={20} /></span>
                                    <div>
                                        <h4>Phase 3: Global Expansion</h4>
                                        <p>scaling to all local service sectors worldwide.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="category-visual global-visual"></div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="case-studies-section container">
                <h2 className="section-title">Case Studies</h2>
                <div className="case-grid">
                    <CaseStudyCard
                        title="Kashmir Arts Emporium"
                        category="Website - E-commerce"
                        description="A complete digital overhaul for a local handicraft business, increasing online sales by 40%."
                        link="#"
                        image="https://images.unsplash.com/photo-1596464716127-f9a0639b9360?auto=format&fit=crop&q=80"
                    />
                    <CaseStudyCard
                        title="AutoPlumb Agent"
                        category="AI Product"
                        description="Automated dispatch system for a plumbing network in Southeast Asia."
                        link="#"
                        image="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80"
                    />
                    <CaseStudyCard
                        title="Srinagar Stays"
                        category="Website - Booking"
                        description="Modern booking platform for a rapidly growing houseboat chain."
                        link="#"
                        image="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80"
                    />
                </div>
            </section>
        </div>
    );
};

export default Work;
