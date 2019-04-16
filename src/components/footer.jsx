import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.footer`
	background-color: #111111;
	font-family: 'Lato', Helvetica, sans-serif;
	color: #fff;
	font-size: 12px;
	font-weight: 700;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 1px;
	padding: 15px 0;
`

const Footer = () => {
	return (
    <StyledFooter>
      <p>Copyright © {new Date().getFullYear()}</p>
      <p>Cambridge Acupuncture & Herbs</p>
    </StyledFooter>
  )
}

export default Footer
