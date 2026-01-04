import React, { useEffect } from 'react';
import { ArrowRight, Code, Smartphone, Mic, Globe, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services-page">
            {/* Hero Section */}
            <header className="services-hero container">
                <div className="hero-content">
                    <h1>We Don't Just Build Tech. <br /><span className="gradient-text">We Build Empires.</span></h1>
                    <p className="hero-subtext">
                        Your business is fighting a war for attention. To win, you need weapons, not toys.
                        We forge digital arsenals that convert traffic into revenue.
                    </p>
                </div>
            </header>

            {/* Service 1: AI Voice Agents */}
            <article className="service-article dark-panel" id="ai-voice">
                <div className="container">
                    <div className="article-header">
                        <div className="service-icon-large">
                            <Mic size={48} />
                        </div>
                        <h2>The 24/7 Employee <span className="highlight">(AI Voice Agents)</span></h2>
                        <h3 className="hook-text">"Imagine a receptionist who never sleeps, never takes a break, and always sells."</h3>
                    </div>

                    <div className="article-body">
                        <div className="pain-point-box">
                            <h4><ShieldCheck size={20} /> The Silent Killer</h4>
                            <p>
                                Missed calls are missed money. Period.
                                Data shows that <strong>27% of leads</strong> abandon a business if their call goes to voicemail.
                                If you're busy on a job site, or sleeping, or eating dinner—you are literally burning cash.
                            </p>
                        </div>

                        <div className="narrative-content">
                            <p>
                                This is the future we are building at Quantum Tech Solutions.
                                Our AI Voice Agents are not those robotic "Press 1 for Sales" menus.
                                These are hyper-realistic, conversational intelligences that can hold a conversation, understand context, and drive a goal.
                            </p>
                            <p>
                                Your AI agent can answer the phone at 2 AM, answer questions about your pricing, check your calendar availability in real-time,
                                and actually book the appointment directly into your CRM.
                            </p>
                            <p>
                                It’s like hiring a team of elite sales reps who work for pennies an hour, never complain, and never quit.
                                This is the unfair advantage you've been looking for. While your competitors are sleeping, you are closing deals.
                            </p>
                        </div>

                        <div className="solution-box glass-panel">
                            <h4><Zap size={20} /> The Revolution</h4>
                            <ul className="benefits-list">
                                <li><strong>Zero Wait Times:</strong> Every caller gets answered instantly.</li>
                                <li><strong>Perfect Script Adherence:</strong> The AI never forgets to upsell or ask for details.</li>
                                <li><strong>Instant Scalability:</strong> 10 calls at once? 100? No problem.</li>
                                <li><strong>Massive Cost ROI:</strong> Replaces a $40k/yr receptionist for a fraction of the cost, with zero sick days.</li>
                                <li><strong>Time Freedom:</strong> Stop being glued to your phone. Focus on high-value work (or your family) while we handle the noise.</li>
                            </ul>
                        </div>

                        <div className="cta-wrapper">
                            <p className="cta-lead">Stop burning your leads.</p>
                            <Link to="/contact" className="btn-primary">
                                Deploy My AI Agent <Mic size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            {/* Service 2: Website Development */}
            <article className="service-article light-panel" id="web-dev">
                <div className="container">
                    <div className="article-header">
                        <div className="service-icon-large">
                            <Globe size={48} />
                        </div>
                        <h2>The Digital Storefront <span className="highlight">(Web Dev)</span></h2>
                        <h3 className="hook-text">"Your website isn't just a URL; it's your handshake."</h3>
                    </div>

                    <div className="article-body">
                        <div className="pain-point-box">
                            <h4><ShieldCheck size={20} /> The Hard Truth</h4>
                            <p>
                                In a world of 3-second attention spans, a clunky site is a closed door.
                                Most local businesses treat their website like a digital business card—static, boring, and dead.
                                If your site takes 5 seconds to load, your customer is already buying from your competitor.
                            </p>
                        </div>

                        <div className="narrative-content">
                            <p>
                                A website is often the first interaction a client has with your brand. In a crowded digital space, first impressions aren't just important—they are everything.
                                We believe that your online presence should be a true reflection of the quality you provide in the real world.
                            </p>
                            <p>
                                We move beyond standard templates to create digital experiences that feel substantial and authentic.
                                By combining modern aesthetics with solid engineering, we ensure your site isn't just a placeholder, but a reliable tool that communicates trust and competence to every visitor.
                            </p>
                            <p>
                                Our goal is to give you a platform that feels seamless to use and effortless to manage, allowing you to focus on running your business while we ensure your digital storefront is always open and welcoming.
                            </p>
                        </div>

                        <div className="solution-box glass-panel">
                            <h4><Zap size={20} /> The Quantum Standard</h4>
                            <ul className="benefits-list">
                                <li><strong>Distinctive Design Identity:</strong> We craft custom visual languages that make you memorable in a sea of generic templates.</li>
                                <li><strong>Hyper-Optimized Performance:</strong> Engineering-grade speed optimizations ensure instant load times, respecting your customers' patience.</li>
                                <li><strong>Search-Ready Architecture:</strong> We implement clean, semantic coding standards that search engines reward with higher visibility.</li>
                                <li><strong>Frictionless User Journeys:</strong> Intuitive navigation and clear paths guide visitors naturally to your services, preventing confusion.</li>
                                <li><strong>Future-Proof Engineering:</strong> Built on modern tech stacks (React/Vite) that scale with you, preventing the need for constant rebuilds.</li>
                            </ul>
                        </div>

                        <div className="cta-wrapper">
                            <p className="cta-lead">Stop losing customers to bad design.</p>
                            <Link to="/contact" className="btn-primary">
                                Build My Storefront <Code size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            {/* Service 3: App Development */}
            <article className="service-article dark-panel" id="app-dev">
                <div className="container">
                    <div className="article-header">
                        <div className="service-icon-large">
                            <Smartphone size={48} />
                        </div>
                        <h2>Pocket Power <span className="highlight">(Custom Apps)</span></h2>
                        <h3 className="hook-text">"Be in their pocket, not just on their browser."</h3>
                    </div>

                    <div className="article-body">
                        <div className="pain-point-box">
                            <h4><ShieldCheck size={20} /> The Bottleneck</h4>
                            <p>
                                Spreadsheets. Email chains. Paper forms.
                                If your business runs on these, you are bleeding efficiency.
                                Genuine growth breaks manual systems. You can't scale if you're drowning in admin work.
                            </p>
                        </div>

                        <div className="narrative-content">
                            <p>
                                Off-the-shelf software often forces successful businesses to change their proven workflows to fit a rigid system.
                                We believe technology should bend to your business, not the other way around. True efficiency comes from tools built specifically for your unique operational DNA.
                            </p>
                            <p>
                                We engineer bespoke digital environments—Progressive Web Apps (PWAs) and native solutions—that act as a direct extension of your operations.
                                Whether it's field technicians logging data offline or inventory systems that predict shortages, we build systems that solve your specific bottlenecks.
                            </p>
                            <p>
                                By treating your internal operations with the same level of design and care as a consumer product, we turn administrative friction into a competitive asset, increasing both daily efficiency and overall company valuation.
                            </p>
                        </div>

                        <div className="solution-box glass-panel">
                            <h4><Zap size={20} /> The Quantum System</h4>
                            <ul className="benefits-list">
                                <li><strong>Bespoke Operational Logic:</strong> We map and digitize your exact workflows, eliminating manual workarounds and spreadsheets.</li>
                                <li><strong>Seamless Systems Integration:</strong> We connect your new tools with existing software (CRM, Accounting), creating a unified data ecosystem.</li>
                                <li><strong>Enterprise-Grade Security:</strong> Your business data is your most valuable asset; we protect it with banking-level security standards.</li>
                                <li><strong>Scalable Cloud Architecture:</strong> Built to handle 10 users or 10,000. Your software grows with your business without requiring a rewrite.</li>
                                <li><strong>Data-Driven Intelligence:</strong> We build analytics dashboards that turn raw operational data into clear, actionable business insights.</li>
                            </ul>
                        </div>

                        <div className="cta-wrapper">
                            <p className="cta-lead">Systemize your success.</p>
                            <Link to="/contact" className="btn-primary">
                                Create My App <Smartphone size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Services;
