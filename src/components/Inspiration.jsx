import React from 'react';
import { Mountain, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Inspiration.css';

const Inspiration = () => {
    return (
        <section className="inspiration-section">
            <div className="container">
                <div className="inspiration-grid">
                    <div className="inspiration-content">
                        <div className="inspiration-badge">
                            <Mountain size={16} />
                            <span>ORIGIN: KASHMIR</span>
                        </div>
                        <h2>FROM THE VALLEY TO <span className="highlight">THE WORLD</span></h2>

                        <p className="inspiration-lead">
                            We forge our code in the heart of Kashmir. A land of breathtaking beauty, but one starved of digital ambition. We are here to change that.
                        </p>

                        <div className="inspiration-text">
                            <p>
                                We are not just building websites; we are building a beacon. Our mission is to transform this region into a global technology hub. But this mission starts with <strong>YOU</strong>.
                            </p>
                            <p>
                                Your business is stuck in the past. In today's warfare, <strong>AI Agents</strong> and <strong>Premium Apps</strong> are not luxuries—they are survival tools.
                                Without them, you are fighting with sticks while the world uses lasers.
                            </p>
                            <p className="heavy-impact">
                                Transform or perish. The choice is yours.
                            </p>
                        </div>

                        <Link to="/contact" className="btn-primary heavy-btn">
                            JOIN THE REVOLUTION <Zap size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inspiration;
