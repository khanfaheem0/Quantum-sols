import React from 'react';
import { ExternalLink } from 'lucide-react';
import './CaseStudyCard.css';

const CaseStudyCard = ({ title, category, description, image, link }) => {
    return (
        <div className="case-card glass-panel">
            <div className="case-image">
                {/* Placeholder if no image provided, usually we'd pass a src */}
                <div className="img-placeholder" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="case-overlay">
                    <a href={link} className="view-project-btn">
                        View Project <ExternalLink size={16} />
                    </a>
                </div>
            </div>
            <div className="case-content">
                <span className="case-category">{category}</span>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CaseStudyCard;
