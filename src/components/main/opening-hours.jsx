import React from 'react';
import styled from 'styled-components'
import MainSection from '../ui/atom/main-section'

const Hours = styled.p`
	padding-left: 20px;
`

const OpeningHours = () => {
	return (
    <MainSection>
      <h1>Opening Hours</h1>
      <h2>Monday – Saturday: </h2>
      <Hours>10:00 – 19:00</Hours>
      <h2>Sunday: </h2>
      <Hours>By appointment only</Hours>
    </MainSection>
  )
}

export default OpeningHours
