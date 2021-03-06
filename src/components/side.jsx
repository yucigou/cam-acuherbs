import React from 'react';
import styled from 'styled-components'

const SideSection = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    display: block;
    padding: 10px 10px 10px 50px;
    width: 33%;
    float: left;
    margin-top: -10px;
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

const ContactHeading = styled.h4`
  margin-bottom: 10px;
`

const ContactContent = styled.p`
  margin-top: 0px;
`

const Side = () => {
	return (
    <SideSection>
      <h3>CONTACT US</h3>
      <ContactHeading>Phone</ContactHeading>
      <ContactContent>01223-412216</ContactContent>
      <ContactHeading>Address</ContactHeading>
      <ContactContent>238 Mill Road<br/>Cambridge, CB1 3NF</ContactContent>
      <GoogleMap>
        <MapIFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.539085858045!2d0.14351041651951515!3d52.19725027975455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8707df1a6ee75%3A0xc6f557524383ce66!2s238+Mill+Rd%2C+Cambridge+CB1+3NF!5e0!3m2!1sen!2suk!4v1555400060436!5m2!1sen!2suk" width="600" height="450" frameborder="0" style={{border: 0}} allowfullscreen></MapIFrame>
      </GoogleMap>
    </SideSection>
  )
}

export default Side
