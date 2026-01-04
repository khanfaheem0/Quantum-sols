import React from 'react';
import { Linkedin, Mail, ShieldCheck } from 'lucide-react';
import './Team.css';

// Import images
import faheemImg from '../assets/team/faheem.jpeg';
import kamranImg from '../assets/team/kamran.jpg';
import burhaanImg from '../assets/team/burhaan.jpeg';
import shafatImg from '../assets/team/syed_shafat.jpeg';

const Team = () => {
    const team = [
        {
            name: 'Faheem Fida Khan',
            role: 'Chief Technology Officer (CTO)',
            focus: 'Technical Direction, AI Architecture',
            img: faheemImg
        },
        {
            name: 'Mohammad Kamran',
            role: 'Head of Strategy & Development',
            focus: 'Product Strategy, Solutions Engineering',
            img: kamranImg
        },
        {
            name: 'Burhaan Khan',
            role: 'Director of Business Development',
            focus: 'Client Partnerships, Global Growth',
            img: burhaanImg
        },
        {
            name: 'Syed Shafat',
            role: 'Head of Operations & Delivery',
            focus: 'Quality Assurance, Client Onboarding',
            img: shafatImg
        }
    ];

    return (
        <section className="team-section">
            <div className="container">
                <div className="team-header">
                    <h2>THE <span className="highlight">COMMAND UNIT</span></h2>
                    <p>Meet the architects behind the intelligence.</p>
                </div>

                <div className="team-grid">
                    {team.map((member, index) => (
                        <div key={index} className="team-card glass-panel">
                            <div className="member-image-wrapper">
                                {member.img ? (
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="member-image"
                                        style={member.imgStyle || {}}
                                    />
                                ) : (
                                    <div className="member-placeholder">
                                        <ShieldCheck size={48} color="#64748b" />
                                    </div>
                                )}
                                <div className="image-overlay"></div>
                            </div>
                            <div className="member-info">
                                <h3>{member.name}</h3>
                                <span className="member-role">{member.role}</span>
                                <div className="member-divider"></div>
                                <p className="member-focus">{member.focus}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
