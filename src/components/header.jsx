import React from 'react';
import styled from 'styled-components'
import Menu from './menu'

const StyledHeader = styled.header`
  padding: 0 24px;
  margin: 0 10%;
	border: none;
	color: #111;
	background: #fafafa;
	font-family: 'Playfair Display', 'Georgia', serif;
	-webkit-font-smoothing: antialiased;
`

const Link = styled.a`
	text-decoration: none;
`

const H2 = styled.h2`
	font-size: 2em;
`

const HeaderImage = styled.div`
	max-height: 350px;
	background-size: cover;
	background-position: center;
	display: block;
`

const Img = styled.img`
	max-width: 100%;
	height: auto;
`

const Header = () => {
	return (
		<React.Fragment>
	    <StyledHeader>
	      <H2><Link href="http://cam-acuherbs.co.uk" title="Cambridge Acupuncture &amp; Herbs — Member of The Association of Traditional Chinese Medicine (UK)" rel="home">Cambridge Acupuncture &amp; Herbs</Link></H2>
	      <p>Member of The Association of Traditional Chinese Medicine (UK)</p>
	    </StyledHeader>
      <Menu />
			<HeaderImage>
				<Img src="/images/cam-acuherbs-banner-1.png"></Img>
			</HeaderImage>
		</React.Fragment>
  )
}

export default Header
