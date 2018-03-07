import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Landing.css';

const Landing = () => (
  <div>
    <h1 className={styles.color}>Landing</h1>
    <Link to='/projects'>Projects</Link>
  </div>
)

export default Landing;
