import React from 'react';
import { ArrowRight, Target, ShieldAlert, CheckCircle } from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description, targets, capabilities, highlight }) => {
    return (
        <div className={`service-card glass-panel ${highlight ? 'highlight' : ''}`}>
            <div className="card-header">
                <div className="card-icon">
                    <Icon size={32} />
                </div>
                <h3>{title}</h3>
            </div>

            <div className="card-section goal">
                <span className="section-label">OBJECTIVE</span>
                <p>{description}</p>
            </div>

            <div className="card-section targets">
                <span className="section-label">MISSION_TARGETS</span>
                <div className="target-tags">
                    {targets.map((target, index) => (
                        <span key={index} className="target-tag">{target}</span>
                    ))}
                </div>
            </div>

            <div className="card-section capabilities">
                <span className="section-label">TACTICAL_ADVANTAGE</span>
                <ul className="capability-list">
                    {capabilities.map((cap, index) => (
                        <li key={index}>
                            <div className="cap-icon-wrapper">
                                <CheckCircle size={14} className="cap-icon" />
                            </div>
                            <span className="cap-text">{cap}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button className="card-btn">
                Initiate Protocol <ArrowRight size={16} />
            </button>
        </div>
    );
};

export default ServiceCard;
