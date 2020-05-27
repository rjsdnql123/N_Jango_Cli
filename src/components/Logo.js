import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.css';

const Logo = () => (
  <h1>
    <Link to="/" className="site-logo">
      Njango
    </Link>
  </h1>
);

export default Logo;
