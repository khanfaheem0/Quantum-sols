import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ArrowRight, Calculator, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import './TacticalCTA.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TacticalCTA = () => {
    const [step, setStep] = useState(1); // 1: Hook1, 2: Hook2, 3: Input, 4: Result
    const [avgCalls, setAvgCalls] = useState('');
    const [avgCost, setAvgCost] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    // New Formula provided by user:
    // Annual Calls = Calls * 288
    // Missed (27%) -> Lost (80%) -> Jobs (50%) -> Revenue
    const calculateLoss = () => {
        const calls = parseFloat(avgCalls) || 0;
        const cost = parseFloat(avgCost) || 0;

        const annualCalls = calls * 288;
        const missedCalls = annualCalls * 0.27;
        const lostForGood = missedCalls * 0.80;
        const lostJobs = lostForGood * 0.50;

        return lostJobs * cost;
    };

    const yearlyLoss = calculateLoss();
    const recoveredRevenue = yearlyLoss * 0.85; // 85% Recovery rate based on user math

    const handleHook1 = (response) => {
        // Regardless of yes or no, we proceed to interest check
        setStep(2);
    };

    const handleHook2 = () => {
        setStep(3);
    };

    const handleCalculate = (e) => {
        e.preventDefault();
        if (avgCalls && avgCost) {
            setStep(4);
        }
    };

    const resetCalculator = () => {
        setStep(1);
        setAvgCalls('');
        setAvgCost('');
        setIsHovered(false);
    };

    // Chart Configuration
    const chartData = {
        labels: ['Annual Revenue Impact'],
        datasets: [
            {
                label: isHovered ? 'Revenue Recovered' : 'Revenue Lost',
                data: [isHovered ? recoveredRevenue : yearlyLoss],
                backgroundColor: isHovered ? '#34c759' : '#ff3b30',
                borderRadius: 8,
                barThickness: 60,
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const value = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.raw);
                        return isHovered ? `Recoverable: ${value}` : `Lost: ${value}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
                ticks: { color: '#888' }
            },
            x: {
                grid: { display: false },
                ticks: { display: false }
            }
        },
        onHover: (event, chartElement) => {
            if (chartElement.length > 0) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        }
    };

    // Formatting currency
    const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

    return (
        <section className="tactical-cta-section">
            <div className="container">
                <div className="cta-grid">
                    <div className="cta-content">
                        <div className="status-indicator">
                            <span className="blink-dot"></span>
                            REVENUE_FORENSICS
                        </div>
                        <h2>STOP GUESSING. <br /><span className="highlight">START QUANTIFYING.</span></h2>
                        <p>Most service businesses bleed 27% of their leads to missed calls. Do you know exactly how much that costs you?</p>

                        {step === 4 && (
                            <div className="action-wrapper">
                                <Link to="/contact" className="btn-primary heavy-btn">
                                    RECLAIM THIS REVENUE <ArrowRight />
                                </Link>
                                <button onClick={resetCalculator} className="reset-link">
                                    <RefreshCw size={14} /> Recalculate
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="cta-interaction glass-panel">
                        {step === 1 && (
                            <div className="hook-step fade-in">
                                <h3>Operational Status Check:</h3>
                                <div className="question-display">
                                    <p className="large-question">"Are you a service business losing calls daily?"</p>
                                    <div className="single-choice-wrapper">
                                        <button className="toggle-card small highlight-border" onClick={() => handleHook1('yes')} style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}>
                                            <span>YES</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="hook-step fade-in">
                                <h3>Financial Impact Analysis:</h3>
                                <div className="question-display">
                                    <p className="large-question">"Do you want to calculate your exact revenue loss?"</p>
                                    <button className="btn-primary full-width" onClick={handleHook2}>
                                        YES, SHOW ME THE NUMBERS <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <form onSubmit={handleCalculate} className="input-step fade-in">
                                <h3>Input Your Metrics:</h3>
                                <div className="form-group">
                                    <label>Average Calls Per Day</label>
                                    <input
                                        type="number"
                                        min="0"
                                        step="1"
                                        placeholder="e.g., 10"
                                        value={avgCalls}
                                        onChange={(e) => setAvgCalls(e.target.value)}
                                        required
                                        autoFocus
                                        className="calc-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Average Value per Job ($)</label>
                                    <input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        placeholder="e.g., 250"
                                        value={avgCost}
                                        onChange={(e) => setAvgCost(e.target.value)}
                                        required
                                        className="calc-input"
                                    />
                                </div>
                                <button type="submit" className="btn-primary full-width">
                                    REVEAL RECOVERY POTENTIAL <Calculator size={18} />
                                </button>
                            </form>
                        )}

                        {step === 4 && (
                            <div className="result-step fade-in">
                                <h3>Annual Business Impact</h3>

                                <div className="chart-wrapper" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                    <Bar data={chartData} options={chartOptions} />
                                </div>

                                <div className="narrative-result">
                                    <p>
                                        With <strong>{avgCalls} calls/day</strong> and an average job value of <strong>${avgCost}</strong>,
                                        businesses like yours are likely losing around <span className="loss-text">{formatCurrency(yearlyLoss)}</span> per year in revenue from unanswered calls.
                                    </p>
                                    <p className="recovery-text">
                                        By answering those calls automatically, our calling agent can realistically help you recover <strong>≈85%</strong> of that,
                                        or about <span className="gain-text">{formatCurrency(recoveredRevenue)}</span> per year in additional booked work.
                                    </p>
                                    <p className="disclaimer-note">
                                        *Estimates use industry benchmarks for missed-call rate (27%), conversion, and caller behavior. Actual results depend on your market and operations.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TacticalCTA;
