import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <ul>
          <li>24/7 Support: +1 800 555 0199</li>
          <li>Email: support@bankingservices.com</li>
          <li>Branch Locator</li>
        </ul>
      </div>
      
      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Security Information</li>
          <li>GDPR Compliance</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Banking Hours</h4>
        <ul>
          <li>Mon-Fri: 9:00 - 17:00</li>
          <li>Sat: 9:00 - 13:00</li>
          <li>Sun: Closed</li>
          <li>Online Banking: 24/7</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Banking Services. All rights reserved.</p>
        <p>Licensed Financial Institution | Member FDIC</p>
      </div>
    </footer>
  );
}; 