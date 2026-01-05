import React from 'react';
import { ArrowRight, Globe, Bot, Cpu, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TacticalCTA from '../components/TacticalCTA';
import Inspiration from '../components/Inspiration';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg"></div>
                <div className="container hero-content">
                    <span className="hero-badge">Architecting Intelligence</span>
                    <h1 className="hero-title">
                        <span className="gradient-text">Forging Digital</span> <br />
                        Dominance
                    </h1>
                    <p className="hero-subtitle">
                        We build <strong>Premium Websites</strong> that convert and deploy <strong>AI Voice Calling Agents</strong> that close deals.
                        Your complete digital workforce, engineered for results.
                    </p>
                    <div className="hero-cta">
                        <Link to="/contact" className="btn-primary">
                            Start Project <ArrowRight size={18} />
                        </Link>
                        <Link to="/services" className="btn-secondary">
                            View Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2>TACTICAL CAPABILITIES</h2>
                        <p>Deploying superior digital infrastructure and autonomous workforce solutions.</p>
                    </div>

                    <div className="services-grid">
                        <ServiceCard
                            icon={Bot}
                            title="AUTONOMOUS VOICE AGENTS"
                            description="Deploy intelligent voice operatives to handle prospecting, scheduling, and support. Eliminate missed opportunities."
                            targets={["Plumbers", "HVAC", "Electricians", "Cleaning Services", "etc."]}
                            capabilities={[
                                "Missed Calls = Lost Revenue? We capture every lead 24/7.",
                                "Paying Staff to Answer Phones? Save 70% on overhead costs.",
                                "Leads Going Cold? Instant follow-up doubles conversion rates.",
                                "Emergency Chaos? Automated dispatch prevents disasters.",
                                "Blind Spots? Real-time ROI dashboards show exactly what's working."
                            ]}
                            highlight={true}
                        />

                        <ServiceCard
                            icon={Globe}
                            title="DIGITAL FORTRESSES"
                            description="We design and build premium Websites and Mobile Apps that look great and work perfectly. Simple, fast, and effective."
                            targets={["E-commerce", "Hotels", "Law Firms", "Medical", "Corporate", "etc."]}
                            capabilities={[
                                "Slow Website = Lost Customers? We build lightning-fast platforms.",
                                "Outdated Design = No Trust? We build modern, premium brands.",
                                "Invisible on Google? Our SEO architecture ranks you higher.",
                                "Mobile Users Leaving? We create flawless mobile experiences.",
                                "Can't Scale? Custom App Development handles your growth."
                            ]}
                            highlight={false}
                        />
                    </div>
                </div>
            </section>

            {/* Tactical CTA Diagnostic */}
            <TacticalCTA />

            {/* Inspiration / Origin Section */}
            <Inspiration />

            {/* Value Props */}
            <section className="value-section">
                <div className="container">
                    <div className="value-grid">
                        <div className="value-item">
                            <Cpu className="value-icon" />
                            <h3>Advanced Technology</h3>
                            <p>Built on the latest tech stack (React, AI APIs) for speed and scalability.</p>
                        </div>
                        <div className="value-item">
                            <Zap className="value-icon" />
                            <h3>Lightning Fast</h3>
                            <p>Optimized performance ensuring your digital assets load instantly.</p>
                        </div>
                        <div className="value-item">
                            <Shield className="value-icon" />
                            <h3>Future Proof</h3>
                            <p>Solutions designed to adapt and grow with the evolving AI landscape.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
