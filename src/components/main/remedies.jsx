import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainSection from '../ui/atom/main-section'

const Remedies = () => {
  return (
    <MainSection>
      <h2>Remedies</h2>
      <p>We offer the following traditional Chinese remedies:</p>
      <ul>
        <li><Link to="/acupuncture">Acupuncture</Link></li>
        <li><Link to="/chinese-herbs">Chinese Herbs</Link></li>
        <li><Link to="/cupping">Cupping</Link></li>
      </ul>
    </MainSection>
  )
}

export default Remedies
