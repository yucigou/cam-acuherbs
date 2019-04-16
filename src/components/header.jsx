import React from 'react';
import styled from 'styled-components'
import Menu from './menu'

const StyledHeader = styled.header`
  padding: 0 24px;
  margin: 0 5%;
	border: none;
	color: #111;
	font-family: 'Playfair Display', serif;
	-webkit-font-smoothing: antialiased;
`

const Link = styled.a`
	text-decoration: none;
`

const Title = styled.div`
	font-size: 1.4em;
  padding: 10px 0
`

const SubTitle = styled.div`
	font-size: 0.9em;
  padding: 0 0 10px 0
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
	      <Title><Link href="/" title="Cambridge Acupuncture &amp; Herbs — Member of The Association of Traditional Chinese Medicine (UK)" rel="home">Cambridge Acupuncture <br/>&amp; Herbs</Link></Title>
	      <SubTitle>Member of The Association of <br/>Traditional Chinese Medicine (UK)</SubTitle>
	    </StyledHeader>
      <Menu />
			<HeaderImage>
				<Img src="/images/cam-acuherbs-banner-1.png"></Img>
			</HeaderImage>
		</React.Fragment>
  )
}

export default Header
