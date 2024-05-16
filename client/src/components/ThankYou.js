import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/result');
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [navigate]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#333', fontSize: '2em' }}>Thank you for Casting your Precious Vote</h1>
            <p style={{ color: '#666', fontSize: '1.2em' }}>Redirecting to Results Page....</p>
        </div>
    );
};

export default ThankYou;
