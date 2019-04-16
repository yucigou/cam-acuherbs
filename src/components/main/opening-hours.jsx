import React from 'react';
import styled from 'styled-components'
import MainSection from '../ui/atom/main-section'

const Hours = styled.p`
	padding-left: 20px;
`

const OpeningHours = () => {
	return (
    <MainSection>
      <h2>Opening Hours</h2>
      <h3>Monday – Saturday: </h3>
      <Hours>10:00 – 19:00</Hours>
      <h3>Sunday: </h3>
      <Hours>By appointment only</Hours>
    </MainSection>
  )
}

export default OpeningHours
