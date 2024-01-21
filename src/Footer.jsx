import React from 'react';
import './styleFooter.css'; // Ensure you have this CSS file

const Footer = () => {
    return (
        <footer className="footer">
    
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Zapaura. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
