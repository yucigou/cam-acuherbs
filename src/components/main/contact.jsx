import React from 'react';
import MainSection from '../ui/atom/main-section'
import styled from 'styled-components'

const Photo = styled.img`
  width: 360px;
  @media (min-width: 768px) {
    width: 752px;
  }
`

const GoogleMap = styled.div`
  position: relative;
  padding-bottom: 75%; // This is the aspect ratio
  height: 0;
  overflow: hidden;
`

const MapIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
`

const Contact = () => {
	return (
    <MainSection>
      <h2>Contact Us</h2>
      <p>You are welcome to contact us through the telephone, or visit us on site.</p>
      <ul>
        <li>Telephone: 01223-412216</li>
        <li>Address: 238 Mill Road, Cambridge, CB1 3NF</li>
      </ul>
      <Photo src="/images/2016-05-15.png"
        alt="238 Mill Road, Cambridge, CB1 3NF"
      >
      </Photo>
      <GoogleMap>
        <MapIFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.539085858045!2d0.14351041651951515!3d52.19725027975455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8707df1a6ee75%3A0xc6f557524383ce66!2s238+Mill+Rd%2C+Cambridge+CB1+3NF!5e0!3m2!1sen!2suk!4v1555400060436!5m2!1sen!2suk" width="600" height="450" frameborder="0" style={{border: 0}} allowfullscreen></MapIFrame>
      </GoogleMap>
    </MainSection>
  )
}

export default Contact
